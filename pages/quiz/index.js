import { useState, useCallback, useEffect } from 'react';
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
import explode from '../../src/effects/explode.mp3';
import defuse from '../../src/effects/defuse.mp3';

export default function Quiz() {
  const stateScreen = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT'
  }

  const [ screenState, setScreenState ] = useState(stateScreen.LOADING);
  const [ audioPlant, setAudioPlant ] = useState(null);
  const [ audioPlantExplode, setAudioExplode ] = useState(null);
  const [ audioPlantDefuse, setAudioDefuse ] = useState(null);
  
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const [ results, setResults ] = useState([]);
  const questionTotal = db.questions.length;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setAudioPlant(new Audio())
    setAudioExplode(new Audio())
    setAudioDefuse(new Audio())
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setScreenState(stateScreen.QUIZ)
    }, 1 * 1000);   
  }, [])

  useEffect(() => {
    if(questionIndex > (questionTotal - 1) ){
      setScreenState(stateScreen.RESULT)
    };
  }, [questionIndex])

  useEffect(() => {
    if(audioPlant && questionIndex <= (questionTotal - 1)){
      playAudio(audioPlant,plant)
    }
  }, [questionIndex, audioPlant])
  
  const playAudio = useCallback((audio,sound) => {
    audio.src = sound;
    audio.volume = 0.1;
    audio.play();
  }, [])

  const pauseAudio = useCallback((audio) => {
    audio.pause();
  }, [])

  function addResults(result){
    setResults([...results, result])
  }

  function stateScreenComponent(data){
    switch(data){
      case 'LOADING': {
        return(
          <LoadingWidget />
        )
      }
      case 'QUIZ': {
        function handleSubmit(e, isCorrect ){
          e.preventDefault();
          
          if(audioPlant && isCorrect){
            pauseAudio(audioPlant);
            playAudio(audioPlantDefuse, defuse);
          } else if (audioPlant && !isCorrect){
            pauseAudio(audioPlant);
            playAudio(audioPlantExplode, explode);
          }
          
          setTimeout(() => {
            setQuestionIndex(questionIndex + 1)
          }, 3 * 1000);
        }

        return(
          <QuestionWidget 
            question={question} 
            questionIndex={questionIndex} 
            questionTotal={questionTotal}
            handleSubmit={handleSubmit}
            addResults={addResults}
          />
        )
      }
      case 'RESULT': {
        return(
          <ResultWidget results={results} />
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