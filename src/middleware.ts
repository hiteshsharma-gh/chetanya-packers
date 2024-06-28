import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const admin = ['admin@chetanyapackers.com']
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })

  if (token) {
    const email = token.email

    if (email) {
      if (admin.includes(email)) {
        return NextResponse.next()
      }
    }
  }

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/admin/addorder', '/admin/allcustomer', '/admin/allorder', '/admin/deleteorder', '/admin/updateorder']
}
