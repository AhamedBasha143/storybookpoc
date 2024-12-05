"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[2345],{"./src/stories/BadgeComponent.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBadge:()=>CustomBadge,Default:()=>Default,NoBadge:()=>NoBadge,__namedExportsOrder:()=>__namedExportsOrder,default:()=>BadgeComponent_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BadgeContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top:30px;
  background-color:aliceblue;
`,IconCircle=styled_components_browser_esm.Ay.div`
  width: 60px;
  height: 60px;
  border: 2px solid #aaa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props=>props.iconSize||"30px"};
  color: #555;
  position: relative;
  margin-top:30px;
  background-color: ${props=>props.backgroundColor||"white"};;
  &:hover {
    border-color: #0056b3; 
    background-color: #f0f8ff; 
    color: #0056b3;
  }
`,BadgeNumber=styled_components_browser_esm.Ay.span`
  position: absolute;
  top: -17px;
  right: -20px;
  color: black;
  border-radius: 50%;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`,LabelText=styled_components_browser_esm.Ay.p`
  margin-top: 8px;
  font-size: ${props=>props.labelSize||"1rem"};
  color: ${props=>props.labelColor||"#333"};
  text-align: center;
`,onClick=()=>{console.log("badge clicked")},BadgeComponent=_ref=>{let{icon,label,badgeCount,iconSize,labelColor,labelSize,backgroundColor}=_ref;return(0,jsx_runtime.jsxs)(BadgeContainer,{onClick,children:[(0,jsx_runtime.jsxs)(IconCircle,{iconSize,backgroundColor,children:[icon,badgeCount>0&&(0,jsx_runtime.jsx)(BadgeNumber,{children:badgeCount})]}),(0,jsx_runtime.jsx)(LabelText,{labelSize,labelColor,children:label})]})};BadgeComponent.defaultProps={badgeCount:0,iconSize:"60px",labelColor:"#333",labelSize:"1rem",backgroundColor:"white"},BadgeComponent.__docgenInfo={description:"",methods:[],displayName:"BadgeComponent",props:{badgeCount:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},iconSize:{defaultValue:{value:"'60px'",computed:!1},description:"",type:{name:"string"},required:!1},labelColor:{defaultValue:{value:"'#333'",computed:!1},description:"",type:{name:"string"},required:!1},labelSize:{defaultValue:{value:"'1rem'",computed:!1},description:"",type:{name:"string"},required:!1},backgroundColor:{defaultValue:{value:"'white'",computed:!1},description:"",type:{name:"string"},required:!1},icon:{description:"",type:{name:"node"},required:!0},label:{description:"",type:{name:"string"},required:!0}}};var fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs");const BadgeComponent_stories={title:"Components/Badge Component",component:BadgeComponent,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{label:{control:"text"},badgeCount:{control:"number"},iconSize:{control:"text"},labelColor:{control:"color"},labelSize:{control:"text"},backgroundColor:{control:"color"}}},Template=args=>(0,jsx_runtime.jsx)(BadgeComponent,{...args}),Default=Template.bind({});Default.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:2838,iconSize:"30px",backgroundColor:"white"};const CustomBadge=Template.bind({});CustomBadge.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:50,iconSize:"30px",labelColor:"#1e90ff",labelSize:"1.2rem",backgroundColor:"lightgray"};const NoBadge=Template.bind({});NoBadge.args={icon:(0,jsx_runtime.jsx)(fa.dv1,{}),label:"Badge Label",badgeCount:0,iconSize:"30px",labelColor:"#888"},Default.parameters={docs:{source:{code:`import React from 'react';\nimport PropTypes from 'prop-types';\nimport styled from 'styled-components';\n\n// Styled components for the badge\nconst BadgeContainer = styled.div'\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin-top:30px;\n  background-color:aliceblue;\n';\n\nconst IconCircle = styled.div'\n  width: 60px;\n  height: 60px;\n  border: 2px solid #aaa;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: ${props=>props.iconSize||"30px"};\n  color: #555;\n  position: relative;\n  margin-top:30px;\n  background-color: ${props=>props.backgroundColor||"white"};;\n  &:hover {\n    border-color: #0056b3; \n    background-color: #f0f8ff; \n    color: #0056b3;\n  }\n';\n\nconst BadgeNumber = styled.span'\n  position: absolute;\n  top: -17px;\n  right: -20px;\n  color: black;\n  border-radius: 50%;\n  padding: 0.3rem 0.5rem;\n  font-size: 0.8rem;\n  font-weight: bold;\n';\n\nconst LabelText = styled.p"\n  margin-top: 8px;\n  font-size: ${props=>props.labelSize||"1rem"};\n  color: ${props=>props.labelColor||"#333"};\n  text-align: center;\n";\n\nconst onClick = ()=>{\n    console.log('badge clicked')\n};\n\nexport const BadgeComponent = ({ icon, label, badgeCount, iconSize, labelColor, labelSize,backgroundColor }) => {\n  return (\n    <BadgeContainer onClick={onClick}>\n      <IconCircle iconSize={iconSize} backgroundColor={backgroundColor}>\n        {icon}\n        {badgeCount > 0 && <BadgeNumber>{badgeCount}</BadgeNumber>}\n      </IconCircle>\n      <LabelText labelSize={labelSize} labelColor={labelColor}>{label}</LabelText>\n    </BadgeContainer>\n  );\n};\n\nBadgeComponent.propTypes = {\n  icon: PropTypes.node.isRequired,       \n  label: PropTypes.string.isRequired,    \n  badgeCount: PropTypes.number,          \n  iconSize: PropTypes.string,                   \n  labelColor: PropTypes.string,          \n  labelSize: PropTypes.string, \n  backgroundColor: PropTypes.string,     \n};\n\nBadgeComponent.defaultProps = {\n  badgeCount: 0,\n  iconSize: '60px',\n  labelColor: '#333',\n  labelSize: '1rem',\n  backgroundColor:'white'\n};\n`}}};const __namedExportsOrder=["Default","CustomBadge","NoBadge"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...Default.parameters?.docs?.source}}},CustomBadge.parameters={...CustomBadge.parameters,docs:{...CustomBadge.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...CustomBadge.parameters?.docs?.source}}},NoBadge.parameters={...NoBadge.parameters,docs:{...NoBadge.parameters?.docs,source:{originalSource:"args => <BadgeComponent {...args} />",...NoBadge.parameters?.docs?.source}}}},"./node_modules/react-icons/lib/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k5:()=>GenIcon});var react=__webpack_require__("./node_modules/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),_excluded=["attr","size","title"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var target={};for(var key in source)if(Object.prototype.hasOwnProperty.call(source,key)){if(excluded.indexOf(key)>=0)continue;target[key]=source[key]}return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Tree2Element(tree){return tree&&tree.map(((node,i)=>react.createElement(node.tag,_objectSpread({key:i},node.attr),Tree2Element(node.child))))}function GenIcon(data){return props=>react.createElement(IconBase,_extends({attr:_objectSpread({},data.attr)},props),Tree2Element(data.child))}function IconBase(props){var elem=conf=>{var className,{attr,size,title}=props,svgProps=_objectWithoutProperties(props,_excluded),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",_extends({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:_objectSpread(_objectSpread({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(conf=>elem(conf))):elem(DefaultContext)}}}]);
//# sourceMappingURL=stories-BadgeComponent-stories.a648feaf.iframe.bundle.js.map