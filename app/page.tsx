'use client';

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#4A6FA5]/10 selection:text-[#4A6FA5] font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <hr className="border-[#E5E5E2] mx-auto max-w-7xl px-6 sm:px-8" />
        <About />
        <hr className="border-[#E5E5E2] mx-auto max-w-7xl px-6 sm:px-8" />
        <Services />
        <hr className="border-[#E5E5E2] mx-auto max-w-7xl px-6 sm:px-8" />
        <Projects />
        <hr className="border-[#E5E5E2] mx-auto max-w-7xl px-6 sm:px-8" />
        <Experience />
        <hr className="border-[#E5E5E2] mx-auto max-w-7xl px-6 sm:px-8" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
