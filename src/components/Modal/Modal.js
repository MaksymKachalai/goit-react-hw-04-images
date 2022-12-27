import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modal = document.querySelector('#modal-root');

export default function Modal({ handleModalClick, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    console.log('listen on');

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      console.log('listen off');
    };
  });

  const handleKeyDown = event => {
    const { code } = event;
    if (code === 'Escape') {
      handleModalClick();
    }
  };

  const onModalClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      handleModalClick();
    }
  };

  return createPortal(
    <div className="overlay" onClick={onModalClick}>
      <div className="modal">{children}</div>
    </div>,
    modal
  );
}
