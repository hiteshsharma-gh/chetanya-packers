import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Providers } from "./providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Chetanya International Packers and Movers",
  description: "Chetanya Internation Packers and Movers is a company for all your packing and moving needs be it domestic, international, comercial or local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        "flex flex-col"
      )}>
        <header>
          <Navbar />
        </header>
        <main className="mt-56 lg:mt-0">
          <Providers>
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
