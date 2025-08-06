'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
  title: string;
  href: string;
}

// Navigation Links Data
const NAV_LINKS: NavLink[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/[0.1] bg-[#0a0b14]/80 backdrop-blur-md py-4 lg:py-6">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1-nobg.png"
              alt="Pathera Logo"
              width={300}
              height={300}
              className="object-contain w-48 h-12 md:w-56 md:h-14 lg:w-64 lg:h-16 xl:w-72 xl:h-18"
            />
          </Link>

          {/* Main Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => scrollToSection(link.href.replace('#', ''))}
                className="text-sm font-medium text-white/70 hover:text-white bg-transparent transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Link
              href="https://dashboard.pathera.app/login"
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