'use client';

import React from 'react';
import { useContact } from '../hooks/useContact';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact() {
  const {
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
  } = useContact();

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactInfo 
            emailCopied={emailCopied}
            handleCopyEmail={handleCopyEmail}
            localInquiries={localInquiries}
          />
          <ContactForm 
            contactName={contactName}
            setContactName={setContactName}
            contactEmail={contactEmail}
            setContactEmail={setContactEmail}
            contactBusiness={contactBusiness}
            setContactBusiness={setContactBusiness}
            contactMsg={contactMsg}
            setContactMsg={setContactMsg}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
            handleContactSubmit={handleContactSubmit}
          />
        </div>
      </div>
    </section>
  );
}
