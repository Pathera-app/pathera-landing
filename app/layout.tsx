import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Pathera | Complete Career Development Platform",
  description: "AI-powered CV review, practice assessments, work experience opportunities, interview prep and more - all in one place. Start your career journey with Pathera.",
  keywords: ["career development", "student platform", "CV review", "interview prep", "work experience", "AI career tools"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#0B0F1A",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Pathera",
  },
  openGraph: {
    title: "Pathera | Complete Career Development Platform",
    description: "AI-powered career development platform for students aged 16-25. Get CV reviews, practice assessments, and work experience opportunities.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathera | Complete Career Development Platform",
    description: "AI-powered career development platform for students aged 16-25.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#0B0F1A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} bg-[#0B0F1A] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
