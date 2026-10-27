'use client';

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';

export default function AppointmentModal() {
  const { appointmentState, closeAppointment, showToast } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'split-ac',
    location: '',
    notes: '',
  });

  if (!appointmentState.isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(
      `Consultation request submitted! Our HVAC specialist will confirm your schedule shortly for ${formData.name}.`
    );
    setFormData({
      name: '',
      phone: '',
      date: '',
      service: 'split-ac',
      location: '',
      notes: '',
    });
    closeAppointment();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1050 }}
        onClick={closeAppointment}
      />

      {/* Modal Dialog */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ zIndex: 1055 }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
            <div className="modal-header bg-dark-navy text-white rounded-top-4 py-3 px-4">
              <h5 className="modal-title fw-bold fs-5 mb-0 d-flex align-items-center">
                <i className="fa-solid fa-calendar-check me-2 text-primary-blue"></i>
                {appointmentState.productName
                  ? `Enquire: ${appointmentState.productName}`
                  : 'Book HVAC Appointment'}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={closeAppointment}
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark-navy">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    required
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark-navy">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="form-control form-control-custom"
                    required
                    placeholder="+91 98430 00000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark-navy">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-custom"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark-navy">
                    AC System / Requirement
                  </label>
                  <select
                    className="form-select form-control-custom"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="split-ac">Carrier / Toshiba Inverter Split AC</option>
                    <option value="vrf-system">Commercial VRF / VRV Engineering</option>
                    <option value="cassette-ac">Architectural Ceiling Cassette AC</option>
                    <option value="ductable-ac">Concealed Ductable Central Air</option>
                    <option value="service-repair">AC Repair & Precision Service</option>
                    <option value="amc">Annual Maintenance Contract (AMC)</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-bold text-dark-navy">
                    Location / Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    placeholder="e.g. Pondicherry, Villupuram, Cuddalore"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-custom-accent w-100 py-3 mt-3 fw-bold rounded-pill shadow-sm"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i> Confirm Appointment Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
