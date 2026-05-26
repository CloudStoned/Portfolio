'use client';

import React from 'react';
import { Award, Check } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <div className="lg:col-span-5 space-y-10" id="certifications-column">
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
          CREDENTIALS
        </span>
        <h2 className="text-3xl font-extrabold text-[#1A1A1A]">Professional Certifications</h2>
      </div>

      <div className="bg-white rounded-md border border-[#E5E5E2] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)] space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#E5E5E2]">
          <Award className="w-4 h-4 text-[#4A6FA5]" />
          <span className="text-[10px] uppercase font-extrabold text-[#1A1A1A] tracking-wider">
            Industry Accreditations
          </span>
        </div>

        <ul className="space-y-2.5" id="certs-list">
          {certifications.map((cert, index) => (
            <li 
              key={index} 
              className="flex items-start gap-2.5 p-2 rounded hover:bg-[#F9F9F7] transition-colors"
            >
              <div className="p-0.5 text-[#4A6FA5] bg-[#4A6FA5]/10 rounded mt-0.5 shrink-0">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-xs font-semibold text-[#555555] leading-snug">
                {cert}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
