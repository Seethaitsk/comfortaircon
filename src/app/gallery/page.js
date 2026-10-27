import React from 'react';

export const metadata = {
  title: 'Gallery | Comfort Aircon - Authorized Carrier & Toshiba Dealer',
  description:
    'Project showcase of residential and commercial Carrier & Toshiba air conditioning installations across Puducherry.',
};

export default function GalleryPage() {
  return (
    <div className="maintenance-hero">
      <div className="container text-center py-5">
        <span className="eyebrow-label mb-2 d-inline-block">PROJECT SHOWCASE</span>
        <h1 className="maintenance-title">
          Project Gallery Under <span className="gradient-word">Maintenance</span>
        </h1>
        <p className="text-muted mx-auto mt-3" style={{ maxWidth: '60ch' }}>
          Our residential and commercial HVAC installation gallery is currently
          being refreshed with recent project photography.
        </p>
      </div>
    </div>
  );
}
