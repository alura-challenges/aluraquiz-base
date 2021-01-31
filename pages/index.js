import styled, {ThemeProvider} from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import Button from '../src/components/Button'
import Input from '../src/components/Input'
import GitHubCorner from '../src/components/GitHubCorner'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

export default function Home(props) {

  const [themesBGState, setThemeBGState] = useState(db.bg);
  const [switchThemesState, setSwitchThemesState] = useState("");
  const [nameState, setNameState] = useState("");

  const router = useRouter();

  useEffect(() => {
    if(switchThemesState === "THANKSGIVING"){
      props.changeTheme(db.themeThanksgiving);
      setThemeBGState(db.bgSwitch.thanksgiving);
    }else if(switchThemesState === "HALLOWEEN"){
      props.changeTheme(db.themeHalloween);
      setThemeBGState(db.bgSwitch.halloween);
    }else if(switchThemesState === "CHRISTMAS"){
      props.changeTheme(db.themeChristmas);
      setThemeBGState(db.bgSwitch.christmas);
    }
  }, [switchThemesState]);

  const inputHandler = (event) => { 
    setNameState(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${nameState}`);
  }

  return (
    <QuizBackground backgroundImage={themesBGState}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.SwitchThemes>
            <h1>Choose a theme</h1>
            <Button onClick={() => {setSwitchThemesState("THANKSGIVING")}}>Thanksgiving</Button>
            <Button onClick={() => {setSwitchThemesState("HALLOWEEN")}}>Halloween</Button>
            <Button onClick={() => {setSwitchThemesState("CHRISTMAS")}}>Christmas</Button>
          </Widget.SwitchThemes>
          <Widget.Content>
            <form onSubmit={formSubmitHandler}>
              <p>{db.description}</p>
              <Input placeholder='Your name' 
              onChange={inputHandler}
              value={nameState}/>
              <Button type="submit" disabled={nameState.length === 0}>Submit</Button>
            </form>
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
      <GitHubCorner projectUrl="https://github.com/omariosouto" />
    </QuizBackground>
  );
}
