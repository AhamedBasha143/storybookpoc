import React from 'react';
import './Dialog.css';

const Dialog = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <h3>{title}</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="dialog-content">
          {children}
        </div>
        <div className="dialog-footer">
          <button className="footer-button" onClick={onClose}>OK</button>
          <button className="footer-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
