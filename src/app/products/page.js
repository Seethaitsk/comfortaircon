import React from 'react';

export const metadata = {
  title: 'Products | Comfort Aircon - Authorized Carrier & Toshiba Dealer',
  description:
    'Explore authorized Carrier & Toshiba split ACs, commercial VRF systems, cassette units, and ductable cooling solutions.',
};

export default function ProductsPage() {
  return (
    <div className="maintenance-hero">
      <div className="container text-center py-5">
        <span className="eyebrow-label mb-2 d-inline-block">OUR RANGE</span>
        <h1 className="maintenance-title">
          Our Products Under <span className="gradient-word">Maintenance</span>
        </h1>
        <p className="text-muted mx-auto mb-3" style={{ maxWidth: '60ch' }}>
          Our Carrier &amp; Toshiba HVAC catalog is being updated. Explore our
          standard system specs:
        </p>
        <div className="d-inline-flex flex-wrap justify-content-center gap-2 mt-3">
          <span className="product-specs-chip badge-soft-blue">
            1.5 Ton • 5-Star Inverter
          </span>
          <span className="product-specs-chip badge-soft-blue">
            2.0 Ton • Commercial VRF
          </span>
          <span className="product-specs-chip badge-soft-blue">
            3.0 Ton • 4-Way Cassette
          </span>
        </div>
      </div>
    </div>
  );
}
