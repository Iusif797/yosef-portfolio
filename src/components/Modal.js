import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ imageSrc, imageAlt, closeLabel, onClose }) => {
  useEffect(() => {
    if (!imageSrc) return undefined;

    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    const prevOverflow = document.body.style.overflow;

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [imageSrc, onClose]);

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
