import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SubhYatra Coming Soon - Nepal's Local Ride-Booking App",
    template: "%s | SubhYatra",
  },
  description:
    "Join the waitlist for SubhYatra - Nepal's first truly local ride-booking app. Built in Nepal for Nepal, featuring AI-powered matching, dual-mode functionality, and advanced safety features. Coming October 2025.",
  keywords: [
    "SubhYatra",
    "Nepal ride booking",
    "Nepal taxi app",
    "local transportation Nepal",
    "ride sharing Nepal",
    "Kathmandu taxi",
    "Nepal mobility app",
    "coming soon",
    "waitlist",
    "made in Nepal",
    "Nepali app",
    "transportation Nepal",
    "ride hailing Nepal",
    "AI powered rides",
    "dual mode driver passenger",
    "Nepal roads navigation",
    "local drivers Nepal",
    "safety features Nepal",
    "October 2025 launch",
  ],
  authors: [{ name: "SubhYatra Team", url: "https://subhyatra.com" }],
  creator: "SubhYatra - Sankat Mochan Sajilo Yatra Pvt. Ltd.",
  publisher: "SubhYatra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://subhyatra.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ne-NP": "/ne-NP",
    },
  },
  openGraph: {
    title: "SubhYatra Coming Soon - Nepal's Local Ride-Booking App",
    description:
      "Your Ride, Your Way. The Nepali Way. Join 5000+ Nepalis on the waitlist for Nepal's first truly local ride-booking experience. Built in Nepal, for Nepal.",
    url: "https://subhyatra.com",
    siteName: "SubhYatra",
    locale: "en_US",
    type: "website",
    countryName: "Nepal",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SubhYatra - Nepal's Local Ride-Booking App Coming Soon",
      },
      {
        url: "/Hero.webp",
        width: 800,
        height: 600,
        alt: "SubhYatra App Interface Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SubhYatra Coming Soon - Nepal's Local Ride-Booking App",
    description:
      "Your Ride, Your Way. The Nepali Way. Join the waitlist for Nepal's first truly local ride-booking experience.",
    creator: "@subhyatra",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "icon", url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  category: "transportation",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFD304" },
    { media: "(prefers-color-scheme: dark)", color: "#182B48" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  appleWebApp: {
    capable: true,
    title: "SubhYatra",
    statusBarStyle: "default",
  },
  applicationName: "SubhYatra",
  appLinks: {
    web: {
      url: "https://subhyatra.com",
      should_fallback: true,
    },
  },
  bookmarks: ["https://subhyatra.com"],
  archives: ["https://subhyatra.com"],
  assets: ["https://subhyatra.com"],
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
