import { useState } from 'react'
import { useRouter } from 'next/router'

import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizContainer from '../src/components/QuizContainer'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input'
import Button from '../src/components/Button'

export default function Home() {
  const [name, setName] = useState('')
  const router = useRouter()

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
            <form onSubmit={(user) => {
                user.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
            >
              <Input
                name="nomeDoJogador"
                type="text"
                onChange={(user) => setName(user.target.value)}
                placeholder="Digite seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>Jogar</Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((link, linkIndex) => {
                const [projectName, githubUser] = link.replace(/\//g, "").replace("https:", "").replace(".vercel.app", "").split(".")
                return (
                  <li key={linkIndex}>
                    <Widget.Topic href={`/quiz/${projectName}___${githubUser}` /*link*/}>
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marcosadriano05" />
    </QuizBackground>
  );
}
