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
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  background: linear-gradient(
    to left bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2)
  );
  backdrop-filter: blur(5px);
  @media screen and (max-width: 500px) {
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    top: 55vh;
    left: 0;
    background: linear-gradient(
    to right top,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.2)
  );
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg.enigma}>
      <QuizContainer>
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
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
}
