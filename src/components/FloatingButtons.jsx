'use client';

import React from 'react';

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button (Mobile only via CSS) */}
      <a
        href="tel:04132242111"
        className="floating-call-btn"
        title="Call Comfort Aircon (0413-2242111)"
      >
        <i className="fa-solid fa-phone-volume"></i>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919843020486?text=Hi%20Comfort%20Aircon,%20I%20need%20assistance%20with%20Carrier%20AC%20sales%20and%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title="Chat with Comfort Aircon on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
