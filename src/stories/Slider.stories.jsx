import React, { useState } from 'react';
import Slider from './Slider';

export default {
  title: 'Components/Slider Component',
  component: Slider,
  tags: ['autodocs'],
};

const Template = (args) => {
  const [value, setValue] = useState(30);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <Slider {...args} value={value} onChange={handleChange} />;
};

export const DefaultSlider = Template.bind({});
DefaultSlider.args = {
  label: 'Custom Slider',
  min: 0,
  max: 100,
  step: 1,
};
DefaultSlider.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
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
`
      ,
    },
  },
};
