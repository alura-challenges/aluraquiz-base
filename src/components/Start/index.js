import styled from 'styled-components';

// src/components/Start/index.js
const Start = styled.form`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input {
    margin: 5%;
    padding: 2%;
    width: 100%;
    color: white;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  input:focus {
    background-color: ${({ theme }) => theme.colors.success};
  }
  button {
    width: 100%;
    margin: 5%;
    padding: 2%;
    width: 100%;
    color: #ffffff;
    background-color: ${({ theme }) => theme.colors.success};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  button:disabled {
    color: #403C37;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Start;