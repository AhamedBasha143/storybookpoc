import React from 'react';
import RadioButton from './RadioButton'; // Adjust the path according to your project structure

// Default export required by Storybook
export default {
  title: 'Components/Radio Button',
  component: RadioButton,
  parameters: {
    layout: 'centered', // Ensures the component is centered in Storybook
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    onChange: { action: 'changed' },
    color: { control: 'color' }, 
    size: { control: 'text' }, 
    textSize: { control: 'text' }, 
  },
};

// Template function to use across multiple stories
const Template = (args) => <RadioButton {...args} />;

// Default Radio Button story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Radio Button',
  checked: false,
  disabled: false,
  name: 'radioGroup1',
  color: '#000000', // Default text color
  size: '16px', // Default radio button size
  textSize: '16px', // Default text size
};
Default.parameters = {
  docs: {
    source: {
      code: `import React from 'react';

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
`
      ,
    },
  },
};

// Selected Radio Button story
export const Selected = Template.bind({});
Selected.args = {
  label: 'Selected Radio Button',
  checked: true,
  disabled: false,
  name: 'radioGroup2',
  color: '#000000', // Default text color
  size: '16px', // Default radio button size
  textSize: '16px', // Default text size
};
Selected.parameters = {
  docs: {
    source: {
      code: `import React from 'react';

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
`
      ,
    },
  },
};

// Disabled Radio Button story
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Button',
  checked: true,
  disabled: true,
  name: 'radioGroup3',
  color: '#cccccc', // Grey color for disabled text
  size: '16px', // Default radio button size
  textSize: '16px', // Default text size
};
Disabled.parameters = {
  docs: {
    source: {
      code: `import React from 'react';

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
`
      ,
    },
  },
};
