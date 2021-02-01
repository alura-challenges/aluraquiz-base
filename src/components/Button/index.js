/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  margin: 5%;
  padding: 2%;
  width: 100%;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.success};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition-duration: 0.4s;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 5px 2px #222255;
  }

  &:disabled {
    color: #403C37;
    background-color: ${({ theme }) => theme.colors.secondary};
} 
`;

Button.propTypes = {
  type:PropTypes.oneOf(['submit', 'type', 'button']),
  childre: PropTypes.node.isRequired,
};

export default Button;
