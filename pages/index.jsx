import React, { useCallback, useState } from 'react';
import Router from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const [userName, setUserName] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    Router.push(`/quiz?userName=${userName}`);
  }, [userName]);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Qual é o seu nome ?</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Digite seu nome." value={userName} onChange={(event) => setUserName(event.target.value)} />
              <Widget.Content.Button type="submit" disabled={!userName}>
                {`Jogar como ${userName || '(seu nome)'}`}
              </Widget.Content.Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielpdev" />
    </QuizBackground>
  );
}
