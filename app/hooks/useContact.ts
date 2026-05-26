'use client';

import React, { useState } from 'react';
import { InquireRecord } from '../types';

export function useContact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactBusiness, setContactBusiness] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [localInquiries, setLocalInquiries] = useState<InquireRecord[]>([]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bcloudneo@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          business: contactBusiness,
          message: contactMsg,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to dispatch inquiry. Please try again.');
      }
      
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

      setSubmitSuccess(true);
      
      setContactName('');
      setContactEmail('');
      setContactBusiness('');
      setContactMsg('');

      if (data.warning) {
        console.warn(data.warning);
      }

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 6000);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setTimeout(() => {
        setSubmitError(null);
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
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
    submitError,
    localInquiries,
    handleCopyEmail,
    handleContactSubmit
  };
}


