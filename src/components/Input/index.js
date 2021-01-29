import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const InputBase = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    /* margin-bottom: 25px; */
    text-align: center;
    font-family: 'Sofadi One', cursive;
`

export default function Input({ onChange, placeholder, ...props }) {
    return (
        <div>
            <InputBase
                placeholder={placeholder}
                onChange={onChange}
                {...props}
            />
        </div>
    )
}

Input.defaultProps = {
    value: '',
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
}
