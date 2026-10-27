'use client';

import React from 'react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'fa-solid fa-certificate',
      title: 'Authorized Carrier Dealer',
      desc: '100% genuine equipment directly sourced with manufacturer warranty & GST invoices.',
    },
    {
      icon: 'fa-solid fa-award',
      title: '25+ Years Experience',
      desc: 'Over two decades of proven cooling excellence across 15,000+ completed installations.',
    },
    {
      icon: 'fa-solid fa-id-card',
      title: 'Certified HVAC Engineers',
      desc: 'Factory-trained specialists ensuring precision load calculation, ducting, and setup.',
    },
    {
      icon: 'fa-solid fa-hand-holding-dollar',
      title: 'Transparent BOQ Pricing',
      desc: 'Clear, itemized proposals with zero hidden costs and free initial site consultation.',
    },
  ];

  return (
    <section className="why-choose-us-section" id="why-choose-us">
      <div className="container-xxl">
        <div className="row align-items-center gy-5">
          {/* Left Column (on Desktop): Overlapping Dual Image Showcase (Matching 1st Reference Image) */}
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="why-images-wrapper position-relative">
              {/* Main Primary Image: Certified Technician Servicing Ceiling AC */}
              <div className="why-main-img-box rounded-4 overflow-hidden shadow-lg">
                <img
                  src="/images/why1.png"
                  alt="Certified Comfort Aircon HVAC Technician Servicing Ceiling AC"
                  className="img-fluid w-100 h-100 object-fit-cover why-main-img"
                  loading="lazy"
                />
              </div>

              {/* Overlapping Secondary Image: Technical Maintenance Setup */}
              <div className="why-overlap-img-box position-absolute rounded-4 overflow-hidden shadow-2xl">
                <img
                  src="/images/why2.png"
                  alt="Precision AC Technical Installation and Maintenance Setup"
                  className="img-fluid w-100 h-100 object-fit-cover why-overlap-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column (on Desktop): Section Title, Description & 4 Feature Cards */}
          <div className="col-lg-6 order-lg-2 order-1">
            <span className="section-tag mb-2">
              <i className="fa-solid fa-medal me-1"></i> WHY CARRIER
            </span>
            <h2 className="text-white section-title display-5 fw-bold mb-4">
              Why Choose <span className="gradient-word">Comfort Aircon</span>?
            </h2>
            <p className="text-light opacity-75 mb-4 fs-6">
              As Puducherry&apos;s premier authorized Carrier &amp; Toshiba AC dealership
              for over 25 years, we combine official manufacturer backing,
              factory-trained HVAC engineers, transparent pricing, and rapid local
              service across Pondicherry, Villupuram, and Cuddalore.
            </p>
            <div className="row g-3 g-md-4">
              {reasons.map((reason) => (
                <div className="col-sm-6" key={reason.title}>
                  <div className="why-choose-card h-100">
                    <div className="why-icon">
                      <i className={reason.icon}></i>
                    </div>
                    <h5 className="text-white fw-bold">{reason.title}</h5>
                    <p className="text-light opacity-75 small mb-0">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
