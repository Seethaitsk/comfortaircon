'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';

/**
 * ProductPanel: Single expandable panel for the horizontal showcase.
 * Collapsed: Displays index (01-05) and vertical rotated category label (horizontal on mobile).
 * Expanded (flex-grow ~4x): Shows brand label, product name in heading font, 2-3 feature lines,
 * large product image with ice-blue looping airflow streamline animation, and Specs/Enquire/WhatsApp actions.
 */
export default function ProductPanel({
  product,
  isActive,
  onSelect,
  onHover,
  onKeyDown,
  openAppointment,
  panelRef,
  isRevealed,
  revealDelay,
}) {
  return (
    <div
      ref={panelRef}
      className={`product-panel ${isActive ? 'is-expanded' : 'is-collapsed'}`}
      style={{
        backgroundColor: product.bgTint,
        borderColor: product.borderColor,
      }}
      onMouseEnter={onHover}
    >
      {/* Collapsed Trigger Button */}
      <button
        type="button"
        id={`panel-header-${product.id}`}
        className="panel-collapsed-btn"
        aria-expanded={isActive}
        aria-controls={`panel-content-${product.id}`}
        aria-label={`${product.indexStr} ${product.category} - ${product.name}`}
        tabIndex={isActive ? -1 : 0}
        onClick={onSelect}
        onKeyDown={onKeyDown}
      >
        <span className="panel-index">{product.indexStr}</span>
        <div className="panel-label-wrap">
          <span className="panel-category-name">{product.category}</span>
        </div>
        <span className="panel-expand-indicator" aria-hidden="true">
          <i className="fa-solid fa-chevron-right desktop-icon"></i>
          <i className="fa-solid fa-chevron-down mobile-icon"></i>
        </span>
      </button>

      {/* Expanded Content Area:
          1. Image: Product photo
          2. Name: Product name
          3. Model: Product model
          4. Specifications: Technical specifications
          5. Features: Key features
          6. Enquire button: Opens the shared enquiry form
      */}
      <div
        id={`panel-content-${product.id}`}
        className="panel-expanded-view"
        role="region"
        aria-labelledby={`panel-header-${product.id}`}
        aria-hidden={!isActive}
      >
        {/* Left Column: Product Info & Enquire Action */}
        <div className="panel-content-col">
          <div className="panel-info-header">
            {/* 2. Product Name */}
            <h3 className="panel-product-title mb-1.5 text-dark-navy">
              {product.name}
            </h3>

            {/* 3. Product Model */}
            <div className="panel-product-model mb-2">
              <span className="model-badge">
                <i className="fa-solid fa-tag me-1.5 opacity-75"></i>
                <span className="fw-semibold">Model:</span>&nbsp;{product.model}
              </span>
            </div>

            {/* 4. Technical Specifications */}
            <div className="panel-specs-section mb-2">
              <div className="panel-section-label mb-1.5">
                <i className="fa-solid fa-sliders me-1.5 text-primary"></i>
                <span>Technical Specifications</span>
              </div>
              <div className="panel-specs-grid">
                {product.specs.map((item, idx) => (
                  <div key={idx} className="panel-spec-item">
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Features */}
            <div className="panel-features-section mb-2">
              <div className="panel-section-label mb-1.5">
                <i className="fa-solid fa-circle-check me-1.5 text-success"></i>
                <span>Key Features</span>
              </div>
              <ul className="panel-feature-list list-unstyled mb-0">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="mb-1 d-flex align-items-center gap-2">
                    <i className="fa-solid fa-check text-success small"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 6. Enquire Button: Opens the shared enquiry form */}
          <div className="panel-actions-row pt-1 mt-auto">
            <button
              type="button"
              className="btn btn-panel-enquire d-inline-flex align-items-center justify-content-center gap-2"
              onClick={(e) => {
                e.stopPropagation();
                openAppointment(product.name);
              }}
              title={`Enquire for ${product.name}`}
            >
              <i className="fa-solid fa-clipboard-question"></i>
              <span>Enquire Now</span>
            </button>
          </div>
        </div>

        {/* 1. Product Image (Right Column) */}
        <div className="panel-image-col">
          <div className="panel-img-wrapper">
            <img
              src={product.img}
              alt={`${product.name} - ${product.model}`}
              className="panel-product-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
