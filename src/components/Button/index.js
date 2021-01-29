import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    padding: 10px 16px;
    width: 100%;
    height:38px;
    fontsize: 14px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    text-transform: uppercase;
    outline: 0;
    transition: 0.3s;
    cursor: pointer;
    color: #fff;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
