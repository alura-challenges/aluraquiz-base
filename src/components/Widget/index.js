import styled from 'styled-components';

const Widget = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: #FFF;
  border-radius: ${({theme}) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3{
    font-size: 1rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

Widget.Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
  padding: 24px 32px;
  & > *:first-child{
    margin-top: 0;
  }
  & > *:last-child{
    margin-bottom: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}99`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .8;
  }
`;

export default Widget;