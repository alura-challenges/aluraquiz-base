/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Widget from '../../components/Widget';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import QuizLogo from '../../components/QuizLogo';
import GitHubCorner from '../../components/GitHubCorner';
import QuizContainer from '../../components/QuizContainer';
import QuizBackground from '../../components/QuizBackground';
import AlternativForm from '../../components/AlternativForm';
import BackLinkArrow from '../../components/BackLinkArrow';

const ResultWidget = ({ results }) => (

  <Widget>
    <Widget.Header>
      <BackLinkArrow href="/" />
      O SEU RESULTADO
    </Widget.Header>

    <Widget.Content>
      {/* [Desafio da Tela de Resultado] */}
      {results.filter((x) => x).length <= results.filter((x) => x).length / 2
        && (
        <img
          alt="bad-game"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src="https://longreadsblog.files.wordpress.com/2015/03/facepalm.gif"
        />
        )}
      {results.filter((x) => x).length > results.filter((x) => x).length / 2
        && (
        <img
          alt="good-game"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src="https://i.pinimg.com/originals/f0/08/15/f00815c2e7b2e39cdf28ac0b2e1d516b.gif"
        />
        )}
      <p>
        Você acertou
        {' '}
        {results.filter((x) => x).length}
        {' '}
        perguntas de
        {' '}
        {results.length}
        .
      </p>
      <p>
        No total de
        {' '}
        {results.reduce((actualSum, actualResult) => {
          const isCorrect = actualResult === true;
          if (isCorrect) {
            return actualSum + 50;
          }
          return actualSum;
        }, 0)}
        {' '}
        pontos.
      </p>
    </Widget.Content>
  </Widget>
);

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

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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

        <AlternativForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(null);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alt, altIndex) => {
            const altId = `alternative__${altIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === altIndex;

            return (
              <Widget.Topic
                as="label"
                key={altId}
                htmlFor={altId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={altId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(altIndex)}
                  type="radio"
                />
                {alt}
              </Widget.Topic>
            );
          })}

          {/* <pre>
                {JSON.stringify(question, null, 4)}
              </pre> */}

          <Button
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
        </AlternativForm>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const QuizPage = ({ externalQuestions, externalBg }) => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuaestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuaestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

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

  const addResult = (result) => {
    setResults([
      ...results,
      result,
    ]);
  };

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
};

export default QuizPage;
