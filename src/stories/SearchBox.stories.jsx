import React from 'react';
import { SearchBoxWithIcon } from './SearchBox';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Search Box',
  component: SearchBoxWithIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    onSearch: { action: 'changed' },
    showIcon: { control: 'boolean' },
    primary: { control: 'boolean' },
    buttonSize:{ control: 'text'},
    noBorderRadius:{ control: 'boolean' }
  },
};

const Template = (args) => <SearchBoxWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search here...',
  onSearch: action('Search term submitted'),
  showIcon:true,
  primary:true,
  buttonSize:'medium',
  noBorderRadius:true
};
Default.parameters = {
  docs: {
    source: {
      code: `import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';
import { FiSearch } from 'react-icons/fi'; 
import { Button } from './Button';

export const SearchBoxWithIcon = ({ placeholder, onSearch,showIcon,primary,buttonSize,noBorderRadius }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="searchbox-with-icon-form" onSubmit={handleSubmit}>
      <div className="searchbox-with-icon">
      {showIcon ? <FiSearch className="searchbox-icon"/>:''}
        <input
          type="text"
          className="searchbox-input-icon"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
      {primary   ?  <Button primary noBorderRadius={noBorderRadius} size={buttonSize} onClick={()=>{}} label="Search" /> :  <Button size={buttonSize} noBorderRadius={noBorderRadius} onClick={()=>{}} label="Search" />}
    </form>
  );
};

SearchBoxWithIcon.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  showIcon:PropTypes.bool,
  noBorderRadius:PropTypes.bool,
  buttonSize:PropTypes.oneOf(["small", "medium", "large"]),
};

SearchBoxWithIcon.defaultProps = {
  placeholder: 'Search...',
};
`
      ,
    },
  },
};
export const SearchBox_With_Secondary_Button = Template.bind({});
SearchBox_With_Secondary_Button.args = {
  placeholder: 'Type to find something...',
  onSearch: action('Search term submitted'),
  showIcon:true,
  primary:false,
  buttonSize:'medium',
  noBorderRadius:false
};
