import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Widget from '../../components/Widget'

export default function QuestionWidget({ 
  question,
  questionIndex,
  questionTotal,
  handleSubmit
 }) {

  const [ selectedAlternative, setSelectedAlternative ] = useState( undefined );
  const questionId = `question_${questionIndex}`

  return (
    <Widget>
      <Widget.Header>
        <h1>
          {`Pergunta ${questionIndex + 1} de ${questionTotal}`}
        </h1>

      </Widget.Header>
      <Widget.Content>
        <h2>{`${1}) ${question.title}`}</h2>

        <p>{question.description}</p>
        
        <form onSubmit={handleSubmit}>
          {question.alternatives.map ( (alternative, index) => {
            const alternativeId = `alternative_${index}`
            return (
              <Widget.Topic
                key={index}
                as="label"
                htmlFor={alternativeId}
                name={questionId}
              >
                <input 
                  type='radio'
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(index)}
                />
                {alternative}
              </Widget.Topic>
            )})}

            <Widget.Content.Button type="submit">Confirmar</Widget.Content.Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}