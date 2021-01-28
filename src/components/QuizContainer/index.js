import styled from 'styled-components'

const QuizContainer = styled.div`
width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px;
}

  audio {
    width: 140px;
    height: 27px;
    margin-left: auto;
    margin-right: -20px;
    position: absolute;
    top: 20px;
    right: 100px;

    @media screen and (max-width: 500px) {
      right: 50px;
    }

    &::-webkit-media-controls-panel{
      width: 100%;
      max-width: 100%;
    }

    &::-webkit-media-controls-mute-button{

    }

    &::-webkit-media-controls-play-button{
      display: none;
    }

    &::-webkit-media-controls-timeline-container{
      display: none;
    }

    &::-webkit-media-controls-current-time-display{
      display: none;
    }

    &::-webkit-media-controls-time-remaining-display{
      display: none;
    }

    &::-webkit-media-controls-timeline{
      display: none;
    }

    &::-webkit-media-controls-volume-slider-container{
      display: block;
      width: 100%;
      max-width: 100%;
      opacity: 1;
    }

    &::-webkit-media-controls-volume-slider{
      display: block;
      opacity: 1;
      width: 100%;
      /* max-width: 100%; */
      margin-left: auto;

      &:hover{
        background: transparent;
      }
    }
  }
`;

export default QuizContainer