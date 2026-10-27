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
  openSpec,
  openAppointment,
  panelRef,
  isRevealed,
  revealDelay,
}) {
  return (
    <div
      ref={panelRef}
      className={`product-panel ${isActive ? 'is-expanded' : 'is-collapsed'} ${product.isToshiba ? 'is-toshiba' : ''
        }`}
      style={{
        backgroundColor: product.bgTint,
        borderColor: product.borderColor,
        transition: isRevealed
          ? undefined
          : `opacity 500ms ease ${revealDelay}ms, transform 500ms ease ${revealDelay}ms`,
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
      }}
      onMouseEnter={onHover}
    >
      {/* Collapsed Trigger Button: Accessible button with aria-expanded & clean keyboard handling */}
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

      {/* Expanded Content Area: Info Column (Left) + Product Image with Airflow Stream (Right) */}
      <div
        id={`panel-content-${product.id}`}
        className="panel-expanded-view"
        role="region"
        aria-labelledby={`panel-header-${product.id}`}
        aria-hidden={!isActive}
      >
        {/* Left Column: Product Info & Actions */}
        <div className="panel-content-col">
          <div className="panel-info-header">
            <div className="d-flex align-items-center gap-2 mb-2 flex-wrap">
              <span className={`brand-pill ${product.brandClass}`}>
                {product.brand}
              </span>
              <span className="badge-soft-blue">{product.badge}</span>
              <span className="text-warning small ms-auto d-inline-flex align-items-center gap-1">
                <i className="fa-solid fa-star"></i> {product.rating}
              </span>
            </div>

            <h3 className="panel-product-title mb-2 text-dark-navy">{product.name}</h3>
            <p className="panel-product-desc text-muted small mb-3">
              {product.desc}
            </p>

            <ul className="panel-feature-list list-unstyled mb-3">
              {product.points.map((pt) => (
                <li key={pt} className="mb-1.5 d-flex align-items-start gap-2 text-muted small">
                  <i className="fa-solid fa-circle-check text-success mt-1"></i>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons Row: Specs, Enquire Now, WhatsApp */}
          <div className="panel-actions-row d-flex align-items-center gap-2 pt-3 border-top mt-auto">
            <button
              type="button"
              className="btn btn-sm btn-panel-specs"
              onClick={(e) => {
                e.stopPropagation();
                openSpec({
                  name: product.name,
                  brand: `${product.brand} System`,
                  desc: product.desc,
                  specs: product.specs,
                  img: product.img,
                });
              }}
              title={`View technical specifications for ${product.name}`}
            >
              <i className="fa-solid fa-circle-info me-1"></i> Specs
            </button>

            <button
              type="button"
              className="btn btn-sm btn-panel-enquire"
              onClick={(e) => {
                e.stopPropagation();
                openAppointment(product.name);
              }}
              title={`Enquire for ${product.name}`}
            >
              <i className="fa-solid fa-clipboard-question me-1"></i> Enquire Now
            </button>

            <a
              href={`https://wa.me/919843020486?text=Hi%20Comfort%20Aircon%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                product.name
              )}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-panel-whatsapp text-white"
              onClick={(e) => e.stopPropagation()}
              title="Enquire on WhatsApp"
              aria-label="Enquire on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Column: Large Image + Ice-Blue Looping Airflow Animation */}
        <div className="panel-image-col">
          {/* Airflow Streamlines looping continuously beneath unit */}


          {/* Product Image */}
          <div className="panel-img-wrapper">
            <img
              src={product.img}
              alt={product.name}
              className="panel-product-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
