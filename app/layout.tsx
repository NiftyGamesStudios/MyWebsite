import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Note: removed `next/font/google` usage from the v0 scaffold because
// the `next/font` API has changed across Next releases and can cause
// build errors with newer Next versions (e.g., Next 14+). Load fonts
// via a <link> to Google Fonts or a local @font-face in globals.css.

export const metadata: Metadata = {
  title: "NiftyGames - Indie Game Developer & Unity Specialist",
  description:
    "Professional indie game development services. I build engaging 2D & casual games with clean code and polished gameplay.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
