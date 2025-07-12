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
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/#pricing",
  },
  {
    title: "Help",
    href: "/#help",
  },
];

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
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white bg-transparent"
              >
                {link.title}
              </Link>
            ))}
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