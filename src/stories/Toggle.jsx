import React from 'react';
import './Toggle.css'; // Assuming we have toggle styles in this CSS file

const Toggle = ({ label = "Default Toggle", checked, onChange }) => {
  return (
    <div className="toggle-container">
      <label className="toggle-label">{label}</label>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider-toggle"></span>
      </label>
    </div>
  );
};

export default Toggle;
