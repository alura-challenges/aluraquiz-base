import styled from 'styled-components'
import { useRouter } from 'next/router'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import Head from '../src/components/Head'
import GitHubCorner from '../src/components/GitHubCorner'

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
  const router = useRouter()
  const [name, setName] = React.useState("")

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form
              onSubmit={
                function (e) {
                  e.preventDefault();
                  console.log("Botão")
                  router.push(`/quiz/?name=${name}`)
                }
              }>
              <input
                onChange={function (e) { setName(e.target.value) }}
                placeholder="Digite seu nome" />
              <button disabled={name > 0}>
                {name} vamos Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/eps364" />
    </QuizBackground>
  );
}
