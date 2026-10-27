import React from 'react';

export const metadata = {
  title: 'About Us | Comfort Aircon - Authorized Carrier & Toshiba Dealer',
  description:
    'Over 25 years of technical expertise, delivering authorized Carrier & Toshiba cooling excellence with factory warranty protection across Puducherry.',
};

export default function AboutPage() {
  return (
    <div className="maintenance-hero">
      <div className="container text-center py-5">
        <span className="eyebrow-label mb-2 d-inline-block">ABOUT US</span>
        <h1 className="maintenance-title">
          About Us Under <span className="gradient-word">Maintenance</span>
        </h1>
        <div
          className="about-pull-quote mx-auto text-start my-4"
          style={{ maxWidth: '680px' }}
        >
          Over 25 years of technical expertise, delivering authorized Carrier &amp;
          Toshiba cooling excellence with factory warranty protection across
          Puducherry.
        </div>
      </div>
    </div>
  );
}
