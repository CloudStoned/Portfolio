'use client';

import React from 'react';
import { techStack } from '../data/portfolioData';

export default function TechStack() {
  return (
    <div className="space-y-5 pt-5 border-t border-[#E5E5E2]" id="tech-badge-row">
      <div className="text-center">
        <span className="text-[10px] uppercase font-extrabold tracking-[0.2em] text-[#4A6FA5] block">
          PRIMARY TECH STACK
        </span>
      </div>

      <div className="space-y-3 max-w-3xl mx-auto">
        {/* AI & Automation row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/80 w-32 shrink-0">
            AI & Automation
          </span>
          <div className="flex flex-wrap gap-1.5">
            {techStack.ai.map((t, i) => (
              <span 
                key={i} 
                className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded bg-[#EEEFEA] border border-[#E5E5E2]/40 text-[#555555]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Development row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/80 w-32 shrink-0">
            Development
          </span>
          <div className="flex flex-wrap gap-1.5">
            {techStack.dev.map((t, i) => (
              <span 
                key={i} 
                className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded bg-[#EEEFEA] border border-[#E5E5E2]/40 text-[#555555]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/80 w-32 shrink-0">
            Tools & Platforms
          </span>
          <div className="flex flex-wrap gap-1.5">
            {techStack.tools.map((t, i) => (
              <span 
                key={i} 
                className="text-[10px] font-semibold tracking-wide px-2 py-0.5 rounded bg-[#EEEFEA] border border-[#E5E5E2]/40 text-[#555555]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
