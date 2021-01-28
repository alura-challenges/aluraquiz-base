import styled from 'styled-components'

const Widget = styled.div`
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: 4px;
    overflow: hidden;

    h1,
    h2,
    h3 {
        font-size: 28px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    p {
        font-size: 25px;
        font-weight: 400;
        line-height: 1;
        text-align: center;
    }
    /* input {
        color: ${({ theme }) => theme.colors.contrastText};
        width: 277px;
        height: 38px;
        margin-top: 15px;
        margin-bottom: 15px;
        line-height: 1px;
        border-style: none;
        background-color: ${({ theme }) => theme.colors.mainBg};
        border-radius: 3.5px;
        text-align: center;
        font-size: 20px;
    } */
    button {
        letter-spacing: 3px;
        font-size: 20px;
        width: 277px;
        height: 38px;
        margin-top: 15px;
        margin-bottom: 15px;
        line-height: 1px;
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.secondary};
        border-radius: 3.5px;
        color: ${({ theme }) => theme.colors.contrastText};
    }
`

Widget.Header = styled.header`
    display: flex;
    justify-content: flex;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    * {
        margin: 0;
    }
`

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
`
Widget.Topic = styled.a`
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => `${theme.colors.primary}40`};
    padding: 10px 15px;
    margin-bottom: 8px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: 0.3s;
    display: block;

    &:hover,
    &:focus {
        opacity: 0.5;
    }
`

export default Widget
