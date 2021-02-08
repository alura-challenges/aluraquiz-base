/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  padding: 2%;
  width: 100%;
  color: #ffffff;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::placeholder {
    color: #ffffff;
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.primary };
  }
`;

export default function Input({ placeholder, onChange, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.prototype = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
