import React from 'react';

const RadioButton = ({ label, checked, disabled, name, onChange, color, size, textSize }) => (
  <div>
    <label style={{ display: 'flex', alignItems: 'center', fontSize: textSize, color }}>
      <input
        type="radio"
        checked={checked}
        disabled={disabled}
        name={name}
        onChange={onChange}
        style={{ width: size, height: size }} // Set the size of the radio button
      />
      <span style={{ marginLeft: '8px',marginTop:3 }}>{label}</span> {/* Space between button and text */}
    </label>
  </div>
);

export default RadioButton;
