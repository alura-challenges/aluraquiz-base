import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
    background-color: #00000099;
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
        transition: 0.3s;
        &:hover,
        &:focus {
            opacity: 0.5;
        }
        span {
            text-decoration: underline;
        }
    }
`

export default function Footer(props) {
<<<<<<< HEAD
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FooterWrapper {...props}>
            <a href="https://www.alura.com.br/">
                <img
                    src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
                    alt="Logo Alura"
                />
            </a>
            <p>
                Orgulhosamente criado durante a{' '}
                <a href="https://www.alura.com.br/">
                    <span>Imersão React da Alura</span>
                </a>
            </p>
        </FooterWrapper>
    )
=======
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
>>>>>>> e72dad3391c47cc8604eba44f6dbe99d56a1d2cd
}
