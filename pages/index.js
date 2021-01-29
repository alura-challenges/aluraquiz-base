import React, { useState } from 'react';
import { useRouter } from 'next/router';
// database
import db from '../db.json';
// styled components
import Input from '../src/components/Input';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';

export default function Home() {
  const [name, setName] = useState('');
  console.log('name: ', name, 'setName:', setName);

  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/quiz?name=${name}`);
  };

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

            <form onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submited from home page!');
              handleSubmit();
            }}
            >
              <Input
                type="text"
                placeholder="Quem vai jogar?"
                onChange={(e) => setName(e.target.value)}
              />

              <Button type="submit" disabled={!name.length}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h2>Quizes da Galera:</h2>
          </Widget.Header>

          <Widget.Content>
            <Widget.Topic href="https://aluraquiz-wow.yuriramosc.vercel.app/"> WoW Quiz - @YuriRamosC</Widget.Topic>
            <Widget.Topic href="https://pinkfloyd-quiz.denismend.vercel.app/"> Pink Floyd Quiz - @denismend</Widget.Topic>
            <Widget.Topic href="https://quiz.rafalmeida73.vercel.app/"> GoT Quiz - @rafalmeida73</Widget.Topic>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
}
