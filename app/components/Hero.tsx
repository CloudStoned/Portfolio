'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Simulator from './Simulator';
import { scrollTo } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-28 px-6 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5]" id="hero-tag">
              SPECIALIST
            </span>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#1A1A1A] sm:text-5xl md:text-5.5xl leading-[1.12]" id="hero-headline">
              {"I Automate the Work That's Slowing You Down"}
            </h1>

            <p className="max-w-xl text-base text-[#555555] leading-relaxed" id="hero-subheadline">
              Custom AI agents, n8n workflows, and intelligent automation systems — built for small businesses and startups that want to move faster without hiring more.
            </p>

            <div className="pt-4 flex flex-wrap gap-3.5" id="hero-ctas">
              <button 
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 rounded bg-[#4A6FA5] text-[#FFFFFF] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] shadow-sm hover:bg-[#4A6FA5]/95 hover:translate-y-[-0.5px] transition-all cursor-pointer"
              >
                See My Work
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 rounded border border-[#4A6FA5] bg-transparent text-[#4A6FA5] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] hover:bg-[#4A6FA5]/5 hover:translate-y-[-0.5px] transition-all cursor-pointer"
              >
                {"Let's Work Together"}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5" id="hero-simulation-block">
            <Simulator />
          </div>
        </div>
      </div>
    </section>
  );
}
