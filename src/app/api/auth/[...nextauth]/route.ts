import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
import { JWT } from "next-auth/jwt"
import { DefaultSession } from 'next-auth';

const prisma = new PrismaClient()

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email }
        });

        if (!admin) {
          return null;
        }

        if (credentials.password != admin.password) {
          return null;
        }

        return {
          id: admin.id.toString(), // Ensure id is a string
          email: admin.email,
        };
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT, user: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token && typeof token.id === 'string') {
        if (!session.user) {
          session.user = { id: token.id };
        } else {
          session.user.id = token.id;
        }
      }
      return session;
    },
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
