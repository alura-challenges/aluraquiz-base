import Widget from '../../components/Widget'

export default function LoadingWidget() {

  return (
    <Widget>
      <Widget.Header>
        <h2>
          Loading...
        </h2>
      </Widget.Header>
      <Widget.Content>
        <p>Tenha paciência</p>
      </Widget.Content>
    </Widget>
  );
}