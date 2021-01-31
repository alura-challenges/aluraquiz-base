import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

QuizContainer.QuizTransparentBackground = styled.div`
  background: rgba( 0, 0, 0, 0.70 );
  box-shadow: 0 8px 32px 0 rgba( 74, 74, 74, 0.37 );
  backdrop-filter: blur( 1.5px );
  -webkit-backdrop-filter: blur( 1.5px );
  border-radius: 10px;
  border: 1px solid rgba( 74, 74, 74, 0.45 );
  width: 450px;
  height: 900px;
  padding: 15px 15px;
  @media screen and (max-width: 500px) {
    width: 330px;
    height: 1000px;
    margin: auto;
  }
`;

export default QuizContainer;