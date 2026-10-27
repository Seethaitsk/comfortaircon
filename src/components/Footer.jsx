'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container-xxl">
        <div className="row gy-5">
          {/* Col 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <Link className="d-inline-block mb-3 text-decoration-none" href="/">
              <div className="footer-logo-box">
                <img
                  src="/images/logo1.png"
                  alt="Comfort Aircon - Reach For The Sky"
                  className="footer-logo-img"
                />
              </div>
            </Link>
            <p className="small text-light-slate mb-4">
              Puducherry&apos;s authorized sales dealer & distributor for Carrier &
              Toshiba Air Conditioning Systems. Explore Split ACs, VRF Systems,
              Cassette ACs, and Commercial Cooling Solutions.
            </p>
            <div className="footer-contact-info mb-4">
              <p className="mb-2">
                <i className="fa-solid fa-phone text-primary-blue me-2"></i>
                <a
                  href="tel:+919876543210"
                  className="text-light-slate text-decoration-none contact-highlight-phone fs-6"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="mb-2">
                <i className="fa-solid fa-envelope text-primary-blue me-2"></i>
                <a
                  href="mailto:info@comfortaircon.com"
                  className="text-light-slate text-decoration-none contact-highlight-email fs-6"
                >
                  info@comfortaircon.com
                </a>
              </p>
              <p className="mb-0 small text-light-slate">
                <i className="fa-solid fa-location-dot text-primary-blue me-2"></i>{' '}
                295, Thiruvalluvar Salai, Puducherry 605005
              </p>
            </div>
            <div className="d-flex gap-2 social-icons">
              <a href="#" className="btn btn-sm rounded-circle btn-outline-light" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-sm rounded-circle btn-outline-light" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="btn btn-sm rounded-circle btn-outline-light" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-sm rounded-circle btn-outline-light" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link href="/">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>About Us
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Services
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Products
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>AC Installation
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>AC Repair & Service
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Refrigeration Solutions
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Gas Filling
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Cleaning & Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Replacement
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <i className="fa-solid fa-angle-right me-2 text-primary-blue"></i>Annual Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas & Direct Contact */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Service Areas</h5>
            <ul className="footer-links mb-4">
              <li>
                <Link href="/#areas">
                  <i className="fa-solid fa-location-dot me-2 text-primary-blue"></i>Pondicherry
                </Link>
              </li>
              <li>
                <Link href="/#areas">
                  <i className="fa-solid fa-location-dot me-2 text-primary-blue"></i>Villupuram
                </Link>
              </li>
              <li>
                <Link href="/#areas">
                  <i className="fa-solid fa-location-dot me-2 text-primary-blue"></i>Cuddalore
                </Link>
              </li>
              <li>
                <Link href="/#areas">
                  <i className="fa-solid fa-location-dot me-2 text-primary-blue"></i>Nearby Locations
                </Link>
              </li>
            </ul>
            <div className="pt-3 border-top border-secondary border-opacity-25">
              <p className="mb-2">
                <i className="fa-solid fa-phone text-primary-blue me-2"></i>
                <a
                  href="tel:+919876543210"
                  className="text-white text-decoration-none fw-bold fs-6"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="mb-0">
                <i className="fa-solid fa-envelope text-primary-blue me-2"></i>
                <a
                  href="mailto:info@comfortaircon.com"
                  className="text-light-slate text-decoration-none"
                >
                  info@comfortaircon.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p className="mb-0 text-light-slate">
            © 2026 Comfort Aircon Air Conditioning & Cooling Specialist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
