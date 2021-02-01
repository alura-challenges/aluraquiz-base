import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizPage from '../quiz';

export default function QuizDaGaleraPage({ dbExtern }) {
    console.log(dbExtern);
    return (
        <ThemeProvider theme={dbExtern.theme}>
            <QuizPage database={dbExtern} />
        </ThemeProvider>

    );
}

export async function getServerSideProps(context) {
    const [projetctName, githubUser] = context.query.id.split('___');

    const dbExtern = await fetch(`https://${projetctName}.${githubUser}.vercel.app/api/db`)
        .then((serverResponse) => {
            if (serverResponse.ok) {
                return serverResponse.json();
            }
            throw new Error('Falha ao acessar a API para pegar os dados do Quiz.');
        })
        .then((convertedResponseInObject) => convertedResponseInObject)
        .catch((err) => { throw new Error(err) });

    return ({
        props: {
            dbExtern,
        },
    });
}