import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.1] bg-[#0a0b14]/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1-nobg.png"
              alt="Pathly Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-[var(--font-weight-medium)] text-white/70 hover:text-white transition-colors">
                Features
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <Link href="/pricing" className="text-sm font-[var(--font-weight-medium)] text-white/70 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/enterprise" className="text-sm font-[var(--font-weight-medium)] text-white/70 hover:text-white transition-colors">
              Enterprise
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-[var(--font-weight-medium)] text-white/70 hover:text-white transition-colors">
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <Link href="/changelog" className="text-sm font-[var(--font-weight-medium)] text-white/70 hover:text-white transition-colors">
              Changelog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-lg px-4 py-1.5 text-sm font-[var(--font-weight-semibold)] text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              Get Started
              <span className="ml-2">⚡️</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 