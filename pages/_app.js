import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
    font-family: 'Sofadi One', cursive;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const { theme } = db

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sofadi+One&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="node_modules/spin.js/spin.css" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
