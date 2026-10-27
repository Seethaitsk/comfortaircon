'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'AC Installation',
      desc: 'Precision wall mounting, copper piping, vacuum leak testing, and electrical wiring for split, cassette, and ductable ACs.',
      img: '/images/1.png',
      alt: 'AC Installation - Carrier & Toshiba',
    },
    {
      title: 'AC Repair & Service',
      desc: 'Fast on-site troubleshooting for no-cooling, compressor trip, PCB circuit issues, fan motor failure, and water dripping.',
      img: '/images/2.png',
      alt: 'AC Repair Services',
    },
    {
      title: 'Service & Maintenance',
      desc: 'Multi-point seasonal inspection to maintain peak cooling performance, lower energy consumption, and prevent sudden breakdowns.',
      img: '/images/3.png',
      alt: 'AC Service & Maintenance',
    },
    {
      title: 'Gas Filling & Leak Repair',
      desc: 'Electronic leak detection, nitrogen pressure testing, copper brazing repairs, vacuuming, and pure R32/R410A gas charging.',
      img: '/images/4.png',
      alt: 'AC Gas Filling Services',
    },
    {
      title: 'Cleaning & Troubleshooting',
      desc: 'High-pressure water jacket foam cleaning to purge deep dust, mold, and odor. Complete electrical & thermistor troubleshooting.',
      img: '/images/5.png',
      alt: 'AC Cleaning & Troubleshooting',
    },
    {
      title: 'AC Replacement',
      desc: 'Trade in your old, noisy AC for high-efficiency 5-Star Carrier or Toshiba inverter systems with attractive exchange bonuses.',
      img: '/images/6.png',
      alt: 'AC Replacement and Upgrade',
    },
    {
      title: 'Annual Maintenance (AMC)',
      desc: 'Comprehensive & Non-Comprehensive AMC packages with scheduled preventive visits, free breakdown callouts, and spare discounts.',
      img: '/images/7.png',
      alt: 'Annual Maintenance Contract AMC',
    },
    {
      title: 'Commercial AC Services',
      desc: 'Toshiba SMMS-u VRF engineering, architectural ceiling cassettes, concealed ducting, and corporate climate engineering.',
      img: '/images/8.png',
      alt: 'Commercial AC Services',
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container-xxl">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">
            <i className="fa-solid fa-gears me-1"></i> SERVICES
          </span>
          <h2 className="section-title display-6 fw-bold">
            Our HVAC & Air Conditioning <span className="gradient-word">Services</span>
          </h2>
          <p className="text-muted fs-6">
            Custom engineered climate control solutions designed for optimal energy
            efficiency, indoor air quality, and long-term operational performance
            for residential and commercial spaces.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-3 col-md-6" key={service.title}>
              <div className="service-card d-flex flex-column h-100">
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.alt} />
                </div>
                <div className="service-card-body d-flex flex-column flex-grow-1">
                  <h4 className="fw-bold fs-5 mb-2">{service.title}</h4>
                  <p className="text-muted small mb-3">{service.desc}</p>
                  <div className="mt-auto">
                    <Link
                      href="/services"
                      className="btn-service-link w-100 justify-content-center"
                    >
                      View Details on Services Page{' '}
                      <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Services Page CTA Button */}
        <div className="text-center mt-5">
          <Link
            href="/services"
            className="btn btn-custom-primary btn-lg rounded-pill fw-bold shadow-sm explore-services-btn"
          >
            <i className="fa-solid fa-layer-group me-2"></i> Explore All Services on
            Dedicated Services Page
          </Link>
        </div>
      </div>
    </section>
  );
}
