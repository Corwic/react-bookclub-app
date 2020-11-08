import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.buttonColor || 'transperent'};
  border: 4px solid white;
  border-radius: 4px;
  color: black;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 8px;
  outline: none;
  padding: 16px;
`;

export const Button = ({ children, buttonColor, ...props}) => {
  return (
    <StyledButton buttonColor={buttonColor} {...props}>{children}</StyledButton>
  );
}

export const DangerButton = ({ children, ...props}) => {
  return <StyledButton buttonColor="red" {...props}>{children}</StyledButton>;
}

export const SuccessButton = ({ children, ...props}) => {
  return <StyledButton buttonColor="green" {...props}>{children}</StyledButton>;
}
