'use client';

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import ProductPanel from './ProductPanel';

function subscribeReducedMotion(callback) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function ProductPanels({ openSpec, openAppointment }) {
  const products = [
    {
      id: 1,
      indexStr: '01',
      category: 'Split AC',
      name: 'Carrier Split Room AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      badge: 'Wall Mounted Split',
      rating: '5.0 (5-Star Rated)',
      desc: 'High-efficiency inverter wall split AC with rapid cool mode, ultra-quiet operation, and PM 2.5 air filtration.',
      points: [
        'Rapid Cool Inverter Energy Saver',
        'PM 2.5 Micro-Air Filtration System',
        'Whisper-Quiet 21dB Operation',
      ],
      specs: '1.5 Ton 5-Star Inverter • PM 2.5 Air Filter • 10-Year Compressor Warranty • Ultra Quiet 21dB',
      img: '/images/carrier-split-ac.jpg',
      bgTint: '#F0F8FF', // Soft icy blue tint 1
      borderColor: 'rgba(0, 120, 191, 0.16)',
      isToshiba: false,
    },
    {
      id: 2,
      indexStr: '02',
      category: 'Cassette AC',
      name: 'Carrier 4-Way Cassette AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      badge: 'Ceiling Cassette',
      rating: '4.9 (Office Favorite)',
      desc: 'Sleek 4-way ceiling cassette with 360-degree uniform airflow distribution for offices, showrooms, and open layouts.',
      points: [
        '360° Uniform Airflow Dispersion',
        'Built-in High Lift Condensate Pump',
        'Slim Architectural Ceiling Profile',
      ],
      specs: '360° Airflow Louvers • Built-in Lift Condensate Drain Pump • Slim Ceiling Depth • Wireless Remote',
      img: '/images/carrier-cassette.jpg',
      bgTint: '#EAF4FC', // Soft icy blue tint 2
      borderColor: 'rgba(0, 120, 191, 0.18)',
      isToshiba: false,
    },
    {
      id: 3,
      indexStr: '03',
      category: 'Ductable AC',
      name: 'Carrier Concealed Ductable AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      badge: 'Concealed Ductable',
      rating: '4.9 Architectural',
      desc: 'Concealed ceiling split unit providing seamless hidden cooling with custom linear diffusers for luxury residences.',
      points: [
        '100% Invisible Ceiling Concealment',
        'High Static Pressure Performance',
        'Architectural Linear Diffuser Ready',
      ],
      specs: '100% Concealed In-Ceiling • High Static Pressure Blower • Linear Grill Integration • Central Automation Ready',
      img: '/images/carrier-duct.jpg',
      bgTint: '#E1EFFB', // Soft icy blue tint 3
      borderColor: 'rgba(0, 120, 191, 0.20)',
      isToshiba: false,
    },
    {
      id: 4,
      indexStr: '04',
      category: 'VRF Systems',
      name: 'Carrier Commercial VRF System',
      brand: 'CARRIER',
      brandClass: 'carrier',
      badge: 'Commercial Multi-Zone',
      rating: '4.9 Premium VRF',
      desc: 'Variable Refrigerant Flow system designed for whole-building multi-zone climate control with up to 64 indoor units.',
      points: [
        'Multi-Zone Independent Room Control',
        'Extreme 52°C Ambient Cooling Durability',
        'Full Inverter Energy Efficiency COP',
      ],
      specs: 'Up to 64 Indoor Units • Variable Speed DC Inverter • Centralized Smart Touch Controller • 52°C Ambient Cooling',
      img: '/images/carrier-vrf-ac.jpg',
      bgTint: '#D9EBF9', // Soft icy blue tint 4
      borderColor: 'rgba(0, 120, 191, 0.22)',
      isToshiba: false,
    },
    {
      id: 5,
      indexStr: '05',
      category: 'Toshiba Range',
      name: 'Toshiba SMMS-u Japanese VRF',
      brand: 'TOSHIBA',
      brandClass: 'toshiba',
      badge: 'Japanese Engineering VRF',
      rating: '5.0 Japanese Tech',
      desc: 'State-of-the-art Japanese engineering SMMS-u VRF system engineered for extreme temperature durability and maximum COP.',
      points: [
        'Twin Rotary DC Inverter Compressor',
        'Magic Coil Self-Cleaning Heat Exchanger',
        'Industry-Leading Seasonal EER & COP',
      ],
      specs: 'SMMS-u Technology • Twin Rotary DC Inverter Compressor • Intelligent Oil Control • Extreme Heat Resilient',
      img: '/images/toshiba-vrf.jpg',
      bgTint: '#FEF2F2', // Soft red tint (only for Toshiba as specified)
      borderColor: 'rgba(220, 38, 38, 0.22)',
      isToshiba: true,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  // Check prefers-reduced-motion using useSyncExternalStore (eliminates cascading renders)
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // IntersectionObserver: Fade up panels in sequence when scrolling into view
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.02, rootMargin: '200px 0px' }
    );

    observer.observe(containerRef.current);

    // Fallback timer ensures visibility in all environments including headless capture
    const fallbackTimer = setTimeout(() => {
      setIsRevealed(true);
    }, 300);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Auto-play: 4.5s interval, pauses on hover or focus, stops permanently after manual interaction
  useEffect(() => {
    if (hasInteracted || isHovered || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [hasInteracted, isHovered, prefersReducedMotion, products.length]);

  // Handle desktop hover on collapsed panel
  const handlePanelHover = useCallback((idx) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setActiveIndex(idx);
    }
  }, []);

  // Handle manual selection (click/tap) - stops auto-play permanently
  const handleSelect = useCallback((idx) => {
    setHasInteracted(true);
    setActiveIndex(idx);
  }, []);

  // Keyboard arrow navigation
  const handleKeyDown = useCallback(
    (e, idx) => {
      let nextIdx = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIdx = (idx + 1) % products.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIdx = (idx - 1 + products.length) % products.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIdx = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIdx = products.length - 1;
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleSelect(idx);
      }

      if (nextIdx !== null) {
        handleSelect(nextIdx);
        if (panelRefs.current[nextIdx]) {
          const btn = panelRefs.current[nextIdx].querySelector('.panel-collapsed-btn');
          if (btn) btn.focus();
        }
      }
    },
    [handleSelect, products.length]
  );

  return (
    <div
      className="product-panels-showcase-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={() => setIsHovered(false)}
    >
      {/* 5 Full-Width Tall Expanding Panels */}
      <div
        className="product-panels-container"
        ref={containerRef}
        role="region"
        aria-label="Our Range - Product Showcase"
      >
        {products.map((product, idx) => (
          <ProductPanel
            key={product.id}
            product={product}
            isActive={activeIndex === idx}
            onSelect={() => handleSelect(idx)}
            onHover={() => handlePanelHover(idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            openSpec={openSpec}
            openAppointment={openAppointment}
            panelRef={(el) => (panelRefs.current[idx] = el)}
            isRevealed={isRevealed}
            revealDelay={idx * 80}
          />
        ))}
      </div>

      {/* Pagination Dots Below: The active dot stretches into a pill */}
      <div
        className="product-panels-dots d-flex justify-content-center align-items-center gap-2 mt-4"
        role="navigation"
        aria-label="Product Showcase Navigation"
      >
        {products.map((product, idx) => (
          <button
            key={product.id}
            type="button"
            className={`panel-dot ${activeIndex === idx ? 'active' : ''}`}
            onClick={() => handleSelect(idx)}
            aria-label={`Switch to panel ${product.indexStr}: ${product.category}`}
            aria-current={activeIndex === idx ? 'true' : 'false'}
            title={`${product.indexStr} - ${product.category}`}
          />
        ))}
      </div>
    </div>
  );
}
