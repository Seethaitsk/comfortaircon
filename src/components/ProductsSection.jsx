'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';
import ProductPanels from './ProductPanels';

/**
 * ProductsSection:
 * Redesigned "Our Range" section as a sleek horizontal expanding-panels showcase.
 * Replaces old carousel/card-shadow grid with flat, soft-tinted expanding panels
 * adhering to existing theme colours, typography, section heading, and modals.
 */
export default function ProductsSection() {
  const { openAppointment, openSpec } = useModal();

  return (
    <section className="products-section section-padding" id="products">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header text-center mb-5" data-aos="fade-up">
          <span className="section-tag">
            <i className="fa-solid fa-snowflake me-1"></i> OUR RANGE
          </span>
          <h2 className="section-title">
            Carrier &amp; Toshiba Technology <span className="gradient-word">Portfolio</span>
          </h2>
          <p className="section-desc">
            Explore our official range of high-efficiency Carrier and Toshiba systems engineered for residential, commercial, and enterprise applications.
          </p>
        </div>

        {/* Horizontal Expanding-Panels Showcase Component */}
        <ProductPanels openSpec={openSpec} openAppointment={openAppointment} />
      </div>
    </section>
  );
}
