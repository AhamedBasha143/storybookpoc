import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components for the badge
const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top:30px;
  background-color:aliceblue;
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #aaa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.iconSize || '30px'};
  color: #555;
  position: relative;
  margin-top:30px;
  background-color: ${(props) => props.backgroundColor || 'white'};;
  &:hover {
    border-color: #0056b3; 
    background-color: #f0f8ff; 
    color: #0056b3;
  }
`;

const BadgeNumber = styled.span`
  position: absolute;
  top: -17px;
  right: -20px;
  color: black;
  border-radius: 50%;
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
`;

const LabelText = styled.p`
  margin-top: 8px;
  font-size: ${(props) => props.labelSize || '1rem'};
  color: ${(props) => props.labelColor || '#333'};
  text-align: center;
`;

const onClick = ()=>{
    console.log('badge clicked')
};

export const BadgeComponent = ({ icon, label, badgeCount, iconSize, labelColor, labelSize,backgroundColor }) => {
  return (
    <BadgeContainer onClick={onClick}>
      <IconCircle iconSize={iconSize} backgroundColor={backgroundColor}>
        {icon}
        {badgeCount > 0 && <BadgeNumber>{badgeCount}</BadgeNumber>}
      </IconCircle>
      <LabelText labelSize={labelSize} labelColor={labelColor}>{label}</LabelText>
    </BadgeContainer>
  );
};

BadgeComponent.propTypes = {
  icon: PropTypes.node.isRequired,       
  label: PropTypes.string.isRequired,    
  badgeCount: PropTypes.number,          
  iconSize: PropTypes.string,                   
  labelColor: PropTypes.string,          
  labelSize: PropTypes.string, 
  backgroundColor: PropTypes.string,     
};

BadgeComponent.defaultProps = {
  badgeCount: 0,
  iconSize: '60px',
  labelColor: '#333',
  labelSize: '1rem',
  backgroundColor:'white'
};
