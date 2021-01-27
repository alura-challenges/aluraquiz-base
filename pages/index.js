import styled from 'styled-components';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import GitHubConer from '../src/components/GitHubConer';
import Footer from '../src/components/Footer';
import db from '../db.json';

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <Widget>
          <Widget.Header>
            <h1>Marvel Studios</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Teste os seus conhecimentos sobre o universo Marvel e divirta-se criando o seu AluraQuiz!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubConer projectUrl="https://github.com/kevinpagliuca"/>
    </QuizBackground>
  )
}
