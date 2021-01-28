import React from 'react'
import db from '../db.json'

import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import Button from '../src/components/Button'
import QuizContainer from '../src/components/QuizContainer'

const LoadingWidget = () => {
    return (
        <Widget>
            <Widget.Header>Carregando...</Widget.Header>
            <Widget.Content>DESAFIO DO LOADING</Widget.Content>
        </Widget>
    )
}
const QuestionWidget = ({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
}) => {
    const questionId = `question__${questionIndex}`
    return (
        <Widget>
            <Widget.Header>
                <h3
                    style={{
                        fontFamily: 'martel, sans-serif',
                    }}
                >
                    {`Pergunta ${questionIndex + 1}`} de {` ${totalQuestions} `}
                </h3>
            </Widget.Header>
            <img
                alt="Descrição"
                style={{
                    width: '40%',
                    height: '40%',
                    objectFit: 'cover',
                }}
                src={question.image}
            ></img>
            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        onSubmit()
                    }}
                >
                    {question.alternatives.map(
                        (alternative, alternativeIndex) => {
                            const alternativeId = `alternative__${alternativeIndex}`

                            return (
                                <Widget.Topic
                                    as="label"
                                    htmlFor={alternativeId}
                                >
                                    <input
                                        id={alternativeId}
                                        name={questionId}
                                        type="radio"
                                    />
                                    {alternative}
                                </Widget.Topic>
                            )
                        }
                    )}

                    <Button type="submit">Confirmar</Button>
                </form>
            </Widget.Content>
        </Widget>
    )
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING)
    const totalQuestions = db.questions.length
    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const questionIndex = currentQuestion
    const question = db.questions[questionIndex]

    React.useEffect(() => {
        //fetch() axios() ...
        setTimeout(() => {
            setScreenState(screenStates.QUIZ)
        }, 1 * 1000)
    }, [])

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion)
        } else {
            setScreenState(screenStates.RESULT)
        }
    }
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo src="https://i.imgur.com/I7XsveX.png" />

                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && (
                    <div>Você acertou x questões, congrats</div>
                )}
            </QuizContainer>
        </QuizBackground>
    )
}
