import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useRouter } from 'next/router';

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
            <form onSubmit={
              (e) => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }
            }>
              <label>Digite seu nome para jogar:
                <Input 
                placeholder={'Digite o seu nome para jogar'} 
                onChange={(e) => setName(e.target.value)}
                name="nomeDoUsuario"
                value={name}
                />
              </label>
              <Button type="submit" disabled={name.length === 0}> Jogar {name} </Button>
            </form>
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