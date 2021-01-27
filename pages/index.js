import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import { useRouter } from 'next/router';

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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

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
        <form onSubmit={function (infosDoEvento) {
          infosDoEvento.preventDefault();
          router.push(`/quiz?name=${name}`);
          console.log('Fazendo uma submissão por meio do react');
        }}
        >
          <input
            onChange={function (infosDoEvento) {
              console.log(infosDoEvento.target.value);
              // State
              // name = infosDoEvento.target.value;
              setName(infosDoEvento.target.value);
            }}
            placeholder="Diz ai seu nome"
          />
          <button type="submit" disabled={name.length === 0}>
            Jogar
          </button>
        </form>

          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes Matemáticos</h1>

            <p>Você sabe o motivo de o MMC ter subido a escada?</p>
            <p>...</p>
            <p>Para ver o MDC :P</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
