import { useState, useEffect } from 'react';
import db from '../../db.json';
import QuizLogo from '../../src/components/QuizLogo'
import QuizBackground from '../../src/components/QuizBackground'
import Footer from '../../src/components/Footer'
import GitHubCorner from '../../src/components/GitHubCorner'
import QuizContainer from '../../src/components/QuizContainer'

import QuestionWidget from '../../src/components/QuestionWidget'
import LoadingWidget from '../../src/components/LoadingWidget'
import ResultWidget from '../../src/components/ResultWidget'

import plant from '../../src/effects/plant.mp3';

export default function Quiz() {
  const stateScreen = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT'
  }

  const [ screenState, setScreenState ] = useState(stateScreen.LOADING);
  
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const questionTotal = db.questions.length;
  const question = db.questions[questionIndex];
  const [ audio, setAudio ] = useState(new Audio(plant));

  useEffect(() => {
    setTimeout(() => {
      setScreenState(stateScreen.QUIZ)
    }, 1 * 1000);
    
    if(questionIndex === (questionTotal - 1) ){
      setScreenState(stateScreen.RESULT)
    };

    if(audio){
      audio.src = plant;
      audio.volume = 0.1;
      audio.play();
    }

  }, [questionIndex])

  function stateScreenComponent(data){
    switch(data){
      case 'LOADING': {
        return(
          <LoadingWidget />
        )
      }
      case 'QUIZ': {
        function handleSubmit(e){
          e.preventDefault();
          setQuestionIndex(questionIndex + 1)
          // setScreenState(stateScreen.LOADING)
        }
        return(
          <QuestionWidget 
            question={question} 
            questionIndex={questionIndex} 
            questionTotal={questionTotal}
            handleSubmit={handleSubmit}
          />
        )
      }
      case 'RESULT': {
        return(
          <ResultWidget />
        )
      }
      default: {
        return (
          <h2>Erro no carregamento</h2>
        )
      }
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        {stateScreenComponent(screenState)}

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielpdev" />
    </QuizBackground>
  );
}