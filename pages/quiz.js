import React, { useState, useEffect } from 'react';
// database
import db from '../db.json';
// styled components
import Footer from '../src/components/Footer';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import QuizBackground from '../src/components/QuizBackground';
import Loader from '../src/components/Loader';
const LoadingWidget = () => (
  <Widget>
    <Widget.Header>
      Carregando...
    </Widget.Header>

    <Widget.Content>
      {/* [Desafio do Loading] */}
      <Loader>?</Loader>
    </Widget.Content>
  </Widget>
);

const QuestionWidget = ({ question, questionIndex, totalQuestions }) => {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {' '}
          {`Enigma ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>

        <p>
          {question.description}
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {question.alternatives.map((alt, altIndex) => {
            const altId = `alternative__${altIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={altId}
              >
                <input
                      // style={{ display: `none` }}
                  id={altId}
                  name={questionId}
                  type="radio"
                />
                {alt}
              </Widget.Topic>
            );
          })}

          {/* <pre>
                {JSON.stringify(question, null, 4)}
              </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = () => {
  const totalQuestions = db.questions.length;
  const [currentQuaestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuaestion;
  const question = db.questions[questionIndex];

  const [screenState, setScreenState] = useState(screenStates.LOADING);

  // [Effects do React]
  // componente nasce       === didMount
  // componente atualizado  === willUpdate
  // componente morre       === willUnmount

  useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
    // didMount
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.RESULT && (
        <div>
          `Você acertou $
          X
          {' '}
          questões, parabéns!
        </div>
        )}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
};

export default QuizPage;
