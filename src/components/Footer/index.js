import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Romênia Ishiyama 
        {' '}
        
        {' '}
        <a href="https://www.alura.com.br/">
          <span> Imersão React</span>
        </a>
      </p>
      <a href="https://twitter.com/Romeniaishiyama">
        <img src="https://img.icons8.com/carbon-copy/100/000000/twitter--v1.png" alt="Logo Twitter" />
      </a>
      <a href="https://www.instagram.com/roms_flaneur/?hl=pt-br">
        <img src="https://img.icons8.com/carbon-copy/100/000000/instagram-new.png" alt="Logo Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/romeniaishiyama//">
        <img src="https://img.icons8.com/carbon-copy/100/000000/linkedin.png" alt="Logo Linkedin" />
      </a>
    </FooterWrapper>
  );
}
