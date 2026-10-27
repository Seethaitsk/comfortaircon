import React from 'react';

export const metadata = {
  title: 'Services | Comfort Aircon - Authorized Carrier & Toshiba Dealer',
  description:
    'Comprehensive Carrier & Toshiba AC installation, preventive maintenance, repair, and VRF commercial services in Puducherry.',
};

export default function ServicesPage() {
  return (
    <div className="maintenance-hero">
      <div className="container text-center py-5">
        <span className="eyebrow-label mb-2 d-inline-block">SERVICES</span>
        <h1 className="maintenance-title">
          Our Services Under <span className="gradient-word">Maintenance</span>
        </h1>
        <p className="text-muted mx-auto mb-3" style={{ maxWidth: '60ch' }}>
          Our comprehensive services catalog is being refreshed. View our core
          service steps:
        </p>
        <div className="d-inline-flex flex-wrap justify-content-center gap-3 mt-3">
          <span className="badge bg-white text-navy border py-2 px-3 shadow-xs fs-6">
            Installation
          </span>
          <span className="badge bg-white text-navy border py-2 px-3 shadow-xs fs-6">
            Repair &amp; Service
          </span>
          <span className="badge bg-white text-navy border py-2 px-3 shadow-xs fs-6">
            AMC Maintenance
          </span>
        </div>
      </div>
    </div>
  );
}
