'use client';

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import Link from 'next/link';

function subscribe(callback) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWindowItemsPerView() {
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 992) return 2;
  return 3;
}

function getServerItemsPerView() {
  return 3;
}

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

  // Clone 3 items at end so cards 0, 1, 2 smoothly roll into view on the 8th slide
  const extendedServices = [
    ...services.map((s, i) => ({ ...s, _key: `orig-${i}` })),
    ...services.slice(0, 3).map((s, i) => ({ ...s, _key: `post-${i}` })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = useSyncExternalStore(
    subscribe,
    getWindowItemsPerView,
    getServerItemsPerView
  );

  const isSlidingRef = useRef(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const handleNext = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev === 0) return services.length - 1;
      return prev - 1;
    });
  }, [services.length]);

  const goToSlide = useCallback((serviceIdx) => {
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex(serviceIdx);
  }, []);

  const handleTransitionEnd = () => {
    isSlidingRef.current = false;
    if (currentIndex >= services.length) {
      // At index 8, cloned cards 0, 1, 2 are visible in place.
      // Reset to index 0 silently with no transition for seamless infinite loop.
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Safety unlock if transitionend doesn't trigger
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      isSlidingRef.current = false;
    }, 700);
    return () => clearTimeout(safetyTimer);
  }, [currentIndex]);

  // Auto Slider Timer: 3.8s interval, paused on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const activeDot = currentIndex % services.length;
  const gapPart = (24 / itemsPerView) * currentIndex;
  const transformStyle = `translateX(calc(-1 * (${currentIndex} * 100% / ${itemsPerView} + ${gapPart}px)))`;
  const cardWidthStyle = `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`;

  return (
    <section className="services-section" id="services">
      <div className="container-xxl">
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="section-tag">
            <i className="fa-solid fa-gears me-1"></i> SERVICES
          </span>
          <h2 className="section-title display-6 fw-bold">
            Our HVAC &amp; Air Conditioning <span className="gradient-word">Services</span>
          </h2>
          <p className="text-muted fs-6">
            Custom engineered climate control solutions designed for optimal energy
            efficiency, indoor air quality, and long-term operational performance
            for residential and commercial spaces.
          </p>
        </div>

        {/* 3-Card Auto Slider Outer Wrapper */}
        <div
          className="services-slider-outer position-relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-left"
            id="servicesPrevBtn"
            onClick={handlePrev}
            aria-label="Previous Services"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="slider-arrow-btn slider-arrow-right"
            id="servicesNextBtn"
            onClick={handleNext}
            aria-label="Next Services"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Slider Overflow Window */}
          <div
            className="services-slider-overflow"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="services-slider-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: transformStyle,
                transition: isTransitioning
                  ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
              }}
            >
              {extendedServices.map((service) => (
                <div
                  className="services-slide-item"
                  key={service._key}
                  style={{
                    width: cardWidthStyle,
                    flex: `0 0 ${cardWidthStyle}`,
                  }}
                >
                  <div className="service-card d-flex flex-column h-100">
                    <div className="service-img-wrapper">
                      <img src={service.img} alt={service.alt} loading="lazy" />
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
          </div>


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
