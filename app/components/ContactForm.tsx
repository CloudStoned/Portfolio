'use client';

import React from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormProps {
  contactName: string;
  setContactName: (val: string) => void;
  contactEmail: string;
  setContactEmail: (val: string) => void;
  contactBusiness: string;
  setContactBusiness: (val: string) => void;
  contactMsg: string;
  setContactMsg: (val: string) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: string | null;
  handleContactSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({
  contactName, setContactName,
  contactEmail, setContactEmail,
  contactBusiness, setContactBusiness,
  contactMsg, setContactMsg,
  isSubmitting, submitSuccess, submitError, handleContactSubmit
}: ContactFormProps) {
  return (
    <div className="lg:col-span-7 bg-white rounded-md border border-[#E5E5E2] p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)]" id="contact-form-block">
      <form onSubmit={handleContactSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Your Name *</label>
            <input 
              type="text" id="name" required value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="e.g. Jean Doe"
              className="w-full text-xs px-3.5 py-2.5 rounded border border-[#E5E5E2] outline-none transition-all placeholder:text-neutral-400 bg-transparent focus:border-[#4A6FA5]"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Your Email *</label>
            <input 
              type="email" id="email" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="e.g. jean@company.com"
              className="w-full text-xs px-3.5 py-2.5 rounded border border-[#E5E5E2] outline-none transition-all placeholder:text-neutral-400 bg-transparent focus:border-[#4A6FA5]"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="business" className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">Company Name</label>
          <input 
            type="text" id="business" value={contactBusiness} onChange={(e) => setContactBusiness(e.target.value)} placeholder="e.g. GrowthFlow Inc."
            className="w-full text-xs px-3.5 py-2.5 rounded border border-[#E5E5E2] outline-none transition-all placeholder:text-neutral-400 bg-transparent focus:border-[#4A6FA5]"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]">What manual work slows you down? *</label>
          <textarea 
            id="message" required rows={3} value={contactMsg} onChange={(e) => setContactMsg(e.target.value)} placeholder="e.g. We copy customer leads from email to spreadsheet manually..."
            className="w-full text-xs px-3.5 py-2.5 rounded border border-[#E5E5E2] outline-none transition-all placeholder:text-neutral-400 bg-transparent resize-none focus:border-[#4A6FA5]"
          />
        </div>
        <AnimatePresence>
          {submitSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-green-50 border border-green-200 text-green-800 rounded text-xs space-y-1"
            >
              <p className="font-bold flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> Inquiry Dispatched Safely!
              </p>
              <p className="text-green-700 leading-relaxed text-[11px]">
                Thank you! Cloud Neo has received your workflow context. He will get back to you within 24 hours.
              </p>
            </motion.div>
          )}
          {submitError && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="p-4 bg-red-50 border border-red-200 text-red-800 rounded text-xs space-y-1"
            >
              <p className="font-bold flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <AlertCircle className="w-3.5 h-3.5 text-red-600" /> Inquiry Dispatch Failed
              </p>
              <p className="text-red-700 leading-relaxed text-[11px]">
                {submitError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          type="submit" disabled={isSubmitting}
          className="w-full rounded bg-[#4A6FA5] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:bg-[#4A6FA5]/95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {isSubmitting ? 'Scheduling Automation Consultation...' : 'Send Inquiry & Schedule Audit'}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
