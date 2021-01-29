/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import fs from 'fs';
import NextImage from 'next/image';
import styled from 'styled-components';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

function Image({ src, indice }) {
  const key = 'fe6311';
  const [width, height] = [852, 480];
  const thumbnail = `
https://api.screenshotmachine.com?key=${key}&url=${src}&dimension=${width}x${height}
  `;

  return (
    <a href={src} style={{ display: 'inline-block', fontSize: '0' }}>
      <NextImage
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        width={width}
        height={height}
        unoptimized
        src={thumbnail}
      />
    </a>
  );
}

export default function ContributorsPage({ contributors }) {
  return (
    <QuizBackground backgroundImage="https://www.alura.com.br/assets/img/imersoes/react-2/fundo-do-mar-imersao-react-2-01.1609262503.svg">
      <QuizContainer style={{ margin: 'auto', padding: '5%', maxWidth: '1400px' }}>
        <QuizLogo />
        <Widget style={{ maxWidth: '350px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Widget.Header style={{ justifyContent: 'center' }}>
            <h1 style={{ fontSize: '25px' }}>Galeria de Projetos</h1>
          </Widget.Header>
          <Widget.Content>
            <p>
              Estamos muito felizes de contar com a sua participação, confira
              todos os outros projetos criados durante essa imersão!
            </p>
          </Widget.Content>
        </Widget>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: '1em',
          }}
        >
          {
            contributors.map(({ user, projectUrl }, indice) => (
              <Widget style={{ maxWidth: '400px' }} key={indice}>
                <Widget.Header style={{ alignItems: 'center' }}>
                  <img width="25" height="25" src={`https://github.com/${user}.png`} style={{ marginRight: '15px', borderRadius: '100%' }} />
                  <h2>
                    <a href={`https://github.com/${user}`} style={{ color: 'inherit' }}>
                      @
                      {user}
                    </a>
                  </h2>
                </Widget.Header>
                <Widget.Content style={{ padding: 0 }}>
                  <Image indice={indice} src={projectUrl} />
                </Widget.Content>
              </Widget>
            ))
          }
        </div>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}

export async function getStaticProps() {
  const contributors = fs.readdirSync('./contributors').map((fileName) => {
    const [user, projectUrl] = fs
      .readFileSync(`./contributors/${fileName}`, { encoding: 'utf-8' })
      .split('\n');

    return {
      user,
      projectUrl,
    };
  });

  return {
    props: {
      contributors,
    },
  };
}
