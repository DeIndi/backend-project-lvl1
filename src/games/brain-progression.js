import { iterateQuestions } from '../index.js';

const generateQuestionAnswerPair = () => {
  const pArray = [];
  let hiddenIndex = 0;
  let question = '';
  let correctAnswer = 0;
  hiddenIndex = Math.floor(Math.random() * 6);
  const pk = Math.floor(Math.random() * 30);
  for (let j = 0; j < 6; j += 1) {
    if (j !== 0) { pArray[j] = (pArray[j - 1] + pk); } else {
      pArray[j] = Math.floor(Math.random() * 30);
    }
    if (j !== hiddenIndex) {
      question += `${pArray[j]}`;
    } else {
      question += '..';
    }
    if (j < 5) {
      question += ' ';
    }
  }
  correctAnswer = pArray[hiddenIndex];
  const questionText = question;
  return [questionText, correctAnswer];
};

export const Progression = (name) => {
  const questionDesc = 'What number is missing in the progression?';

  iterateQuestions(generateQuestionAnswerPair, questionDesc, name);
};

export default Progression;
