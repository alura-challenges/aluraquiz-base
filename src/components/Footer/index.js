import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000070;
  padding: 20px;
  text-align: center;
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
      <p>
        Criado por {' '}
        <a href="https://github.com/stelima" target="_blank" rel="noreferrer">
          <span>Stefanie Lima</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
