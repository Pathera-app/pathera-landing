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
    <html lang="en" className={`${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
