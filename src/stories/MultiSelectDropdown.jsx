import React, { useState } from 'react';
import './MultiSelectDropdown.css'; 

const MultiSelectDropdown = ({ options, selectedOptions, onChange, placeholder, disabled }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen); 
    }
  };

  const handleChange = (option) => {
    if (!disabled) {
      const newSelectedOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((item) => item !== option)
        : [...selectedOptions, option];
      onChange(newSelectedOptions);
    }
  };

  return (
    <div className={`multi-select-dropdown ${disabled ? 'disabled' : ''}`}>
      <div className="input-container" onClick={handleToggle}>
        <input
          type="text"
          placeholder={placeholder}
          readOnly={true}
          value={selectedOptions.join(', ')}
          className="input-field"
        />
        <svg
          className="arrow"
          width="12" 
          height="8" 
          viewBox="0 0 12 8" 
          fill="currentColor" 
        >
          <path d="M6 8L0 0h12L6 8z" />
        </svg>
      </div>
      {isOpen && ( 
        <div className="options">
          {options.map((option) => (
            <label key={option} className="option">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleChange(option)}
                disabled={disabled} 
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
