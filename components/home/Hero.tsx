import Image from 'next/image';
import Link from 'next/link';
import { BorderBeam } from '../magicui/border-beam';

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
        <Link 
          href="#features"
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 backdrop-blur-sm"
        >
          <span className="text-sm text-white/80">1000+ Students Already Using Pathera 🚀</span>
          <span className="text-xs">→</span>
        </Link>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Your Complete
          <br />
          Career{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22D3EE] via-[#0078D7] to-[#22D3EE]">
            Development
          </span>
          {' '}Platform
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12">
          AI-powered CV review, practice assessments, work experience opportunities, interview prep and more - all in one place.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-24">
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
        </div>

        {/* Dashboard Video */}
        
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-transparent to-transparent z-10" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#151823] h-[600px]">
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
              className="w-full h-full object-cover scale-110 translate-y-20"
            >
              <source src="/dashboard.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <BorderBeam duration={8} size={100} />
        </div>
      </div>
    </section>
  );
} 