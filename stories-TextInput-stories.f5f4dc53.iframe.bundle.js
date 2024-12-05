"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[6550],{"./src/stories/TextInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LabelLeft:()=>LabelLeft,LabelTop:()=>LabelTop,TextInputWithFloatingLabel:()=>TextInputWithFloatingLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _TextInput__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/TextInput.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Input",component:_TextInput__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{label:{control:"text"},labelPosition:{control:"select",options:["top","left"]},placeholder:{control:"text"},value:{control:"text"},onChange:{action:"changed"},required:{control:"boolean"}}},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_TextInput__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),Default=Template.bind({});Default.args={label:"User Name",labelPosition:"top",placeholder:"Enter username",value:"",required:!0,floatingLabelTxtInp:!1},Default.parameters={docs:{source:{code:'import React, { useState } from "react";\nimport "./TextInput.css"; \nimport styled, { css } from "styled-components";\n\nconst InputContainer = styled.div\'\n  position: relative;\n  margin: 16px 0;\n  width: 96%;\n\';\n\nconst StyledInput = styled.input\'\n  width: 97%;\n  padding: 16px 12px 8px;\n  padding-bottom: 16px;\n  font-size: 16px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  transition: border-color 0.3s;\n\n  &:focus {\n    border-color: #007bff;\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    transform: translate(0, -28px);\n    font-size: 20px;\n    color: #007bff;\n  }\n\';\n\nconst FloatingLabel = styled.label\'\n  position: absolute;\n  left: 12px;\n  top: 16px;\n  font-size: 16px;\n  color: #999;\n  background-color: white;\n  padding: 0 4px;\n  transition: 0.3s ease all;\n  pointer-events: none;\n\n  {({ isFocused }) =>\n    isFocused &&\n    css\'\n      transform: translate(0, -26px);\n      font-size: 18px;\n      color: #007bff;\n    \'}\n\';\n\nconst StyledTable = styled.table\'\n  width: 100%;\n  border-collapse: collapse;\n\';\n\n\nconst TextInput = ({\n  label,\n  labelPosition,\n  placeholder,\n  value,\n  onChange,\n  required = false,\n  floatingLabelTxtInp,\n}) => {\n    const [inputValue, setInputValue] = useState("");\n  const [isFocused, setIsFocused] = useState(false);\n  const handleInputChange = (event) => {\n    setInputValue(event.target.value);\n  };\n  return (\n    <>\n      <div className={\'text-input-container {labelPosition}\'} style={{ visibility: floatingLabelTxtInp ? "hidden" : "" }}>\n        <label>\n          {label} {required && <span className="required-asterisk">*</span>}\n        </label>\n        <input\n          type="text"\n          placeholder={placeholder}\n          value={value}\n          onChange={onChange}\n          className="text-input"\n          required={required}\n        />\n      </div>\n      <InputContainer\n        style={{ visibility: !floatingLabelTxtInp ? "hidden" : "" }}\n      >\n        <StyledInput\n          type="input"\n          value={inputValue}\n          onChange={handleInputChange}\n          onFocus={() => setIsFocused(true)}\n          onBlur={() => setIsFocused(!!inputValue)}\n          placeholder=""\n        />\n        <FloatingLabel isFocused={isFocused || inputValue}>{label}</FloatingLabel>\n      </InputContainer>\n    </>\n  );\n};\n\nexport default TextInput;\n'}}};const LabelTop=Template.bind({});LabelTop.args={label:"User Name",labelPosition:"top",placeholder:"Enter username",value:"",required:!0,floatingLabelTxtInp:!1};const LabelLeft=Template.bind({});LabelLeft.args={label:"User Name",labelPosition:"left",placeholder:"Enter username",value:"",required:!1,floatingLabelTxtInp:!1};const TextInputWithFloatingLabel=Template.bind({});TextInputWithFloatingLabel.args={label:"User Name",labelPosition:"left",placeholder:"Enter username",value:"",required:!1,floatingLabelTxtInp:!0};const __namedExportsOrder=["Default","LabelTop","LabelLeft","TextInputWithFloatingLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...Default.parameters?.docs?.source}}},LabelTop.parameters={...LabelTop.parameters,docs:{...LabelTop.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...LabelTop.parameters?.docs?.source}}},LabelLeft.parameters={...LabelLeft.parameters,docs:{...LabelLeft.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...LabelLeft.parameters?.docs?.source}}},TextInputWithFloatingLabel.parameters={...TextInputWithFloatingLabel.parameters,docs:{...TextInputWithFloatingLabel.parameters?.docs,source:{originalSource:"args => <TextInput {...args} />",...TextInputWithFloatingLabel.parameters?.docs?.source}}}},"./src/stories/TextInput.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>stories_TextInput});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputContainer=styled_components_browser_esm.Ay.div`
  position: relative;
  margin: 16px 0;
  width: 96%;
`,StyledInput=styled_components_browser_esm.Ay.input`
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
`,FloatingLabel=styled_components_browser_esm.Ay.label`
  position: absolute;
  left: 12px;
  top: 16px;
  font-size: 16px;
  color: #999;
  background-color: white;
  padding: 0 4px;
  transition: 0.3s ease all;
  pointer-events: none;

  ${_ref=>{let{isFocused}=_ref;return isFocused&&styled_components_browser_esm.AH`
      transform: translate(0, -26px);
      font-size: 18px;
      color: #007bff;
    `}}
`,TextInput_TextInput=(styled_components_browser_esm.Ay.table`
  width: 100%;
  border-collapse: collapse;
`,_ref2=>{let{label,labelPosition,placeholder,value,onChange,required=!1,floatingLabelTxtInp}=_ref2;const[inputValue,setInputValue]=(0,react.useState)(""),[isFocused,setIsFocused]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:`text-input-container ${labelPosition}`,style:{visibility:floatingLabelTxtInp?"hidden":""},children:[(0,jsx_runtime.jsxs)("label",{children:[label," ",required&&(0,jsx_runtime.jsx)("span",{className:"required-asterisk",children:"*"})]}),(0,jsx_runtime.jsx)("input",{type:"text",placeholder,value,onChange,className:"text-input",required})]}),(0,jsx_runtime.jsxs)(InputContainer,{style:{visibility:floatingLabelTxtInp?"":"hidden"},children:[(0,jsx_runtime.jsx)(StyledInput,{type:"input",value:inputValue,onChange:event=>{setInputValue(event.target.value)},onFocus:()=>setIsFocused(!0),onBlur:()=>setIsFocused(!!inputValue),placeholder:""}),(0,jsx_runtime.jsx)(FloatingLabel,{isFocused:isFocused||inputValue,children:label})]})]})}),stories_TextInput=TextInput_TextInput;TextInput_TextInput.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{required:{defaultValue:{value:"false",computed:!1},required:!1}}}}}]);
//# sourceMappingURL=stories-TextInput-stories.f5f4dc53.iframe.bundle.js.map