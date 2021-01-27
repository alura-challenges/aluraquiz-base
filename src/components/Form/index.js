import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    transition: all ease 1s;

    input,
    button {
        margin: 12.5px auto;
        padding: 7px 15px;
        width: 100%;
        height:38px;
        border: 2px solid ${({ theme }) => theme.enigmaColors.secondary};
        border-radius: 4px;
        fontsize: 14px;
        background-color: ${({theme}) => theme.enigmaColors.mainBg};
    }

    input {
        letter-spacing: 0.15px;
        line-height: 24px;
        color: ${({theme}) => theme.enigmaColors.secondary};

        &:focus {
            outline: none;
        }

        ::-webkit-input-placeholder {
            color: ${({theme}) => theme.enigmaColors.secondary};
        }
        ::-moz-placeholde{
            color: ${({theme}) => theme.enigmaColors.secondary};
        }
        :-ms-input-placeholder {
            color: ${({theme}) => theme.enigmaColors.secondary};
        }
    }

    input[type="radio"]:checked+label {
            background-color: ${({theme}) => theme.enigmaColors.secondary};
            color: ${({theme}) => theme.enigmaColors.mainBg};
            font-weight: 700;
            outline: none;
        }
    }

    button {
        text-transform: uppercase;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 1.25px;
        color: #fff;
        cursor: pointer;
        
        &:hover {
            background-color: ${({theme}) => theme.enigmaColors.primary};
        }

        &:active {
            background-color: ${({theme}) => theme.enigmaColors.secondary};
            outline: none;
        }
    }

    label {
        font-weight: 300;
        cursor: pointer;
        padding: 7px 15px;
        margin-bottom: 5px;
        background-color: ${({theme}) => theme.enigmaColors.primary};
        border: 1px solid ${({ theme }) => theme.enigmaColors.secondary};
        border-radius: 4px;

        &:hover {
            border: 1px solid ${({ theme }) => theme.enigmaColors.secondary};
            background-color: ${({theme}) => theme.enigmaColors.secondary};
        }
    }
`;

export default Form;