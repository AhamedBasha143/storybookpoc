import React, { useState } from "react";
import "./TextInput.css"; 
import styled, { css } from "styled-components";

const InputContainer = styled.div`
  position: relative;
  margin: 16px 0;
  width: 96%;
`;

const StyledInput = styled.input`
  width: 97%;
  padding: 16px 12px 8px;
  padding-bottom: 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(0, -28px);
    font-size: 20px;
    color: #007bff;
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #999;
  background-color: white;
  padding: 0 4px;
  transition: 0.3s ease all;
  pointer-events: none;

  ${({ isFocused }) =>
    isFocused &&
    css`
      transform: translate(0, -26px);
      font-size: 18px;
      color: #007bff;
    `}
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;


const TextInput = ({
  label,
  labelPosition,
  placeholder,
  value,
  onChange,
  required = false,
  floatingLabelTxtInp,
}) => {
    const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className={`text-input-container ${labelPosition}`} style={{ visibility: floatingLabelTxtInp ? "hidden" : "" }}>
        <label>
          {label} {required && <span className="required-asterisk">*</span>}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="text-input"
          required={required}
        />
      </div>
      <InputContainer
        style={{ visibility: !floatingLabelTxtInp ? "hidden" : "" }}
      >
        <StyledInput
          type="input"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(!!inputValue)}
          placeholder=""
        />
        <FloatingLabel isFocused={isFocused || inputValue}>{label}</FloatingLabel>
      </InputContainer>
    </>
  );
};

export default TextInput;
