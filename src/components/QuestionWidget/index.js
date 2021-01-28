import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router'

import Widget from '../../components/Widget'

export default function QuestionWidget({ 
  question,
  questionIndex,
  questionTotal,
  handleSubmit,
  addResults
 }) {
  const btnRef = useRef();

  const [ selectedAlternative, setSelectedAlternative ] = useState( undefined );
  const [ isQuestionSubmitted, setIsQuestionSubmitted ] = useState( false );
  const questionId = `question_${questionIndex}`

  const isCorrect = selectedAlternative === question?.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${questionIndex + 1} de ${questionTotal}`}
        </h1>

      </Widget.Header>
      <Widget.Content>
        <h2>{question?.title}</h2>

        <p>{question?.description}</p>
        
        <form 
          onSubmit={(e) => {
            handleSubmit( e, isCorrect)
            setIsQuestionSubmitted(true)
            setTimeout(() => {
              setIsQuestionSubmitted(false)
              setSelectedAlternative(undefined)
            }, 3 * 1000)
            addResults(isCorrect)
          }}
        >
          {question?.alternatives.map ( (alternative, index) => {
            const alternativeId = `alternative_${index}`
            return (
              <Widget.Topic
                key={index}
                as="label"
                htmlFor={alternativeId}
                name={questionId}
                selected={selectedAlternative === index}
              >
                <input 
                  type='radio'
                  id={alternativeId}
                  name={questionId}
                  checked={selectedAlternative === index}
                  onChange={() => setSelectedAlternative(index)}
                />
                {alternative}
              </Widget.Topic>
            )})}

            <Widget.Content.Button type="submit" ref={btnRef} disabled={!hasAlternativeSelected}>Confirmar</Widget.Content.Button>
            {isQuestionSubmitted && !isCorrect && <p>Você errou</p>}
            {isQuestionSubmitted && isCorrect && <p>Você acertou</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}