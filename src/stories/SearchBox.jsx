import React, { useState } from 'react';
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
