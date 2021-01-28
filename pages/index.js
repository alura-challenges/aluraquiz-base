<<<<<<< HEAD
import Head from 'next/head'
import { useRouter } from 'next/router'

import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import Input from '../src/components/Input'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'
=======
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
>>>>>>> e72dad3391c47cc8604eba44f6dbe99d56a1d2cd

export default function Home() {
    const router = useRouter()
    const [name, setName] = React.useState('')

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/quiz?name=${name}`)
    }

    const getInputValues = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
=======
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
>>>>>>> e72dad3391c47cc8604eba44f6dbe99d56a1d2cd

    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>Alura Quiz - Tibia</title>
            </Head>
            <QuizContainer>
                <QuizLogo src="https://i.imgur.com/I7XsveX.png" />
                <Widget>
                    <Widget.Header></Widget.Header>
                    <Widget.Content>
                        <p>{db.description}</p>
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="nomeDoPersonagem"
                                onChange={getInputValues}
                                type="text"
                                placeholder="type your player name"
                                value={name}
                                required
                            ></Input>
                            <div>
                                <Button
                                    type="submit"
                                    disabled={name.length === 0}
                                >
                                    <strong>JOGAR AGORA</strong>
                                </Button>
                            </div>
                        </form>
                    </Widget.Content>
                </Widget>

                <Widget>
                    <Widget.Content>
                        <h1>Quizes da Galera</h1>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/bentoco" />
        </QuizBackground>
    )
}
