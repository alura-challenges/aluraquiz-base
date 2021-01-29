import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};


  span{
      font-size: 14px;
    }
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  h2{
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      padding: 3px;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
   
  }
`;

Widget.Content.Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin-top: 15px;
  border: 0;
  opacity: ${( props ) => props.disabled ? 0.5 : 1 };
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};

  font-weight: bold;

  &:hover{
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  cursor: pointer;
`;

Widget.Topic = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  margin-top: 5px;
  
  opacity: ${( props ) => props.disabled ? 0.5 : 1 };
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${(props ) => props.selected ? props.theme.colors.primaryHover : props.theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover{
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  input{
    display: none;
  }

  cursor: pointer;
`;

export default Widget;
