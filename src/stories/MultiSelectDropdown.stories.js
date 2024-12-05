import React, { useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown'; // Adjust the path according to your project structure

// Default export required by Storybook
export default {
  title: 'Components/Multi Select Dropdown',
  component: MultiSelectDropdown,
  parameters: {
    layout: 'centered', // Ensures the component is centered in Storybook
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' }, // Control for passing options in Storybook UI
    selectedOptions: { control: 'array' }, // Control for selected values
    onChange: { action: 'changed' }, // Storybook action to handle the onChange event
    placeholder: { control: 'text' }, // Control for placeholder text
    disabled: { control: 'boolean' }, // Control for disabled state
  },
};

// Template function for reusing in multiple stories
const Template = (args) => {
  const [selectedOptions, setSelectedOptions] = useState(args.selectedOptions);

  return (
    <MultiSelectDropdown
      {...args}
      selectedOptions={selectedOptions}
      onChange={setSelectedOptions}
    />
  );
};

// Default dropdown story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: [], // No initial selection
  placeholder: 'Select options...',
  disabled: false, // Enabled
};
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from 'react';
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
    <div className={'multi-select-dropdown {disabled ? 'disabled' : ''}'}>
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
`
      ,
    },
  },
};

// Enabled dropdown story
export const Enabled = Template.bind({});
Enabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: ['Option 1'], // Option 1 initially selected
  placeholder: 'Select options...',
  disabled: false, // Enabled
};

// Disabled dropdown story
export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  selectedOptions: ['Option 1', 'Option 2'], // Some options selected
  placeholder: 'Select options...',
  disabled: true, // Disabled state
};
