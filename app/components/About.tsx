'use client';

import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-8 bg-transparent">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start" id="about-avatar-container">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              <div className="absolute -inset-1 rounded-full bg-[#4A6FA5]/15 opacity-75 blur-md" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#E5E5E2] bg-[#FFFFFF] shadow-md">
                <Image
                  src="/me.jpeg"
                  alt="Cloud Neo Bagtas, founder of thecloudstack"
                  fill
                  sizes="(max-width: 640px) 256px, 288px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5" id="about-content">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
              ABOUT THECLOUDSTACK
            </span>
            
            <h2 className="text-2.5xl font-extrabold text-[#1A1A1A] leading-tight" id="about-headline">
              Specializing in systems that eliminate manual workload so businesses can grow.
            </h2>

            <p className="text-sm text-[#555555] leading-relaxed" id="about-description">
              I build systems that take manual work off your plate call handling, lead follow-up, document search, customer replies — and hand it to something that runs on its own. I work directly with businesses, from the first conversation about what&apos;s slowing them down to the day the system goes live, to save time, cut errors, and grow without adding headcount.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs" id="about-bullets">
              <li className="flex items-center gap-2 text-[#555555] bg-[#EEEFEA]/60 border border-[#E5E5E2]/40 rounded px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5]" />
                <span>Based in: <strong className="text-[#1A1A1A]">Malvar, Batangas, PH</strong></span>
              </li>

              <li className="flex items-center gap-2 text-[#555555] bg-[#EEEFEA]/60 border border-[#E5E5E2]/40 rounded px-3 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5]" />
                <span>Engagement: <strong className="text-[#1A1A1A]">Direct, one-on-one — no account managers</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
