'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollTo } from '../utils/scroll';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollTo(id, () => setMobileMenuOpen(false));
  };

  return (
    <header id="navbar" className="sticky top-0 z-50 w-full border-b border-[#E5E5E2] bg-[#F9F9F7]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <button 
          onClick={() => handleScroll('hero')} 
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          id="brand-logo"
        >
          <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-lg border border-[#E5E5E2] bg-[#F9F9F7] p-0.5 transition-transform duration-200 group-hover:scale-105">
            <Image 
              src="/favicon.png" 
              alt="Cloud Neo Bagtas Logo" 
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-base font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#4A6FA5] transition-colors duration-150">
              Cloud Neo Bagtas
            </span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-[#555555]">
              AI Automation Specialist
            </span>
          </div>
        </button>

        <nav className="hidden md:block" id="desktop-nav">
          <ul className="flex items-center space-x-8">
            <li>
              <button onClick={() => handleScroll('about')} className="text-xs font-semibold uppercase tracking-[0.12em] text-[#555555] hover:text-[#4A6FA5] transition-colors duration-205 cursor-pointer">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('services')} className="text-xs font-semibold uppercase tracking-[0.12em] text-[#555555] hover:text-[#4A6FA5] transition-colors duration-205 cursor-pointer">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('projects')} className="text-xs font-semibold uppercase tracking-[0.12em] text-[#555555] hover:text-[#4A6FA5] transition-colors duration-205 cursor-pointer">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => handleScroll('experience')} className="text-xs font-semibold uppercase tracking-[0.12em] text-[#555555] hover:text-[#4A6FA5] transition-colors duration-205 cursor-pointer">
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleScroll('contact')} 
                className="border border-[#4A6FA5] bg-transparent text-[#4A6FA5] hover:bg-[#4A6FA5] hover:text-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-200 cursor-pointer rounded"
              >
                Inquire
              </button>
            </li>
          </ul>
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="p-2 text-[#1A1A1A] md:hidden focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#E5E5E2] bg-[#F9F9F7] md:hidden"
            id="mobile-nav-panel"
          >
            <nav className="flex flex-col space-y-4 px-6 py-6 font-semibold">
              <button onClick={() => handleScroll('about')} className="text-left text-xs uppercase tracking-[0.12em] text-[#555555] py-2 border-b border-[#E5E5E2]/50 hover:text-[#4A6FA5] transition-colors cursor-pointer">About</button>
              <button onClick={() => handleScroll('services')} className="text-left text-xs uppercase tracking-[0.12em] text-[#555555] py-2 border-b border-[#E5E5E2]/50 hover:text-[#4A6FA5] transition-colors cursor-pointer">Services</button>
              <button onClick={() => handleScroll('projects')} className="text-left text-xs uppercase tracking-[0.12em] text-[#555555] py-2 border-b border-[#E5E5E2]/50 hover:text-[#4A6FA5] transition-colors cursor-pointer">Projects</button>
              <button onClick={() => handleScroll('experience')} className="text-left text-xs uppercase tracking-[0.12em] text-[#555555] py-2 border-b border-[#E5E5E2]/50 hover:text-[#4A6FA5] transition-colors cursor-pointer">Experience</button>
              <button 
                onClick={() => handleScroll('contact')} 
                className="w-full text-center border border-[#4A6FA5] py-2 text-xs uppercase font-semibold tracking-[0.12em] text-[#4A6FA5] hover:bg-[#4A6FA5] hover:text-white transition-all cursor-pointer rounded"
              >
                {"Let's Work Together"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
