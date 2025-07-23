import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#0B0F1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://pathera.app'),
  title: 'Pathera: #1 Student Work Experience Platform | UK Career Development',
  description: 'Find your perfect work experience placement for Years 10-13. AI-powered CV review, practice assessments, tech, finance, medical & engineering opportunities. Trusted by UK schools and students for GCSE, A-Level work experience and career development.',
  keywords: [
    'Pathera', 'Career Development', 'CV Review', 'Assessments', 'Work Experience', 'Interview Prep', 'AI Interviewer',
    
    'London year 12 work experience', 'Manchester year 13 work experience', 'Birmingham year 11 work experience',
    'UK remote year 12 work experience', 'virtual year 13 work experience', 'online year 11 work experience',
    'work experience near me year 12', 'local work experience year 13', 'weekend work experience year 11',
    
    'best work experience for year 12', 'easy work experience year 11', 'paid work experience year 13',
    'summer 2024 work experience', 'winter 2024 work experience', 'spring 2025 work experience',
    'one week work experience year 12', 'two week work experience year 13', 'flexible work experience year 11',
    
    'doctor work experience year 12', 'lawyer work experience year 13', 'accountant work experience year 11',
    'software developer work experience', 'investment banking work experience', 'architect work experience',
    'dentist work experience', 'veterinary work experience', 'psychology work experience',
    
    'grammar school work experience', 'private school work experience', 'state school work experience',
    'independent school work experience', 'comprehensive school work experience',
    'international school work experience', 'boarding school work experience',
    
    'work experience year 12', 'work experience year 13', 'work experience year 11', 'work experience year 10',
    'year 12 work placement', 'year 13 work placement', 'year 11 work placement', 'year 10 work placement',
    'year 12 internship', 'year 13 internship', 'year 11 career experience', 'year 10 career experience',
    'sixth form work experience', 'lower sixth work experience', 'upper sixth work experience',
    'AS level work experience', 'A2 level work experience', 'pre-university work experience',
    
    'year 12 tech work experience', 'year 13 tech work experience', 'year 11 tech work experience',
    'year 12 business work experience', 'year 13 business work experience', 'year 11 business work experience',
    'year 12 finance work experience', 'year 13 finance work experience', 'year 11 finance work experience',
    'year 12 marketing work experience', 'year 13 marketing work experience', 'year 11 marketing work experience',
    'year 12 data science work experience', 'year 13 data science work experience', 'year 11 data science work experience',
    'year 12 healthcare work experience', 'year 13 healthcare work experience', 'year 11 healthcare work experience',
    'year 12 legal work experience', 'year 13 legal work experience', 'year 11 legal work experience',
    'year 12 engineering work experience', 'year 13 engineering work experience', 'year 11 engineering work experience',
    'year 12 medical work experience', 'year 13 medical work experience', 'year 11 medical work experience',
    
    'maths work experience', 'further maths work experience', 'physics work experience', 'chemistry work experience',
    'biology work experience', 'computer science work experience', 'economics work experience',
    'business studies work experience', 'psychology work experience', 'sociology work experience',
    'english literature work experience', 'history work experience', 'geography work experience',
    
    'pre A-level work experience', 'during A-levels work experience', 'post A-level work experience',
    'pre GCSE work experience', 'post GCSE work experience', 'between GCSE and A-level work experience',
    'sixth form college work experience', 'college student work experience',
    'AS year work experience', 'A2 year work experience', 'final year sixth form work experience',
    
    'tech work experience', 'IT work experience', 'software development work experience',
    'business work experience', 'finance work experience', 'marketing work experience',
    'healthcare work experience', 'medical work experience', 'legal work experience',
    
    'coding experience', 'programming internship', 'software engineering placement',
    'first job experience', 'career starter', 'entry level experience',
    'skill building', 'career skills', 'workplace learning',
    
    'student work opportunities', 'student career development', 'student professional development',
    'work while studying', 'part time work experience', 'flexible student work',
    'virtual internship', 'online work experience', 'student career platform',
    
    'CV builder', 'resume help', 'interview practice', 'career guidance',
    'career coaching', 'professional profile', 'career planning', 'job search help',
    
    'UK work experience', 'London work experience', 'remote work experience UK',
    'global internship', 'work from home experience', 'virtual work placement',
    
    'summer work experience', 'winter internship', 'spring placement',
    'short term work experience', 'two week work experience', 'one month internship',
    
    'AI career guidance', 'automated CV review', 'interview simulator',
    'skills assessment', 'personality test', 'career matching',
    
    'paid work experience', 'paid internship', 'entry level opportunity',
    'beginner friendly', 'student friendly', 'learn while working'
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
        <meta name="application-name" content="Pathera" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0B0F1A" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="author" content="Pathera" />
        <meta name="rating" content="safe for kids" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.position" content="51.509865;-0.118092" />
        <meta name="ICBM" content="51.509865, -0.118092" />
        <link rel="canonical" href="https://pathera.app" />
        <link rel="alternate" href="https://pathera.app" hrefLang="en-gb" />
        <link rel="alternate" href="https://pathera.app" hrefLang="x-default" />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Pathera: #1 Student Work Experience Platform',
                url: 'https://pathera.app',
                description: 'Find your perfect work experience placement for Years 10-13. AI-powered CV review, practice assessments, tech, finance, medical & engineering opportunities. Trusted by UK schools and students for GCSE, A-Level work experience and career development.',
                potentialAction: {
                  '@type': 'SearchAction',
                  'target': 'https://pathera.app/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string'
                }
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Pathera',
                url: 'https://pathera.app',
                logo: 'https://pathera.app/logo1.png',
                description: 'Leading UK student work experience and career development platform.',
                sameAs: [
                  '/',
                  // Add your other social media URLs here
                ]
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                serviceType: 'Career Development Platform',
                name: 'Pathera Work Experience Platform',
                provider: {
                  '@type': 'Organization',
                  name: 'Pathera'
                },
                description: 'AI-powered career development platform offering work experience placements, CV review, and interview preparation for students aged 16-25.',
                audience: {
                  '@type': 'EducationalAudience',
                  educationalRole: 'student',
                  audienceType: 'Secondary school and college students'
                },
                areaServed: {
                  '@type': 'Country',
                  name: 'United Kingdom'
                },
                offers: {
                  '@type': 'Offer',
                  availability: 'https://schema.org/InStock',
                  availabilityStarts: '2024-01-01',
                  category: 'Career Development Services'
                }
              }
            ])
          }}
        />
      </head>
      <body className={`${inter.variable} bg-[#0B0F1A] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
