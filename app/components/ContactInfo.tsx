'use client';

import React from 'react';
import { Mail, MapPin, Copy, Check } from 'lucide-react';
import { InquireRecord } from '../types';

interface ContactInfoProps {
  emailCopied: boolean;
  handleCopyEmail: () => void;
  localInquiries: InquireRecord[];
}

export default function ContactInfo({
  emailCopied,
  handleCopyEmail,
  localInquiries
}: ContactInfoProps) {
  return (
    <div className="lg:col-span-5 space-y-6" id="contact-info">
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A6FA5] block">
          CONNECT
        </span>
        <h2 className="text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
          Ready to Automate?
        </h2>
        <p className="text-sm text-[#555555] leading-relaxed">
          {"Tell me what's slowing you down — I'll build the system that fixes it. Available for freelance projects starting immediately."}
        </p>
      </div>

      <address className="not-italic space-y-3">
        <div className="p-4 rounded border border-[#E5E5E2] bg-[#F9F9F7] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-white border border-[#E5E5E1] rounded text-[#4A6FA5] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[9px] text-[#555555] font-bold uppercase tracking-wider block">Direct Email Contact</span>
              <a 
                href="mailto:bcloudneo@gmail.com" 
                className="text-sm font-bold text-[#1A1A1A] truncate hover:text-[#4A6FA5] transition-colors block"
              >
                bcloudneo@gmail.com
              </a>
            </div>
          </div>
          
          <button 
            onClick={handleCopyEmail}
            className={`p-2 rounded border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
              emailCopied 
                ? 'bg-green-50 border-green-200 text-green-700' 
                : 'bg-white hover:border-neutral-300 border-[#E5E5E2] text-neutral-600'
            }`}
            title="Copy email address"
          >
            {emailCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="p-4 rounded border border-[#E5E5E2] bg-[#F9F9F7] flex items-center gap-3">
          <div className="p-2 bg-white border border-[#E5E5E1] rounded text-[#4A6FA5] shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] text-[#555555] font-bold uppercase tracking-wider block">Location</span>
            <span className="text-sm font-bold text-[#1A1A1A] block">Malvar, Batangas, Philippines</span>
          </div>
        </div>
      </address>

    </div>
  );
}
