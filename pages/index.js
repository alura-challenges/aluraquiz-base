import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from '../src/components/Link';
import db from '../db.json';
import Widget from '../src/components/Widget';
<<<<<<< HEAD

=======
import Link from '../src/components/Link';
>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 450px;
  padding-top: 45px;
  margin: auto 10%;
  align-items: center;
  text-align: center;
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
        <title>
<<<<<<< HEAD
         
          {db.title}
          </title>
        
=======
          AluraQuiz -
          {db.title}
        </title>
>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget
<<<<<<< HEAD
        as={motion.section}
=======
          as={motion.section}
>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
        
        <h1> {db.Title}</h1>  
        
          </Widget.Header>

          <h1> {db.description}</h1>  

          <Widget.Content>
            
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Como posso te chamar?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos lá ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
<<<<<<< HEAD
         
=======

>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera! Vem ver!</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

<<<<<<< HEAD
=======
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
<<<<<<< HEAD
            
          </Widget.Content>
        </Widget>
        <Footer 
        as={motion.footer}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial="hidden"
        animate="show"
      />
=======
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
>>>>>>> a03b44936df60faea57fe006fef1654631e9bd65
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/romsishiyama" />
    </QuizBackground>
  );
}
