import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ imageSrc, imageAlt, closeLabel, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!imageSrc) return null;

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose} role="presentation">
      <div className="modal-content" role="dialog" aria-modal="true" aria-label={imageAlt} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label={closeLabel}>
          <FaTimes aria-hidden="true" />
        </button>
        <img src={imageSrc} alt={imageAlt} className="modal-image" />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
