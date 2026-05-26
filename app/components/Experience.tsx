'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import Certifications from './Certifications';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-8 bg-[#F9F9F7]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Work Experience & Education */}
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
                    Providing specialized automation consultation for small businesses & startups.
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Designing reliable custom n8n workflow systems, standalone AI agents, and custom RAG databases to eliminate repetitive organizational workload.
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
                    Full-time engineering post dedicated to RAG and prototype AI architectures.
                  </p>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    Built production-ready RAG documents retrieval engines, content automation systems, automated evaluation metrics, and client-facing live proof-of-concept solutions.
                  </p>
                </div>
              </li>
            </ol>

            {/* Education section */}
            <div className="pt-8 border-t border-[#E5E5E2] space-y-4" id="education-block">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4.5 h-4.5 text-[#4A6FA5]" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]">Education</h3>
              </div>

              <div className="bg-white p-5 rounded-md border border-[#E5E5E2] shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex items-start gap-3.5">
                <div className="p-2.5 bg-[#F9F9F7] border border-[#E5E5E2] text-[#555555] rounded">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-[#555555] font-bold uppercase tracking-wider block">2021 – 2025</span>
                  <h4 className="text-sm font-bold text-[#1A1A1A]">BS Computer Science</h4>
                  <span className="text-xs text-[#555555]">FAITH Colleges — Batangas, Philippines</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Certifications */}
          <Certifications />

        </div>
      </div>
    </section>
  );
}
