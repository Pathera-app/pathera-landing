'use client';

import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from 'framer-motion';

export function ClosingCTA() {
  return (
    <div className="scrollbar-hide mt-20 max-w-[100vw] overflow-x-hidden">
      <LampContainer>
        <div className="relative flex w-full flex-col items-center justify-center text-center">
          <motion.h2 
            className="!leading-[1.15] mt-8 bg-gradient-to-b from-neutral-200 to-neutral-400 bg-clip-text py-4 text-center font-heading font-medium text-4xl text-transparent tracking-tight md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Shape Your Future <br />
            Career with Pathera
          </motion.h2>
          <motion.p 
            className="mx-auto mt-6 max-w-md text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take control of your career journey with Pathera&apos;s AI-powered platform.
            From personalized guidance to interview preparation, we&apos;re here to help
            you land your dream role.
          </motion.p>
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button>
              <Link href="https://dashboard.pathera.app/login">Start your journey</Link>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  )
} 