import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pathera.app'),
  title: "Pathera | Complete Career Development Platform",
  description: "AI-powered CV review, practice assessments, work experience opportunities, interview prep and more - all in one place. Start your career journey with Pathera.",
  keywords: [
    "pathera app",
    "pathera app UK",
    "pathera app UK",
    "work experience finder",
    "work experience app",
    "work experience app UK",
    "work experience app year 10",
    "work experience app year 11",
    "work experience year 12",
    "work experience year 13",
    "finance work experience year 12",
    "finance work experience year 13",
    "tech work experience year 12",
    "tech work experience year 13",
    "law work experience year 12",
    "law work experience year 13",
    "medical work experience year 12",
    "medical work experience year 13",
    "accounting work experience year 12",
    "engineering work experience year 12",
    "marketing work experience year 12",
    "business work experience year 12",
    "design work experience year 12",
    "art work experience year 12",
    "music work experience year 12",
    "film work experience year 12",
    "computer science work experience year 12",
    "physics work experience year 12",
    "chemistry work experience year 12",
    "biology work experience year 12",
    "geography work experience year 12",
    "history work experience year 12",
    "career development", 
    "student platform", 
    "CV review", 
    "CV builder",
    "CV maker",
    "CV generator",
    "CV editor",
    "CV writer",
    "CV creator",
    "CV designer",
    "CV roaster",
    "Ai cv builder",
    "Ai cv maker",
    "Ai cv generator",
    "Ai cv editor",
    "Ai cv writer",
    "Ai cv creator",
    "Ai cv designer",
    "Ai cv roaster",
    "Ai cv reviewer",
    "Ai cv feedback",
    "Ai cv review",
    "Ai cv builder",
    "Ai cv maker",
    "Ai cv generator",
    "Ai interview prep",
    "Ai interview practice",
    "Ai interview coach",
    "Ai interview guide",
    "Ai interview tips",
    "Ai interview questions",
    "Ai interview answers",
    "AI interview",
    "AI interviewer UK",
    "Ai interviwer Uni student",
    "Ai interviwer Uni student UK",
    "interview prep", 
    "work experience", 
    "AI career tools", 
    "career guidance", 
    "professional development", 
    "job preparation", 
    "career coaching", 
    "A-levels career help", 
    "sixth form careers", 
    "university students UK", 
    "graduate jobs UK", 
    "student career platform", 
    "16-25 career development", 
    "UK university careers", 
    "college student jobs", 
    "UCAS preparation", 
    "internships UK students", 
    "work experience students", 
    "career advice students", 
    "graduate career planning", 
    "student CV builder", 
    "UK student jobs", 
    "early career development", 
    "young professional careers", 
    "student career guidance",
     "UK graduate opportunities", 
     "university career support", 
     "pathera", "pathera by leaf", 
     "pathera work experience", 
     'student career platform UK',
      'career support for students',
      'career advice for teens UK',
      'youth career development UK',
      'platform for young professionals',
      'sixth form opportunities UK',
      'post-16 education support',
      'student pathways UK',
      'UK future careers hub',
      'platform for student success',
      'GCSE student career support',
      'A-level student guidance',
      'college student careers UK',
      'university career platform',
      'gap year opportunities UK',
      'UK student mentorship platform',
      'support for sixth form students',
      'school leaver career support',
      'student future planning tool',
      'UK student progression platform',
      'career pathways for students',
      'work experience for 16–25 UK',
      'apprenticeships for students',
      'CV and interview support',
      'skill building for students hoeUK',
      'personal development for students',
      'employability for young people',
      'early careers platform UK',
      'digital portfolio for students',
      'soft skills for young professionals',
      'peer support for students UK',
      'student events platform UK',
      'student leadership opportunities',
      'student community UK',
      'UK youth empowerment',
      'support network for students',
      'student career network',
      'inspiration for young people UK',
      'student advice hub',
      'mentor matching platform UK',
      'Gen Z career tech',
      'future skills platform UK',
      'digital hub for young talent',
      'next-gen student support',
      'UK youth innovation platform',
      'AI for student success',
      'smart careers platform',
      'UK youth opportunities',
      'student roadmap UK',
      'next steps after GCSEs',
      'work experience finder UK',
      'student internship finder',
      'AI interviewer for students',
      'mock interview AI tool',
      'AI career interview practice',
      'online CV reviewer',
      'AI CV feedback tool',
      'CV builder for students',
      'student portfolio creator',
      'youth career AI tools',
      'digital mentor for students',
      'UK apprenticeship support',
      'student future planner tool',
      'student progress tracker',
      'career readiness platform',
      'AI career assistant for youth',
      "pathera login dashboard",  
      "pathera login",
      "pathera login page",
  ],
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
  verification: {
    google: "your-unique-verification-code", // Replace this with the actual code from Google Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://pathera.app',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: "Pathera",
  },
  openGraph: {
    title: "Pathera | Complete Career Development Platform",
    description: "AI-powered career development platform for students aged 16-25. Get CV reviews, practice assessments, and work experience opportunities.",
    url: 'https://pathera.app',
    siteName: 'Pathera',
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: '/logo1.png',
        width: 1200,
        height: 630,
        alt: 'Pathera Platform Preview',
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathera | Complete Career Development Platform",
    description: "AI-powered career development platform for students aged 16-25.",
    images: ['/logo1.png'],
    creator: '@pathera',
    site: '@pathera',
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
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Pathera',
              url: 'https://pathera.app',
              description: 'AI-powered career development platform for students aged 16-25. Get CV reviews, practice assessments, and work experience opportunities.',
              potentialAction: {
                '@type': 'SearchAction',
                'target': 'https://pathera.app/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} bg-[#0B0F1A] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
