'use client';

import React from 'react';
import { Zap, Bot, Database } from 'lucide-react';
import { services } from '../data/portfolioData';
import TechStack from './TechStack';
import { scrollTo } from '../utils/scroll';

const IconMap = {
  Zap: Zap,
  Bot: Bot,
  Database: Database
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 sm:px-8 bg-[#F9F9F7]">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="text-left max-w-3xl space-y-3" id="services-header">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
            CORE EXPERTISE
          </span>
          <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
            How I Help Your Business Run on Autopilot
          </h2>
          <p className="text-sm text-[#555555] leading-relaxed">
            I replace highly repeatable manual chores with dependable software agents. No fluff — just logic pipelines designed to optimize operations.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" id="services-cards-grid">
          {services.map((service, idx) => {
            const IconComponent = IconMap[service.iconName];
            return (
              <li 
                key={idx} 
                className="bg-white p-6 rounded-md border border-[#E5E5E2] shadow-[0_4px_12px_rgba(0,0,0,0.02)] flex flex-col space-y-3.5 hover:border-[#4A6FA5] transition-all duration-200"
              >
                <div className="flex items-center gap-2 border-b border-[#E5E5E2]/60 pb-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#4A6FA5] shrink-0" />
                  <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">{service.title}</h3>
                  <div className="ml-auto">
                    {IconComponent && <IconComponent className="w-5 h-5 text-[#4A6FA5]" />}
                  </div>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed flex-grow">{service.description}</p>
              </li>
            );
          })}
        </ul>

        <div className="py-12 md:py-16 max-w-4xl mx-auto border-y border-[#E5E5E2] text-center space-y-6" id="editorial-callout-banner">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#4A6FA5] block">
            THE EFFICIENCY PRINCIPLE
          </span>
          
          <blockquote className="space-y-4">
            <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] tracking-tight leading-[1.08] max-w-3xl mx-auto">
              {"Every repetitive task is a taxing expense on your speed and growth."}
            </p>
            <p className="text-base text-[#555555] leading-relaxed max-w-2xl mx-auto">
              {"By deploying secure AI agents and custom-built n8n workflows, you transfer the friction of manual chores to robust cloud pipelines. Startups and small businesses run faster, minimize operating errors, and reclaim critical focus for high-value strategic execution."}
            </p>
          </blockquote>

          <div className="pt-2 flex justify-center gap-4">
            <button 
              onClick={() => scrollTo('contact')}
              className="rounded bg-[#4A6FA5] text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] hover:bg-[#4A6FA5]/95 transition-all cursor-pointer shadow-xs"
            >
              Automate My Stack
            </button>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
}
