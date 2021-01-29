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

export default function Home() {
    const router = useRouter()
    const [name, setName] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/quiz?name=${name}`)
    }

    const getInputValues = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>Alura Quiz - Tibia</title>
            </Head>
            <QuizContainer>
                <QuizLogo src={db.logo} />
                <Widget>
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
                        <p>Quizes da Galera</p>
                        <ul>
                            {db.external.map((linkExterno) => {
                                const [
                                    projectName,
                                    githubUser,
                                ] = linkExterno
                                    .replace(/\//g, '')
                                    .replace('https:', '')
                                    .replace('.vercel.app', '')
                                    .split('.')
                                return (
                                    <li>
                                        <Widget.Topic href={linkExterno}>
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
            <GitHubCorner projectUrl="https://github.com/bentoco" />
        </QuizBackground>
    )
}
