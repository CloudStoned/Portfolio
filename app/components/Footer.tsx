'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="bg-[#FFFFFF]/80 border-t border-[#E5E5E2] py-10 px-6 sm:px-8 text-center text-[10px] text-[#555555] uppercase tracking-wider" 
      id="footer-section"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Cloud Neo Bagtas. All rights reserved.</p>
        <div className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-[#4A6FA5]" />
          <span>Malvar, Batangas, Philippines</span>
        </div>
      </div>
    </footer>
  );
}
