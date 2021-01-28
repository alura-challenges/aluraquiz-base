import { useCallback, useState } from 'react';
import { useRouter } from 'next/router'

import db from '../../db.json';
import Widget from '../../src/components/Widget'
import QuizLogo from '../../src/components/QuizLogo'
import QuizBackground from '../../src/components/QuizBackground'
import Footer from '../../src/components/Footer'
import GitHubCorner from '../../src/components/GitHubCorner'
import QuizContainer from '../../src/components/QuizContainer'


export default function Quiz() {
  const router = useRouter();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  },[])

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              {db.title} 
              {` - Jogador: `}
              <span>{router.query.userName}</span>
              </h1>
          </Widget.Header>

          {db.questions.map( (question, index) => (
            <Widget.Content>
              <h2>{`${index+1}) ${question.title}`}</h2>

              <p>{question.description}</p>
              
              <form onSubmit={handleSubmit}>
                {question.alternatives.map ( alternative => (
                  <Widget.Content.Button type='submit' >
                    {alternative}
                  </Widget.Content.Button>
                ))}
              </form>
            </Widget.Content>
          ))}

        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielpdev" />
    </QuizBackground>
  );
}