import React from 'react';
import Form from '../src/components/Form';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

const QuizPage = () => {
    const handleSubmit = () => {};
    
    return (
        <QuizBackground backgroundImage={db.bg.enigma}>
        <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> Enigma 1 de 5</h1>
          </Widget.Header>
            <img src={db.questions[0].image} alt="" width="350" height="148"/>
          <Widget.Content>
            <p>{db.questions[0].title}</p>
            <small>{db.questions[0].description}</small>

            <Form onSubmit={(e) => {
              e.preventDefault();
              console.log('Form submited from quiz page!');
              handleSubmit();
            }}>
                <input
                type="radio"
                id="option__one"
                value="option__one"
                hidden
                />
                <label htmlFor="option__one">
                    Primeira hipotese
                </label>

                <input
                type="radio"
                id="option__two"
                value="option__two"
                hidden
                />
                <label htmlFor="option__two">
                    Segunda hipotese
                </label>

                <input
                type="radio"
                id="option__three"
                value="option__three"
                hidden
                />
                <label htmlFor="option__three">
                    Terceira hipotese
                </label>

                <input
                type="radio"
                id="option__fuor"
                value="option__fuor"
                hidden
                />
                <label htmlFor="option__fuor">
                    Quarta hipotese
                </label>

              <button
                type="submit"
                // validating button
                disabled=""
              >
                Confirmar
              </button>
            </Form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/BrunoMSPais/aluraquiz" />
    </QuizBackground>
  );
}

export default QuizPage;
