import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import TibiaLogo from '../src/components/TibiaLogo'

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`

export default function Home() {
    const router = useRouter()
    const [playerName, setName] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/quiz?name=${playerName}`)
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
                <TibiaLogo src="https://i.imgur.com/I7XsveX.png" />
                <Widget>
                    <Widget.Header></Widget.Header>
                    <Widget.Content>
                        <p>{db.description}</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input
                                    onChange={getInputValues}
                                    type="text"
                                    placeholder="Player Name"
                                    required
                                ></input>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={playerName.length === 0}
                                >
                                    JOGAR AGORA
                                </button>
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
