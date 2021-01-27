import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizForm from '../src/components/QuizForm';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { Router, useRouter } from 'next/router';

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
            <QuizForm onSubmit={
              function(e){
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }
            }>
              <QuizForm.Label>Digite seu nome para jogar:
                <QuizForm.Input placeholder="Digite o seu nome para jogar" onChange={function(e){
                  setName(e.target.value);
                }} />
              </QuizForm.Label>
              <QuizForm.Button type="submit" disabled={name.length === 0}> Jogar {name} </QuizForm.Button>
            </QuizForm>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>
            <p>Em breve</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
    </QuizBackground>
  );
}