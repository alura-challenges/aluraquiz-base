import { useState, useEffect } from "react";

import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";
import AlternativesForm from "../src/components/AlternativesForm";
import Button from "../src/components/Button";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function ResultWidget(props) {
  return (
    <Widget>
      <Widget.Header>Tela de resultado</Widget.Header>

      <Widget.Content>
        <p>Você acertou {props.results.filter(x => x).length} questões</p>
        <ul>
          {props.results.map((result, resultIndex) => {
            const resultId = `result__${resultIndex}`
            const resp = result ? 'Acertou' : 'Errou'
            return <li key={resultId}>{`#${resultIndex+1} resposta: ${resp}`}</li>
          })}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget(props) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false)
  const isCorrect = selectedAlternative === props.question.answer
  const hasQuestionSubmited = selectedAlternative !== undefined
  const questionId = `question__${props.questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${props.questionIndex + 1} de ${props.totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Ilustração"
        style={{
          width: "100%",
          height: "150",
          objectFit: "cover",
        }}
        src={props.question.image}
      />
      <Widget.Content>
        <h2>{props.question.title}</h2>
        <p>{props.question.description}</p>
        <AlternativesForm
          onSubmit={(user) => {
            user.preventDefault();
            setIsQuestionSubmited(true)
            setTimeout(() => {
              props.onSubmit()
              props.addResult(isCorrect)
              setSelectedAlternative(undefined)
              setIsQuestionSubmited(false)
            }, 3 * 1000)
          }}
        >
          {props.question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternativ__${alternativeIndex}`;
            return (
              <Widget.Topic
                key={alternativeId}
                as="label" 
                htmlFor={alternativeId}
                data-selected={false}
                data-status="SUCCESS"
              >
                <input
                  style={{display: 'none'}}
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasQuestionSubmited}>Confirmar</Button>
        </AlternativesForm>
        {isCorrect && isQuestionSubmited && <p>Você acertou!</p>}
        {!isCorrect && isQuestionSubmited && <p>Você errou!</p>}
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: "QUIZ",
  LOADING: "LOADING",
  RESULT: "RESULT",
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [results, setResults] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result
    ])
  }

  useEffect(() => {
    // Simular uma busca de dados em uma API - fetch()
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === "LOADING" && <LoadingWidget />}
        {screenState === "QUIZ" && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === "RESULT" && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
