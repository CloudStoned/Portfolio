'use client';

import React, { useState, useEffect } from 'react';

export function usePhotoUpload() {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('cnb_avatar');
    if (savedPhoto) {
      setTimeout(() => {
        setUploadedPhoto(savedPhoto);
      }, 0);
    }
  }, []);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please upload an image smaller than 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setUploadedPhoto(base64String);
        localStorage.setItem('cnb_avatar', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Are you sure you want to remove your photo and restore the placeholder?')) {
      setUploadedPhoto(null);
      localStorage.removeItem('cnb_avatar');
    }
  };

  return {
    uploadedPhoto,
    handlePhotoUpload,
    handleRemovePhoto
  };
}
