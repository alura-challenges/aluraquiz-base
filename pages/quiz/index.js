import React from 'react';
import db from '../../db.json';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import Widget from '../../src/components/Widget';
import QuizImage from '../../src/components/QuizImage';
import BackLinkArrow from '../../src/components/BackLinkArrow';
import AlternativesForm from '../../src/components/AlternativesForm';
import Button from '../../src/components/Button';
import Footer from '../../src/components/Footer';
import GitHubCorner from '../../src/components/GitHubCorner';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from '../../src/components/Link';

function LoadingWidget() {
    return (
        <Widget
            as={motion.section}
            transition={{ delay: 0.1, duration: 0.1 }}
            variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '40%' },
            }}
            initial="hidden"
            animate="show">
            <Widget.Header>
                Carregando dados {db.title}
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
        <Widget
            as={motion.section}
            transition={{ delay: 0.7, duration: 0.7 }}
            variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
        >
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
                <Widget.Topic as={Link} href="/">
                    Jogar Novamente
                </Widget.Topic>
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
        <Widget
            as={motion.section}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                show: { opacity: 1, y: '0' },
                hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
        >
            <Widget.Header>
                <BackLinkArrow href="/" /> {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
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

export default function QuizPage({database}) {
    if(!database){
        database = db;
    }

    const router = useRouter();
    const { name } = router.query;

    const [results, setresults] = React.useState([]);
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = database.questions.length;
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const question = database.questions[questionIndex];

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
        <QuizBackground backgroundImage={database.bg}>
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
                <Footer as={motion.footer}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    variants={{
                        show: { opacity: 1, y: '0' },
                        hidden: { opacity: 0, y: '100%' },
                    }}
                    initial="hidden"
                    animate="show" />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/ewerton-augusto" />
        </QuizBackground>
    );
}