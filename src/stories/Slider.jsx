import React from 'react';
import './Slider.css'; // Assuming we have slider styles in this CSS file

const Slider = ({ label = "Default Slider", min = 0, max = 100, step = 1, value, onChange }) => {
  return (
    <div className="slider-container">
      <label className="slider-label">{label}</label>
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <span className="slider-value">{value}</span>
    </div>
  );
};

export default Slider;
