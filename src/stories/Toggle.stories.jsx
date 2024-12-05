import React, { useState } from 'react';
import Toggle from './Toggle';

export default {
  title: 'Components/Toggle Component',
  component: Toggle,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const DefaultToggle = Template.bind({});
DefaultToggle.args = {
  label: 'Custom Toggle',
};
DefaultToggle.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
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
`
      ,
    },
  },
};
