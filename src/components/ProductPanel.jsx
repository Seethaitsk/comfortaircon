'use client';

import React from 'react';

/**
 * ProductPanel: Single expandable panel for the horizontal showcase.
 * Collapsed: Displays index (01-05) and vertical rotated category label.
 * Expanded (flex-grow ~4x): Shows full details, specs/enquire/whatsapp actions,
 * and a large product image with looping ice-blue airflow stream animation.
 */
export default function ProductPanel({
  product,
  isActive,
  onSelect,
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
      role="tab"
      id={`panel-tab-${product.id}`}
      aria-selected={isActive}
      aria-expanded={isActive}
      aria-controls={`panel-content-${product.id}`}
      tabIndex={0}
      className={`product-panel ${isActive ? 'is-expanded' : 'is-collapsed'} ${
        product.isToshiba ? 'is-toshiba' : ''
      }`}
      style={{
        backgroundColor: product.bgTint,
        borderColor: product.borderColor,
        transitionDelay: isRevealed ? undefined : `${revealDelay}ms`,
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
      }}
      onClick={onSelect}
      onKeyDown={onKeyDown}
    >
      {/* Collapsed State: Shows 01-05 at top and vertical rotated label in center */}
      <div className="panel-collapsed-view" aria-hidden={isActive}>
        <span className="panel-index">{product.indexStr}</span>
        <div className="panel-label-wrap">
          <span className="panel-rotated-label">{product.category}</span>
        </div>
        <span className="panel-collapsed-indicator">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
      </div>

      {/* Expanded State: Product Details (Left) + Large Image with Airflow Animation (Right) */}
      <div
        className="panel-expanded-view"
        id={`panel-content-${product.id}`}
        role="tabpanel"
        aria-labelledby={`panel-tab-${product.id}`}
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

          {/* Action Buttons Row */}
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

        {/* Right Column: Large Image + Ice-Blue Airflow Animation */}
        <div className="panel-image-col">
          {/* Airflow Stream Animation looping beneath image */}
          <div className="panel-airflow-container" aria-hidden="true">
            <svg
              className="panel-airflow-svg"
              viewBox="0 0 320 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="airflow-line airflow-line-1"
                d="M 10,25 Q 90,8 170,25 T 310,25"
                stroke="rgba(56, 189, 248, 0.7)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="18 14"
              />
              <path
                className="airflow-line airflow-line-2"
                d="M 0,48 Q 100,28 190,48 T 320,48"
                stroke="rgba(0, 120, 191, 0.55)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="22 16"
              />
              <path
                className="airflow-line airflow-line-3"
                d="M 15,70 Q 80,52 160,70 T 310,70"
                stroke="rgba(147, 197, 253, 0.65)"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeDasharray="16 12"
              />
            </svg>
          </div>

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
