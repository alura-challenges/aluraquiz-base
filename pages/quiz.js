import { useState, useEffect } from "react";

import db from "../db.json";
import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Widget from "../src/components/Widget";
import Input from "../src/components/Input";
import Button from "../src/components/Button";

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  );
}

function QuestionWidget(props) {
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
        <form
          onSubmit={(user) => {
            user.preventDefault();
            props.onSubmit();
          }}
        >
          {props.question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternativ__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <Input type="radio" id={alternativeId} name={questionId} />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">Confirmar</Button>
        </form>
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    //Simular uma busca de dados em uma API - fetch()
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
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
          />
        )}
        {screenState === "RESULTADO" && <div>Tela de resultado</div>}
      </QuizContainer>
    </QuizBackground>
  );
}
