'use client';

import React from 'react';
import { useModal } from '@/context/ModalContext';

export default function Toast() {
  const { toastMessage } = useModal();

  if (!toastMessage) return null;

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1090 }}
    >
      <div
        className="toast show align-items-center text-bg-dark border-0 rounded-3 shadow-lg"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex p-2">
          <div className="toast-body d-flex align-items-center gap-2">
            <i className="fa-solid fa-circle-check text-success fs-5"></i>
            <span>{toastMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
