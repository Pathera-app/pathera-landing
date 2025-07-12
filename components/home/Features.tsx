'use client';

import React from 'react'
import { BentoCard, BentoGrid, CARDS } from "@/components/magicui/bento-grid";
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { motion } from 'framer-motion';

function Features() {
  return (
    <div className="bg-[#0B0F1A]">
      <div className="container mx-auto px-4">
        <div id="features" className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                Features
              </span>
            </ShimmerButton>
          </motion.div>
          
          <motion.h2 
            className="mt-6 text-center font-medium text-3xl text-white md:text-5xl lg:text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Accelerate Your Career Growth
          </motion.h2>
          
          <motion.p 
            className="mt-4 max-w-lg text-center text-lg text-white/70 lg:text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover our comprehensive set of tools and resources designed to enhance your professional journey, from skill development to job placement.
          </motion.p>
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