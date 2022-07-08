// eslint-disable-next-line import/no-unresolved
import { iterateQuestions } from '../index.js';

const generateQuestionAnswerPair = () => {
  const n1 = Math.floor(Math.random() * 100);
  const n2 = Math.floor(Math.random() * 100);
  const opArray = ['+', '-', '*'];
  const op = opArray[Math.floor(Math.random() * opArray.length)];
  let correctAnswer = 0;
  let questionText = '';
  switch (op) {
    case '+': correctAnswer = n1 + n2; questionText = `${n1} + ${n2}`; break;
    case '*': correctAnswer = n1 * n2; questionText = `${n1} * ${n2}`; break;
    case '-': correctAnswer = n1 - n2; questionText = `${n1} - ${n2}`; break;
    default: correctAnswer = 0;
  }
  return [questionText, correctAnswer];
};

export const startCalcGame = (name) => {
  const questionDesc = 'Calculate the end result';
  iterateQuestions(generateQuestionAnswerPair, questionDesc, name);
};

export default startCalcGame;
