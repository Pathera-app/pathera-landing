'use client'
import React, { useState } from 'react'
import { Card } from "@/components/ui/card";
import { CreditCard, Check } from 'lucide-react';
import { ShimmerButton } from '../magicui/shimmer-button';
import { Button } from '../ui/button';
import { Switch } from '../ui/switch';
import { motion } from 'framer-motion';

const PRICING_PLANS = [
  {
    name: "Free",
    description: "Perfect for getting started with your career journey",
    price: { monthly: 0, yearly: 0 },
    features: [
      "CV Builder (1 practice/24 hours)",
      "Free Community Access",
      "AI Interview Practice (1 practice/24 hours)",
      "Community Access",
      "Limited Learning Resources"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    description: "Ideal for active job seekers and career changers",
    price: { monthly: 2.99, yearly: 29.99 },
    features: [
      "Unlimited AI Interview Sessions",
      "Advanced CV Builder & Analytics",
      "Premium Learning Resources",
      "Priority Support",
      "Community Access",
      "Early Access to New Features"
    ],
    cta: "Start Pro",
    popular: true
  },
  {
    name: "Enterprise",
    description: "Custom solutions for organizations and teams",
    price: "Contact Us",
    features: [
      "Custom AI Interview Scenarios",
      "Team CV Management",
      "Dedicated Support",
      "Custom Integration Options",
      "Advanced Analytics & Reporting",
      "Volume Discounts"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-[#0B0F1A]">
      <div className="container mx-auto px-4">
        <motion.div 
          id="pricing"
          className="flex w-full flex-col items-center justify-center py-8 lg:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              Pricing
            </span>
          </ShimmerButton>
          
          <h2 className="mt-6 text-center font-medium text-3xl text-white md:text-5xl lg:text-center">
            Choose Your Career Journey
          </h2>
          
          <p className="mt-4 max-w-lg text-center text-lg text-white/70 lg:text-center">
            Select a plan that best fits your career development needs
          </p>

          <motion.div 
            className="flex items-center gap-3 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white/70">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-[#22D3EE]"
            />
            <span className="text-white/70">Yearly</span>
            {isYearly && (
              <span className="ml-2 text-sm text-[#22D3EE]">Save 16%</span>
            )}
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PLANS.map((plan, id) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 * id }}
              >
                <Card 
                  className={`group relative border ${plan.popular ? 'border-[#22D3EE]/40' : 'border-white/20'} bg-black/20 p-6 px-8 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl overflow-hidden`}
                >
                  <div className="flex w-full flex-col items-start justify-center relative z-10">
                    {plan.popular && (
                      <div className="absolute -top-3 -right-3 z-[9999]">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] rounded-full blur-sm opacity-60"></div>
                          <div className="relative bg-gradient-to-r from-[#22D3EE] to-[#06B6D4] px-4 py-2 rounded-full shadow-xl">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span className="text-white font-semibold text-xs tracking-wide">BEST VALUE</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <h3 className="text-xl font-medium text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm">
                      {plan.description}
                    </p>
                    <div className="mt-6 mb-6">
                      <span className="text-4xl font-bold text-white">
                        {typeof plan.price === 'string' 
                          ? plan.price 
                          : `£${isYearly ? plan.price.yearly : plan.price.monthly}`}
                      </span>
                      {typeof plan.price !== 'string' && (
                        <span className="text-white/70 ml-2">{isYearly ? '/year' : '/month'}</span>
                      )}
                    </div>
                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-[#22D3EE]" />
                          <span className="text-white/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-[#22D3EE] text-white hover:bg-[#22D3EE]/90' : 'bg-white text-black hover:bg-white/90'}`}
                      onClick={() => {
                        if (plan.cta === "Get Started" || plan.cta === "Start Pro" || plan.cta === "Contact Sales") {
                          window.location.href = "https://dashboard.pathera.app/login";
                        }
                      }}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <div className="absolute inset-0 transition-all duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a1f2e] to-[#2d3449]" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          className="flex justify-center items-center gap-2 pb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CreditCard className="h-5 w-5 text-white/70" />
          <span className="text-white/70">
            No credit card required for free plan
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing 