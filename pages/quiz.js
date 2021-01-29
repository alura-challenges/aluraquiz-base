import React from 'react';
import db from '../db.json';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import QuizImage from '../src/components/QuizImage';
import AlternativesForm from '../src/components/AlternativesForm';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { useRouter } from 'next/router';

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando dados - {db.title}
            </Widget.Header>
            <QuizImage src={'/loading.gif'} />
            <Widget.Content>
                <p>Aguarde enquanto processamos as perguntas.</p>
            </Widget.Content>
        </Widget>
    );
}

function ResultWidget({ results, nome }) {
    return (
        <Widget>
            <Widget.Header>
                <h1>{nome}</h1>
                <p>Final de jogo. Parabéns pela participação!</p>
            </Widget.Header>
            <QuizImage src={'/results.gif'} />
            <Widget.Content>
                <p>
                    {`Parabéns, você acertou ${results.filter(currentResultTrue => currentResultTrue).length} perguntas!!!`}
                </p>
                <ul>
                    {results.map((result, i) => <li key={`result__${result}`}> {`#Pergunta ${i + 1}: ${result === true ? 'Acertou' : 'Errou'}`} </li>)}
                </ul>
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({ question, questionIndex, totalQuestions, name, onSubmit, addResult }) {
    const questionId = `question_${questionIndex}`;
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const hasAlternativeSelected = selectedAlternative !== undefined;
    const isCorrect = selectedAlternative === question.answer;

    return (
        <Widget>
            <Widget.Header>
                <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
            </Widget.Header>
            <QuizImage src={question.image} />
            <Widget.Content>
                <AlternativesForm onSubmit={(e) => {
                    e.preventDefault();
                    setIsQuestionSubmited(true);
                    setTimeout(() => {
                        addResult(isCorrect);
                        onSubmit();
                        setIsQuestionSubmited(false);
                        setSelectedAlternative(undefined);
                    }, 3 * 1000)
                }
                }>
                    <h1>[Jogador: {name}]</h1>
                    <h2>{question.title}</h2>
                    <p>{question.description}</p>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative_${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;

                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                                key={alternativeId}
                                data-selected={isSelected}
                                data-status={alternativeStatus && isQuestionSubmited}
                            >
                                <input
                                    style={{ display: 'none' }}
                                    id={alternativeId}
                                    type="radio"
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(alternativeIndex)}
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}
                    <Button type="submit" disabled={!hasAlternativeSelected}> Confirmar </Button>
                </AlternativesForm>
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

    const [results, setresults] = React.useState([]);
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const question = db.questions[questionIndex];

    const addResult = (result) => {
        setresults([...results, result]);
    }

    React.useEffect(() => {
        setTimeout(() => setScreenState(screenStates.QUIZ), 1 * 1000);
    }, []);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        nextQuestion < totalQuestions ? setQuestionIndex(nextQuestion) : setScreenState(screenStates.RESULT);
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
                        addResult={addResult}
                    />
                )}
                {screenState === screenStates.LOADING && <LoadingWidget />}
                {screenState === screenStates.RESULT && <ResultWidget results={results} name={name} />}
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
        </QuizBackground>
    );
}