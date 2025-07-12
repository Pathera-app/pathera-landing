'use client';

import { Header } from '@/components/global/Header';
import { Hero } from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Process from '@/components/home/Process';
import Pricing from '@/components/home/Pricing';
import Testimonials from '@/components/home/Testimonials';
import { ClosingCTA } from '@/components/home/ClosingCTA';
import Footer from '@/components/global/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Process />
      <Pricing />
      <Testimonials />
      <ClosingCTA />
      <Footer />
    </main>
  );
}
