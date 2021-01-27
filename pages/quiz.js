import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import Widget from '../src/components/Widget'

function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
      </Widget>
    );
}

export default function QuizPage () {
    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <LoadingWidget />
            </QuizContainer>
        </QuizBackground>
    )
}