import db from '../db.json'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import styled from 'styled-components'

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

export default function Quiz() {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <title>Tibia Quiz</title>
            <QuizContainer>
                <QuizLogo />
                <Widget>
                    <Widget.Header>
                        <h1>Pergunta 1 de 5</h1>
                    </Widget.Header>
                    <Widget.Content></Widget.Content>
                </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}
