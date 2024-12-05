import React from "react";
import "./Checkbox.css"; // Import a CSS file for styling

const Checkbox = ({ label, checked, disabled, onChange, labelPlacement }) => {
  return (
    <div className={`checkbox-container ${labelPlacement}`}>
      {labelPlacement === "top" && <label>{label}</label>}
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      {labelPlacement === "start" && <label>{label}</label>}
      {labelPlacement === "bottom" && <label>{label}</label>}
      {labelPlacement === "left" && <label>{label}</label>}
    </div>
  );
};

export default Checkbox;
