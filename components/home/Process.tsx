import React from 'react'
import { Card } from "@/components/ui/card";
import { FileText, Search, Briefcase } from 'lucide-react';
import { BentoCard, BentoGrid, CARDS } from "@/components/magicui/bento-grid";
import { ShimmerButton } from '../magicui/shimmer-button';

const PROCESS = [
  {
    title: "Create Your Profile",
    description: "Build your professional profile and upload your CV to get personalized recommendations.",
    icon: FileText,
  },
  {
    title: "Practice Interviews",
    description: "Enhance your interview skills with our AI-powered mock interviews and get instant feedback.",
    icon: Search,
  },
  {
    title: "Find Opportunities",
    description: "Get matched with relevant work experience opportunities based on your skills and goals.",
    icon: Briefcase,
  },
];

function Process() {
  return (
    <div className="bg-[#0B0F1A] pt-15">
      <div className="container mx-auto px-4">
        <div className="flex w-full flex-col items-center justify-center py-8 lg:items-center">
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
              The Process
            </span>
          </ShimmerButton>
          
          <h2 className="mt-6 text-center font-medium text-3xl text-white md:text-5xl lg:text-center">
            Land Your Dream Job in 3 Steps
          </h2>
          
          <p className="mt-4 max-w-lg text-center text-lg text-white/70 lg:text-center">
            Follow our proven process to accelerate your career growth and secure meaningful opportunities
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((process, id) => (
              <Card key={id} className="group relative border border-white/20 bg-black/20 p-6 px-8 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
                <div className="flex w-full flex-col items-start justify-center relative z-10">
                  <process.icon
                    strokeWidth={1.5}
                    className="h-8 w-8 text-white/70 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                  />
                  <div className="relative flex flex-col items-start">
                    <span className="absolute -top-4 right-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 pt-0.5 font-medium text-xl text-white transition-all duration-300 group-hover:border-white/40 group-hover:scale-110 group-hover:bg-[#0B0F1A]/50">
                      {id + 1}
                    </span>
                    <h3 className="mt-4 font-medium text-base text-white transition-all duration-300 group-hover:text-white/90 group-hover:translate-x-1">
                      {process.title}
                    </h3>
                    <p className="mt-2 text-white/70 text-sm transition-all duration-300 group-hover:text-white/80">
                      {process.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 transition-all duration-500 group-hover:opacity-100 opacity-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a1f2e] to-[#2d3449]" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process 