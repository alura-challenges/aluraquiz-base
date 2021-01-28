import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizImage from '../src/components/QuizImage';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useRouter } from 'next/router';

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>
            <Widget.Content>
                [Desafio do loading...]
            </Widget.Content>
        </Widget>
    );
}

function ResultWidget() {
    return (
        <Widget>
            <Widget.Header>
                Final de jogo!
            </Widget.Header>
            <Widget.Content>
                Parabéns, você acertou X perguntas!!!
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({ question, questionIndex, totalQuestions, name, onSubmit }) {
    const questionId = `question_${questionIndex}`;
    return (
        <Widget>
            <Widget.Header>
                <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
            </Widget.Header>
            <QuizImage src={question.image} />
            <Widget.Content>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }
                }>
                    <h1>[Jogador: {name}]</h1>
                    <h2>{question.title}</h2>
                    <p>{question.description}</p>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative_${alternativeIndex}`;
                        return (
                            <Widget.Topic as="label" htmlFor={alternativeId}>
                                <input id={alternativeId} type="radio" name={questionId} />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit"> Confirmar </Button>
                </form>
            </Widget.Content>
        </Widget>
    );
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT'
};

export default function QuizPage() {
    const router = useRouter();
    const { name } = router.query;

    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const question = db.questions[questionIndex];

    React.useEffect(() => {
        setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 1000);
    }, []);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        nextQuestion < totalQuestions?setQuestionIndex(nextQuestion):setScreenState(screenStates.RESULT);
    }

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                {screenState === screenStates.QUIZ && (
                    <QuestionWidget
                        name={name}
                        question={question}
                        questionIndex={questionIndex}
                        totalQuestions={totalQuestions}
                        onSubmit={handleSubmitQuiz}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <ResultWidget />}
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
        </QuizBackground>
    );
}