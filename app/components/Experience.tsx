'use client';

import React from 'react';
import Certifications from './Certifications';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-8 bg-[#F9F9F7]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Work Experience */}
          <div className="lg:col-span-7 space-y-10" id="experience-column">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
                BACKGROUND
              </span>
              <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Work Experience</h2>
            </div>

            <ol className="relative border-l border-[#E5E5E2] pl-5 ml-2.5 space-y-10">
              {/* Experience Card 1 */}
              <li className="relative group" id="experience-1">
                <div className="absolute -left-[29px] top-1 bg-white border border-[#4A6FA5] rounded-full h-3 w-3 transition-colors group-hover:bg-[#4A6FA5]" />
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-[#1A1A1A]">AI Automation Specialist</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-[#4A6FA5]/10 text-[#4A6FA5] font-bold px-2 py-0.5 rounded w-fit">
                      Current
                    </span>
                  </div>
                  <p className="text-xs text-[#555555] font-semibold">
                    Providing specialized automation consulting for small businesses & startups.
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Designing and building custom systems — automated workflows, AI agents, and internal knowledge tools — that take repetitive work off a team&apos;s plate for good.
                  </p>
                </div>
              </li>

              {/* Experience Card 2 */}
              <li className="relative group" id="experience-2">
                <div className="absolute -left-[29px] top-1 bg-white border border-neutral-300 rounded-full h-3 w-3 transition-colors group-hover:border-[#4A6FA5] group-hover:bg-[#4A6FA5]" />
                <div className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-[#1A1A1A]">Jr. Systems Engineer</h3>
                    <span className="text-[10px] uppercase tracking-wider bg-neutral-100 text-[#555555] font-bold px-2 py-0.5 rounded w-fit">
                      Feb 2025 – Apr 2026
                    </span>
                  </div>
                  <p className="text-xs text-[#555555] font-semibold">
                    Full-time engineering role focused on AI-powered document search and rapid prototyping.
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Built production-ready document search tools, content automation systems, and live proof-of-concept demos that clients could see and use right away.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Right Column - Certifications */}
          <Certifications />

        </div>
      </div>
    </section>
  );
}
