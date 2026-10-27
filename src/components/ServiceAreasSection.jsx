'use client';

import React, { useState, useEffect } from 'react';

export default function ServiceAreasSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="service-areas-section" id="areas">
      <div className="container-xxl">
        <div className="row align-items-center gy-5">
          {/* Left Column: Eyebrow, Heading, Lead & 2-Card Auto Slider */}
          <div className="col-lg-6 col-xl-6">
            <div className="pe-xl-2 mb-4 mb-lg-0">
              <span className="section-tag mb-2 d-inline-flex align-items-center">
                <i className="fa-solid fa-map-location-dot me-1"></i> SERVICE AREAS
              </span>
              <h2 className="section-title display-6 fw-bold mb-3">
                Our Regional Service <span className="gradient-word">Areas</span>
              </h2>
              <p className="text-muted fs-6 mb-4" style={{ maxWidth: '540px' }}>
                Delivering authorized Carrier AC sales, precision installation, and
                prompt on-site maintenance across Pondicherry, Villupuram,
                Cuddalore, and nearby regional belts.
              </p>

              {/* Area Slider Container */}
              <div className="area-slider-container position-relative">
                <div className="area-slider-overflow">
                  <div
                    className="area-slider-track d-flex"
                    id="areaSliderTrack"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                      transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    {/* Slide Group 1: Pondicherry & Villupuram */}
                    <div className="area-slide-group">
                      <div className="row g-3 h-100">
                        {/* Card 1: Pondicherry */}
                        <div className="col-sm-6 col-12 d-flex">
                          <div className="area-card w-100">
                            <div className="area-card-header">
                              <div className="area-icon-box">
                                <i className="fa-solid fa-city"></i>
                              </div>
                              <div>
                                <span className="area-badge-primary">
                                  Main Hub &amp; Showroom
                                </span>
                                <h4 className="fw-bold fs-5 mb-0 text-dark-navy">
                                  Pondicherry
                                </h4>
                              </div>
                            </div>
                            <p className="small text-muted mb-2">
                              Complete sales showroom, warehouse inventory, and
                              dedicated technician dispatch.
                            </p>
                            <div className="area-locations-tags">
                              <span className="location-tag">White Town</span>
                              <span className="location-tag">Lawspet</span>
                              <span className="location-tag">Muthialpet</span>
                              <span className="location-tag">Saram</span>
                              <span className="location-tag">Villianur</span>
                              <span className="location-tag">Kalapet</span>
                            </div>
                            <ul className="area-features-list">
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Authorized
                                Carrier Hub
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Same-Day
                                Delivery &amp; Setup
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> 2-Hour Quick
                                Assistance
                              </li>
                            </ul>
                            <div className="area-action-btns">
                              <a
                                href="https://wa.me/919843020486?text=Hi%20Comfort%20Aircon%2C%20I%20need%20AC%20service%20in%20Pondicherry."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-area-whatsapp"
                              >
                                <i className="fa-brands fa-whatsapp fs-5"></i> WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Card 2: Villupuram */}
                        <div className="col-sm-6 col-12 d-flex">
                          <div className="area-card w-100">
                            <div className="area-card-header">
                              <div className="area-icon-box">
                                <i className="fa-solid fa-truck-ramp-box"></i>
                              </div>
                              <div>
                                <span className="area-badge-primary">
                                  Full District Reach
                                </span>
                                <h4 className="fw-bold fs-5 mb-0 text-dark-navy">
                                  Villupuram
                                </h4>
                              </div>
                            </div>
                            <p className="small text-muted mb-2">
                              Doorstep Carrier sales consultation, commercial VRF
                              execution, and authorized service.
                            </p>
                            <div className="area-locations-tags">
                              <span className="location-tag">Villupuram Town</span>
                              <span className="location-tag">Tindivanam</span>
                              <span className="location-tag">Vikravandi</span>
                              <span className="location-tag">Valavanur</span>
                              <span className="location-tag">Gingee</span>
                              <span className="location-tag">Mailam</span>
                            </div>
                            <ul className="area-features-list">
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Doorstep
                                Site Consultation
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Express Hub
                                Dispatch
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Certified
                                Technicians
                              </li>
                            </ul>
                            <div className="area-action-btns">
                              <a
                                href="https://wa.me/919843020486?text=Hi%20Comfort%20Aircon%2C%20I%20need%20AC%20service%20in%20Villupuram."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-area-whatsapp"
                              >
                                <i className="fa-brands fa-whatsapp fs-5"></i> WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Slide Group 2: Cuddalore & Nearby Areas */}
                    <div className="area-slide-group">
                      <div className="row g-3 h-100">
                        {/* Card 3: Cuddalore */}
                        <div className="col-sm-6 col-12 d-flex">
                          <div className="area-card w-100">
                            <div className="area-card-header">
                              <div
                                className="area-icon-box"
                                style={{
                                  background: 'rgba(16, 185, 129, 0.1)',
                                  color: '#10B981',
                                }}
                              >
                                <i className="fa-solid fa-industry"></i>
                              </div>
                              <div>
                                <span
                                  className="area-badge-primary"
                                  style={{
                                    background: '#D1FAE5',
                                    color: '#047857',
                                  }}
                                >
                                  Coastal &amp; Industrial
                                </span>
                                <h4 className="fw-bold fs-5 mb-0 text-dark-navy">
                                  Cuddalore
                                </h4>
                              </div>
                            </div>
                            <p className="small text-muted mb-2">
                              Turnkey industrial cooling, commercial cassette
                              solutions, and anti-corrosion ACs.
                            </p>
                            <div className="area-locations-tags">
                              <span className="location-tag">Cuddalore Port</span>
                              <span className="location-tag">Old Town (OT)</span>
                              <span className="location-tag">Manjakuppam</span>
                              <span className="location-tag">Panruti</span>
                              <span className="location-tag">Neyveli</span>
                              <span className="location-tag">Chidambaram</span>
                            </div>
                            <ul className="area-features-list">
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Coastal
                                Anti-Rust ACs
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Industrial
                                &amp; Commercial HVAC
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> On-Site
                                Repair &amp; AMC
                              </li>
                            </ul>
                            <div className="area-action-btns">
                              <a
                                href="https://wa.me/919843020458?text=Hi%20Comfort%20Aircon%2C%20I%20need%20AC%20service%20in%20Cuddalore."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-area-whatsapp"
                              >
                                <i className="fa-brands fa-whatsapp fs-5"></i> WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Card 4: Nearby Regional Corridors */}
                        <div className="col-sm-6 col-12 d-flex">
                          <div className="area-card w-100">
                            <div className="area-card-header">
                              <div
                                className="area-icon-box"
                                style={{
                                  background: 'rgba(245, 158, 11, 0.1)',
                                  color: '#F59E0B',
                                }}
                              >
                                <i className="fa-solid fa-compass"></i>
                              </div>
                              <div>
                                <span
                                  className="area-badge-primary"
                                  style={{
                                    background: '#FEF3C7',
                                    color: '#B45309',
                                  }}
                                >
                                  Nearby Corridors
                                </span>
                                <h4 className="fw-bold fs-5 mb-0 text-dark-navy">
                                  Nearby Areas
                                </h4>
                              </div>
                            </div>
                            <p className="small text-muted mb-2">
                              Luxury villa VRF systems, eco-friendly residences, and
                              highway commercial projects.
                            </p>
                            <div className="area-locations-tags">
                              <span className="location-tag">Auroville</span>
                              <span className="location-tag">Marakkanam</span>
                              <span className="location-tag">ECR Belt</span>
                              <span className="location-tag">NH-45 Corridor</span>
                              <span className="location-tag">Sedarapet</span>
                              <span className="location-tag">JIPMER Area</span>
                            </div>
                            <ul className="area-features-list">
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Eco
                                Inverter AC Units
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Villa &amp;
                                Resort VRF Experts
                              </li>
                              <li>
                                <i className="fa-solid fa-circle-check"></i> Priority
                                Mobile Service Van
                              </li>
                            </ul>
                            <div className="area-action-btns">
                              <a
                                href="https://wa.me/919843020486?text=Hi%20Comfort%20Aircon%2C%20I%20need%20AC%20service%20in%20Auroville%20or%20nearby%20area."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-area-whatsapp"
                              >
                                <i className="fa-brands fa-whatsapp fs-5"></i> WhatsApp
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Area Slider Controls */}
                <div className="d-flex align-items-center justify-content-between mt-4 pt-1">
                  <div className="area-slider-dots d-flex align-items-center gap-2">
                    {[0, 1].map((idx) => (
                      <button
                        key={idx}
                        type="button"
                        className={`area-dot ${currentSlide === idx ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Go to Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button
                      type="button"
                      className="t-arrow-btn"
                      onClick={() =>
                        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
                      }
                      aria-label="Previous service areas"
                    >
                      <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button
                      type="button"
                      className="t-arrow-btn"
                      onClick={() =>
                        setCurrentSlide((prev) => (prev + 1) % totalSlides)
                      }
                      aria-label="Next service areas"
                    >
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated HVAC Excellence Graphic */}
          <div className="col-lg-6 col-xl-6">
            <div className="area-hero-graphic-wrap position-relative mx-auto text-center">
              {/* Big Circular Graphic Backdrop */}
              <div className="area-circle-backdrop">
                <div className="area-circle-inner-warm"></div>
              </div>

              {/* Large 3 HVAC Technicians Image */}
              <img
                src="/images/Group-315-1.png"
                alt="Comfort Aircon Dedicated HVAC Excellence Technical Team"
                className="img-fluid area-technicians-img position-relative z-2"
              />

              {/* Floating Certified Field Team Trust Badge */}
              <div className="area-floating-trust-badge shadow-lg d-inline-flex align-items-center gap-3 position-absolute">
                <div className="badge-icon-circle bg-primary-blue text-white shadow-xs">
                  <i className="fa-solid fa-award fs-4"></i>
                </div>
                <div className="text-start">
                  <span className="d-block fw-bold text-dark-navy small leading-tight">
                    Certified Field Team
                  </span>
                  <small className="text-muted" style={{ fontSize: '0.74rem' }}>
                    Carrier &amp; Toshiba Authorized
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
