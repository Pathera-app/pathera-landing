import React from 'react'
import { BentoCard, BentoGrid, CARDS } from "@/components/magicui/bento-grid";
import { FileText, BookOpen, Briefcase, Users } from 'lucide-react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';

interface FeatureCard {
  name: string;
  description: string;
  background: string;
  Icon: React.ElementType;
  href: string;
  cta: string;
  className: string;
}


function Features() {
  return (
    <div className="bg-[#0B0F1A]">
      <div className="container mx-auto px-4">
        <div
          id="features"
          className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
        >
          <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
            Features
          </span>
          </ShimmerButton>
          <h2 className="mt-6 text-center font-medium text-3xl text-white md:text-5xl lg:text-center">
            Accelerate Your Career Growth
          </h2>
          
          <p className="mt-4 max-w-lg text-center text-lg text-white/70 lg:text-center">
            Discover our comprehensive set of tools and resources designed to enhance your professional journey, from skill development to job placement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <BentoGrid className="py-8">
            {CARDS.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  )
}

export default Features