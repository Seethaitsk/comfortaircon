import React from 'react';

export const metadata = {
  title: 'Contact Us | Comfort Aircon - Authorized Carrier & Toshiba Dealer',
  description:
    'Contact Comfort Aircon in Puducherry for sales inquiries, repair service, and commercial HVAC consultation.',
};

export default function ContactPage() {
  return (
    <div className="maintenance-hero">
      <div className="container text-center py-5">
        <span className="eyebrow-label mb-2 d-inline-block">CONTACT</span>
        <h1 className="maintenance-title">
          Contact Us Under <span className="gradient-word">Maintenance</span>
        </h1>
        <p className="text-muted mx-auto mb-4" style={{ maxWidth: '60ch' }}>
          Our direct contact lines and email support are available 6 days a week
          for inquiries and emergency bookings:
        </p>
        <div className="d-inline-flex flex-wrap justify-content-center align-items-center gap-3 p-3 bg-white rounded-4 border shadow-xs mb-3">
          <a
            href="tel:+919876543210"
            className="contact-highlight-phone text-decoration-none fs-5 fw-bold"
          >
            <i className="fa-solid fa-phone me-2 text-primary-blue"></i>+91 98765
            43210
          </a>
          <span className="text-muted d-none d-sm-inline">|</span>
          <a
            href="mailto:info@comfortaircon.com"
            className="contact-highlight-email text-decoration-none fs-5 fw-bold"
          >
            <i className="fa-solid fa-envelope me-2 text-primary-blue"></i>
            info@comfortaircon.com
          </a>
        </div>
      </div>
    </div>
  );
}
