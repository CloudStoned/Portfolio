'use client';

import React, { useState, useEffect } from 'react';
import { InquireRecord } from '../types';

export function useContact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactBusiness, setContactBusiness] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [localInquiries, setLocalInquiries] = useState<InquireRecord[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cnb_inquiries');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTimeout(() => {
          setLocalInquiries(parsed);
        }, 0);
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    }
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bcloudneo@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    const newInquiry: InquireRecord = {
      id: Math.random().toString(36).substring(2, 11),
      name: contactName,
      email: contactEmail,
      business: contactBusiness || 'Not specified',
      message: contactMsg,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updated = [newInquiry, ...localInquiries];
    setLocalInquiries(updated);
    localStorage.setItem('cnb_inquiries', JSON.stringify(updated));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    setContactName('');
    setContactEmail('');
    setContactBusiness('');
    setContactMsg('');

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  return {
    emailCopied,
    contactName,
    setContactName,
    contactEmail,
    setContactEmail,
    contactBusiness,
    setContactBusiness,
    contactMsg,
    setContactMsg,
    isSubmitting,
    submitSuccess,
    localInquiries,
    handleCopyEmail,
    handleContactSubmit
  };
}
