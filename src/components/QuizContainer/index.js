// src/components/QuizContainer/index.js
import React from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
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

export default QuizContainer;