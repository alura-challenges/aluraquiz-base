import Widget from '../../components/Widget'

export default function ResultWidget({ results }) {
  console.log(results)
  const rightAnswers = results.filter(result => result).length;
  const points = rightAnswers * 100 ; 
  
  return (
    <Widget>
      <Widget.Header>
        <h2>
          Resultado
        </h2>
      </Widget.Header>
      <Widget.Content>
        <p>{`Você acertou ${rightAnswers} pergunta(s)`}</p>
        <ul>
          {results.map( (result, index) => (
            <li>{`#${index + 1} ${result ? 'Acertou' : 'Errou'}`}</li>
          ))}
        </ul>
        <p>{`Você fez ${points} pontos`}</p>
      </Widget.Content>
    </Widget>
  );
}