import styled from 'styled-components';

const Loader = styled.div`
    transition: .3s;
    font-size: 184px;
    font-family: 'Lobster', cursive;
    text-align: center;
    width: 100%;
    height: 245px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    -webkit-animation:spin 1s linear infinite;
    -moz-animation:spin 1s linear infinite;
    animation:spin 1s linear infinite;
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`;

export default Loader;
