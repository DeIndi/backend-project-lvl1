// eslint-disable-next-line import/no-unresolved
import { iterateQuestions } from '../index.js';

const generateQuestionAnswerPair = () => {
  let randNum = 0;
  randNum = Math.floor(Math.random() * 100);
  let correctAnswer = 'no';
  switch (randNum % 2) {
    case 0: correctAnswer = 'yes'; break;
    case 1: correctAnswer = 'no'; break;
    default: break;
  }
  const questionText = randNum;
  return [questionText, correctAnswer];
};

export const startEvenGame = () => {
  const questionDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
};

export default startEvenGame;
