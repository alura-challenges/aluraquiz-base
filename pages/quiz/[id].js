/* eslint-disable react/prop-types */
/* eslint_disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
    <ThemeProvider
      theme={dbExterno.theme}
    >
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />

    </ThemeProvider>
    // {/* <pre>
    //   {JSON.stringify(dbExterno.questions, null, 4)}
    // </pre> */}

  );
}

export async function getServerSideProps(context) {
  // console.log('Infos que o Next nos dá:', context.query);
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
    .then((response) => {
      if (response) {
        return response.json();
      }
      throw new Error('Fetching data error');
    })
    .then((resToObject) => resToObject)
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      dbExterno,
    }, // will be passed to the page component as props
  };
}
