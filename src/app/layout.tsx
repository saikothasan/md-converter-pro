import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Markdown Converter Pro",
  description: "Professional Markdown conversion tool for developers and writers",
  keywords: ["markdown", "converter", "html", "json", "professional", "developers", "writers"],
  authors: [{ name: "Saikothasan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-converter-pro.pages.dev",
    siteName: "Markdown Converter Pro",
    images: [
      {
        url: "https://md-converter-pro.pages.dev/down-right-arrow_10067883.png",
        width: 1200,
        height: 630,
        alt: "Markdown Converter Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mdconverterpro",
    creator: "@mdconverterpro",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

