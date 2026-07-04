import React, { useEffect, useId, useRef, useState } from 'react';

const FormSelect = ({ id, label, options, value, onChange, name }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('touchstart', close);
    };
  }, []);

  const pick = (nextValue) => {
    onChange({ target: { name, value: nextValue } });
    setOpen(false);
  };

  return (
    <div className="form-group form-select-root" ref={rootRef}>
      <span className="form-label" id={`${id}-label`}>{label}</span>
      <input type="hidden" name={name} value={value} readOnly />
      <button
        type="button"
        id={id}
        className={`form-select-trigger${open ? ' is-open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label`}
        aria-controls={listId}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected.label}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      {open && (
        <ul className="form-select-menu" id={listId} role="listbox" aria-labelledby={`${id}-label`}>
          {options.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={`form-select-option${option.value === value ? ' is-selected' : ''}`}
                onClick={() => pick(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FormSelect;
