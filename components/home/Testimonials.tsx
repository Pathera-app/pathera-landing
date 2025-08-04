'use client';

import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from 'lucide-react';
import { ShimmerButton } from '../magicui/shimmer-button';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: "Asar Ali",
    username: "@asarali",
    rating: 5,
    review: "The platform has really helped me stay focused on my goals and see what's possible.",
  },
  {
    name: "Mohammed Hassan",
    username: "@mohammedhassan",
    rating: 5,
    review: "The site is super easy to use and understand, especially for someone like me just starting out.",
  },
  {
    name: "Jemimah Omombo",
    username: "@jemimahomombo",
    rating: 5,
    review: "Pathera is clean and looks professional.",
  },
  {
    name: "Adel Hussein",
    username: "@adelhussein",
    rating: 5,
    review: "The AI interview practice has been invaluable in preparing me for real interviews.",
  },
  {
    name: "Benjamin Omokoko",
    username: "@benjamiomokoko",
    rating: 5,
    review: "The CV builder helped me create a professional resume that stands out.",
  },
  {
    name: "Priya Patel",
    username: "@priyapatel",
    rating: 5,
    review: "The learning resources are comprehensive and well-organized. Great for skill development!",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#0B0F1A] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          id="testimonials"
          className="flex w-full flex-col items-center justify-center space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Our Customers
            </span>
          </ShimmerButton>
          
          <h2 className="mt-6 text-center font-medium text-3xl text-white md:text-5xl lg:text-center">
            What our users are saying
          </h2>

          <p className="mt-2 max-w-lg text-center text-base sm:text-lg text-white/70">
            Here&apos;s what some of our users have to say about Pathera.
          </p> 
        </motion.div>

        <motion.div 
          className="mx-auto max-w-6xl mt-8 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="flex h-full flex-col border border-white/20 bg-black/20 p-4 sm:p-6">
                  <div className="space-y-2">
                    <h3 className="font-medium text-base sm:text-lg text-white/70">
                      {review.name}
                    </h3>
                    <p className="text-sm sm:text-base text-white/50">{review.username}</p>
                  </div>
                  <div className="mt-3 mb-4 flex-grow">
                    <p className="text-sm sm:text-base text-white/70">{review.review}</p>
                  </div>
                  <div className="mt-auto w-full flex gap-1">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 