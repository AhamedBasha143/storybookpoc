import React from 'react';
import './SingleSelectDropdown.css'; // Import the CSS file

const SingleSelectDropdown = ({ options, selectedValue, onChange, disabled }) => {
  return (
    <div className="select-dropdown">
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SingleSelectDropdown;
