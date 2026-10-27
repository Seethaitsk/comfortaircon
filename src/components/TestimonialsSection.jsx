'use client';

import React, { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Comfort Aircon helped us select the perfect Toshiba 5-Star Inverter AC for our master bedroom. Our monthly electric bills dropped by 35% and cooling is whisper-silent!',
      name: 'R. Sundararam',
      role: 'Homeowner, Lawspet',
      avatar: '/images/avatar_1.jpg',
    },
    {
      id: 2,
      quote:
        'Purchased 3 Carrier Cassette ACs for our medical clinic in White Town. Instant GST quotation, unbeatable dealer pricing, and completed precision installation in 24 hours!',
      name: 'Dr. Ananya V.',
      role: 'Clinic Director, White Town',
      avatar: '/images/avatar_2.jpg',
    },
    {
      id: 3,
      quote:
        'Best authorized dealership in Puducherry! Installed a Toshiba Multi-VRF System for our beach villa. Genuine products with official factory warranty cards.',
      name: 'K. Vigneshwar',
      role: 'Villa Owner, ECR Road',
      avatar: '/images/avatar_3.jpg',
    },
    {
      id: 4,
      quote:
        'Outstanding turnkey commercial HVAC design and execution. The energy efficiency and priority after-sales service give our resort guests complete climate comfort year-round.',
      name: 'S. Meenakshi',
      role: 'Resort Director, Auroville',
      avatar: '/images/avatar_4.jpg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section
      className="testimonial-ref-section py-6 overflow-hidden position-relative"
      id="testimonials"
    >
      <div className="container-xxl position-relative z-2">
        {/* Centered Section Header */}
        <div className="text-center max-w-750 mx-auto mb-5">
          <span className="section-tag mb-2 d-inline-flex align-items-center">
            <i className="fa-solid fa-comments me-1"></i> TESTIMONIALS
          </span>
          <h2 className="testimonial-heading text-center">
            What they say <span className="gradient-word">about us</span>.
          </h2>
          <p className="testimonial-lead text-center mx-auto mb-3">
            Over 2,400+ satisfied homeowners, luxury villas, and commercial
            enterprises in Puducherry rely on Comfort Aircon for authorized Carrier
            &amp; Toshiba cooling excellence.
          </p>
          <div className="d-inline-flex align-items-center gap-2 bg-white px-3 py-1.5 rounded-pill shadow-xs border">
            <span className="fw-bold text-dark-navy fs-6">4.7</span>
            <span className="text-warning small d-inline-flex gap-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="text-muted small fw-medium">
              (120+ Reviews on Google Business)
            </span>
          </div>
        </div>

        {/* Centered Auto Slider Card Container */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="testimonial-slider-container position-relative mx-auto">
              <div className="testimonial-slider-overflow">
                <div
                  className="testimonial-slider-track"
                  style={{
                    transform: `translateX(-${activeSlide * 100}%)`,
                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {testimonials.map((t) => (
                    <div className="testimonial-slide-card" key={t.id}>
                      <div className="t-card-inner">
                        <p className="t-card-quote">&ldquo;{t.quote}&rdquo;</p>
                        <div className="t-card-author d-flex align-items-center gap-3 mt-auto">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="t-card-avatar"
                          />
                          <div>
                            <h6 className="t-author-name mb-0">{t.name}</h6>
                            <span className="t-author-role">{t.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Dots Navigation */}
              <div
                className="testimonial-slider-dots d-flex justify-content-center align-items-center gap-2 mt-4"
                id="testimonialSliderDots"
              >
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`area-dot ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
