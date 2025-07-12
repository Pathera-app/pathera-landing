'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BorderBeam } from '../magicui/border-beam';
import { motion } from 'framer-motion';

// Define companies data
const COMPANIES = [
  { name: 'Amazon', logo: '/companies/amazon.svg' },
  { name: 'Google', logo: '/companies/google.svg' },
  { name: 'Microsoft', logo: '/companies/microsoft.svg' },
  { name: 'Apple', logo: '/companies/apple.svg' },
  { name: 'ARM', logo: '/companies/arm.svg' },
  { name: 'Goldman Sachs', logo: '/companies/goldmansachs.svg' },
  { name: 'Cisco', logo: '/companies/cisco.svg' },
  { name: 'IBM', logo: '/companies/ibm.svg' },
  { name: 'Rolls-Royce', logo: '/companies/rollsroyce.svg' },
  { name: 'Vodafone', logo: '/companies/vodafone.svg' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0B0F1A] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-[#22D3EE]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-[#0078D7]/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-32 pb-16 text-center">
        {/* Small badge/label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link 
            href="#features"
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
          >
            <span className="text-sm text-white/80">1000+ Students Already Using Pathera 🚀</span>
            <span className="text-xs">→</span>
          </Link>
        </motion.div>

        {/* Main heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Your Complete
          <br />
          Career{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22D3EE] via-[#0078D7] to-[#22D3EE]">
            Development
          </span>
          {' '}Platform
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI-powered CV review, practice assessments, work experience opportunities, interview prep and more - all in one place.
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          className="flex justify-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/register"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0078D7] hover:bg-[#0066B8] transition-all duration-200 text-sm font-medium text-white hover:text-white"
          >
            Start Your Career Journey
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path 
                d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Dashboard Video */}
        <motion.div 
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent z-10" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#151823] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <BorderBeam
            duration={6}
            size={400}
            className="from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={3}
            size={400}
            borderWidth={2}
            className="from-transparent via-blue-500 to-transparent"
          />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover md:scale-110 md:translate-y-20"
            >
              <source src="/dashboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <BorderBeam duration={8} size={100} />
        </motion.div>

        {/* Companies Section */}
        <motion.div 
          className="py-25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="mx-auto px-4 md:px-8">
            <h2 className="text-center font-medium text-neutral-400 text-sm uppercase mb-12">
              OUR MEMBERS HAVE SECURED OFFERS FROM
            </h2>
            <div className="relative overflow-hidden">
              {/* Gradient overlays for scroll effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0F1A] to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0F1A] to-transparent z-10" />
              
              {/* Scrolling container */}
              <div className="flex overflow-hidden">
                <div className="animate-scroll flex items-center gap-x-20 py-8">
                  {/* First set of logos */}
                  {COMPANIES.map((company) => (
                    <div key={company.name} className="flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={150}
                        height={150}
                        className="h-16 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                  {/* Duplicate set of logos for seamless loop */}
                  {COMPANIES.map((company) => (
                    <div key={`${company.name}-duplicate`} className="flex-shrink-0">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={150}
                        height={150}
                        className="h-16 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 