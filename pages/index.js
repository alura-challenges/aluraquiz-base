import React, { useState } from 'react';
import { useRouter } from 'next/router';
// database
import db from '../db.json';
// components
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import Form from '../src/components/Form';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export default function Home() {
  const [name, setName] = useState('');
  console.log('name: ', name, 'setName:', setName);
  
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg.enigma}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title.enigma}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description.enigma}</p>

            <Form onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submited from home page!');
              handleSubmit();
            }}>
              <input
                type="text"
                placeholder="Quem vai jogar?"
                onChange={(e) => {setName(e.target.value)}}
              />

              <button
                type="submit"
                // validating button
                disabled={name.length === 0}
              >
                Jogar
              </button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
}
