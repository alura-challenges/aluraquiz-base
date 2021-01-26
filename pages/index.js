import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

QuizContainer.QuizTransparentBackground = styled.div`
  background: rgba( 255, 255, 255, 0.10 );
  box-shadow: 0 8px 32px 0 rgba( 0, 49, 83, 0.37 );
  backdrop-filter: blur( 1.5px );
  -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 0, 74, 74, 0.18 );
  width: 450px;
  height: 650px;
  padding: 15px 15px;
  @media screen and (max-width: 500px) {
    width: 325px;
    margin: auto;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizContainer.QuizTransparentBackground>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
            </Widget.Content> 
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer.QuizTransparentBackground>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/julio-Pereira" />
    </QuizBackground>
  );
}
