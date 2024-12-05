// DatePicker.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DatePicker.css';

const DatePicker = ({ type, onChange, disableFuture }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const today = new Date();
  const minDate = disableFuture ? today.toISOString().split('T')[0] : null;

  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);

    // Clear end date if the start date changes to an earlier date
    if (newStartDate > endDate) {
      setEndDate('');
    }

    onChange(newStartDate, endDate);
  };

  const handleEndDateChange = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
    onChange(startDate, newEndDate);
  };

  const renderInput = () => {
    switch (type) {
      case 'default':
        return (
          <input
            type="date"
            onChange={(e) => onChange(e.target.value)}
            min={minDate}
          />
        );
      case 'datetime':
        return (
          <input
            type="datetime-local"
            onChange={(e) => onChange(e.target.value)}
            min={minDate}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="date-picker">
      {renderInput()}
    </div>
  );
};

DatePicker.propTypes = {
  type: PropTypes.oneOf(['default', 'datetime']).isRequired,
  onChange: PropTypes.func.isRequired,
  disableFuture: PropTypes.bool,
};

DatePicker.defaultProps = {
  disableFuture: false,
};

export default DatePicker;
