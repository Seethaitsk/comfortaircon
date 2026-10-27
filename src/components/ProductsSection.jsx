'use client';

import React, { useState, useRef } from 'react';
import { useModal } from '@/context/ModalContext';

export default function ProductsSection() {
  const { openAppointment, openSpec } = useModal();
  const [activeFilter, setActiveFilter] = useState('all');
  const sliderRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Systems' },
    { id: 'toshiba', label: 'Toshiba Range' },
    { id: 'carrier', label: 'Carrier Range' },
    { id: 'midea', label: 'Midea Range' },
    { id: 'split', label: 'Split Systems' },
    { id: 'vrf', label: 'VRF Solutions' },
    { id: 'cassette', label: 'Cassette & Ductable' },
  ];

  const products = [
    {
      id: 1,
      name: 'Carrier Split Room AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      category: 'carrier split',
      badge: 'Wall Mounted Split',
      rating: '5.0 (5-Star Rated)',
      desc: 'High-efficiency inverter wall split AC with rapid cool mode, ultra-quiet operation, and PM 2.5 air filtration.',
      points: ['Inverter Energy Saver', 'Wi-Fi Smart Control Ready'],
      specs: '1.5 Ton 5-Star Inverter • PM 2.5 Air Filter • 10-Year Compressor Warranty • Ultra Quiet 21dB',
      img: '/images/carrier-split-ac.jpg',
    },
    {
      id: 2,
      name: 'Carrier VRF AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      category: 'carrier vrf',
      badge: 'Commercial VRF',
      rating: '4.9 Premium',
      desc: 'Variable Refrigerant Flow system designed for whole-building multi-zone climate control with up to 64 indoor units.',
      points: ['Multi-Zone Independent Control', 'High Ambient Performance'],
      specs: 'Up to 64 Indoor Units • Variable Speed DC Inverter • Centralized Smart Touch Controller • 52°C Ambient Cooling',
      img: '/images/carrier-vrf-ac.jpg',
    },
    {
      id: 3,
      name: 'Carrier Cassette AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      category: 'carrier cassette',
      badge: 'Ceiling Cassette',
      rating: '4.9 (Office Favorite)',
      desc: 'Sleek 4-way ceiling cassette with 360-degree uniform airflow distribution for offices, showrooms, and open layouts.',
      points: ['360° Air Dispersion', 'Built-in Condensate Pump'],
      specs: '360° Airflow Louvers • Built-in Lift Condensate Drain Pump • Slim Ceiling Depth • Wireless Remote',
      img: '/images/carrier-cassette.jpg',
    },
    {
      id: 4,
      name: 'Toshiba VRF AC',
      brand: 'TOSHIBA',
      brandClass: 'toshiba',
      category: 'toshiba vrf',
      badge: 'Japanese Tech VRF',
      rating: '5.0 Efficiency',
      desc: 'State-of-the-art Japanese engineering SMMS-u VRF system engineered for extreme temperature durability and maximum COP.',
      points: ['Dual Rotary Inverter Compressor', 'Operates up to 52°C Ambient'],
      specs: 'SMMS-u Technology • Twin Rotary DC Inverter Compressor • Intelligent Oil Control • Extreme Heat Resilient',
      img: '/images/toshiba-vrf.jpg',
    },
    {
      id: 5,
      name: 'Toshiba Cassette AC',
      brand: 'TOSHIBA',
      brandClass: 'toshiba',
      category: 'toshiba cassette',
      badge: 'Ceiling Cassette',
      rating: '4.9 Air Purify',
      desc: 'Premium ceiling cassette with independent louvers, plasma ionizer air sanitation, and self-cleaning operation.',
      points: ['Plasma Air Purifier Filter', 'Independent Louver Swing'],
      specs: 'Plasma Air Ionizer • Independent 4-Louver Directing • Self-Cleaning Coil • Ultra Low Noise Operation',
      img: '/images/toshiba-cassette.jpeg',
    },
    {
      id: 6,
      name: 'Carrier Ductable AC',
      brand: 'CARRIER',
      brandClass: 'carrier',
      category: 'carrier cassette',
      badge: 'Concealed Ductable',
      rating: '4.9 Architectural',
      desc: 'Concealed ceiling split unit providing seamless hidden cooling with custom linear diffusers for luxury residences.',
      points: ['100% Invisible Ceiling Mount', 'High Static Pressure Fan'],
      specs: '100% Concealed In-Ceiling • High Static Pressure Blower • Linear Grill Integration • Central Automation Ready',
      img: '/images/carrier-duct.jpg',
    },
    {
      id: 7,
      name: 'Toshiba Split AC',
      brand: 'TOSHIBA',
      brandClass: 'toshiba',
      category: 'toshiba split',
      badge: 'Hi-Wall Split',
      rating: '5.0 Inverter',
      desc: 'Toshiba Daiseikai high-wall inverter AC featuring Magic Coil dirt-resistant heat exchanger fins and eco-mode power save.',
      points: ['Magic Coil Self-Cleaning', 'Hi-Power Cooling Boost'],
      specs: 'Magic Coil Self-Cleaning Heat Exchanger • Hi-Power Turbo Chill • 5-Star Energy Saver • 10-Yr Warranty',
      img: '/images/toshiba-split-ac.jpeg',
    },
    {
      id: 8,
      name: 'Midea Smart Inverter AC',
      brand: 'MIDEA',
      brandClass: 'midea',
      category: 'midea split',
      badge: 'Smart Inverter Tech',
      rating: '4.9 Smart Choice',
      desc: 'High-efficiency smart inverter split AC with Hyper Graphene fins, AI eco-mode cooling, and Wi-Fi voice control.',
      points: ['AI Eco-Energy Saver Mode', 'Hyper Graphene Corrosion Guard'],
      specs: '1.5 Ton 5-Star Inverter • AI Smart Save • Hyper Graphene Fins • Wi-Fi App & Voice Control',
      img: '/images/carrier-split-ac.jpg',
    },
  ];

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category.includes(activeFilter);
  });

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="products-section" id="products">
      <div className="container-xxl">
        <div className="text-center max-w-700 mx-auto mb-4">
          <span className="section-tag">
            <i className="fa-solid fa-snowflake me-1"></i> OUR RANGE
          </span>
          <h2 className="section-title display-6 fw-bold">
            Carrier & Toshiba Technology <span className="gradient-word">Portfolio</span>
          </h2>
          <p className="text-muted fs-6">
            Explore our official range of high-efficiency Carrier and Toshiba systems
            engineered for residential, commercial, and enterprise applications.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="d-flex justify-content-center align-items-center text-center gap-2 mb-4 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`product-filter-btn ${activeFilter === f.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product Slider Outer Wrapper with Floating Side Arrows */}
        <div className="product-slider-outer-wrapper position-relative">
          <button
            className="slider-arrow-btn slider-arrow-left"
            id="productPrevBtn"
            onClick={scrollLeft}
            aria-label="Previous Products"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="slider-arrow-btn slider-arrow-right"
            id="productNextBtn"
            onClick={scrollRight}
            aria-label="Next Products"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Product Slider Container */}
          <div
            className="product-slider-wrapper position-relative py-2"
            ref={sliderRef}
            style={{ overflowX: 'auto', scrollBehavior: 'smooth' }}
          >
            <div className="row g-4 flex-nowrap product-slider-track" id="productGrid">
              {filteredProducts.map((product) => (
                <div
                  className="col-lg-4 col-md-6 product-item flex-shrink-0"
                  key={product.id}
                  style={{ width: '360px', maxWidth: '85vw' }}
                >
                  <div className="product-card h-100 d-flex flex-column">
                    <div className="product-img-box">
                      <img src={product.img} alt={product.name} />
                      <span className={`brand-pill ${product.brandClass}`}>
                        {product.brand}
                      </span>
                    </div>

                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-2">
                        <span className="badge-soft-blue">{product.badge}</span>
                        <span className="text-warning small">
                          <i className="fa-solid fa-star"></i> {product.rating}
                        </span>
                      </div>

                      <h4 className="fw-bold fs-5 text-dark-navy mb-2">{product.name}</h4>
                      <p className="text-muted small mb-3">{product.desc}</p>

                      <ul className="list-unstyled small text-muted mb-4 mt-auto">
                        {product.points.map((pt) => (
                          <li key={pt} className="mb-1">
                            <i className="fa-solid fa-circle-check text-success me-2"></i>
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 pt-3 border-top mt-auto">
                        <button
                          type="button"
                          className="btn btn-sm btn-quick-spec"
                          onClick={() =>
                            openSpec({
                              name: product.name,
                              brand: `${product.brand} System`,
                              desc: product.desc,
                              specs: product.specs,
                              img: product.img,
                            })
                          }
                        >
                          <i className="fa-solid fa-circle-info me-1"></i> Specs
                        </button>

                        <div className="product-enquire-bar d-flex gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-enquire-product rounded-pill px-3 py-1.5"
                            onClick={() => openAppointment(product.name)}
                          >
                            <i className="fa-solid fa-clipboard-question me-1"></i> Enquire Now
                          </button>
                          <a
                            href={`https://wa.me/919843020486?text=Hi%20Comfort%20Aircon%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                              product.name
                            )}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-success rounded-pill px-2.5 py-1.5 text-white"
                            title="Enquire on WhatsApp"
                          >
                            <i className="fa-brands fa-whatsapp"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
