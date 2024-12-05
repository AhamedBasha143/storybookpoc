import React, { useState } from 'react';
import SingleSelectDropdown from './SingleSelectDropdown'; // Adjust the path according to your project structure

// Default export required by Storybook
export default {
  title: 'Components/Single Select Dropdown',
  component: SingleSelectDropdown,
  parameters: {
    layout: 'centered', // Ensures the component is centered in Storybook
  },
  tags: ['autodocs'],
  argTypes: {
    options: { control: 'array' }, // Control for passing options in Storybook UI
    selectedValue: { control: 'text' }, // Control for selected value
    disabled: { control: 'boolean' }, // Toggle for disabled state
    onChange: { action: 'changed' }, // Storybook action to handle the onChange event
  },
};

// Template function for reusing in multiple stories
const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);
  
  return (
    <SingleSelectDropdown
      {...args}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

// Default dropdown story
export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedValue: '', // No initial selection
  disabled: false,
};
Default.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
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
`
      ,
    },
  },
};

// Selected dropdown story
export const Selected = Template.bind({});
Selected.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedValue: 'Option 2', // Initial selection
  disabled: false,
};

// Selected with disabled dropdown story
export const SelectedWithDisabled = Template.bind({});
SelectedWithDisabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selectedValue: 'Option 1', // Initially selected
  disabled: true, // Dropdown is disabled
};
