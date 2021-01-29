import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
    color: #fff;
    font-weight: 300;

    ::-webkit-input-placeholder {
            color: ${({ theme }) => theme.secondary};
        }
    ::-moz-placeholde{
        color: ${({ theme }) => theme.secondary};
    }
    :-ms-input-placeholder {
        color: ${({ theme }) => theme.secondary};
    }
`;

const Input = ({ onChange, placeholder, ...props }) => (
  <div>
    <InputBase
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
