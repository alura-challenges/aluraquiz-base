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
        font-family: 'Martel', cursive;
    }
    input {
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
    }
    button {
        font-family: 'Martel', cursive;
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

export default Widget
