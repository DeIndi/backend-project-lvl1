import { iterateQuestions } from '../src/index.js';

export const Progression = (name) => {
  const questionText = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];
  let pArray = []; let
    hiddenIndex;
  for (let i = 0; i < 3; i += 1) {
    questions[i] = '';
    pArray = [];
    hiddenIndex = Math.floor(Math.random() * 5);
    const pk = Math.floor(Math.random() * 30);
    for (let j = 0; j < 5; j += 1) {
      if (j !== 0) { pArray[j] = (pArray[j - 1] + pk); } else {
        pArray[j] = Math.floor(Math.random() * 30);
      }
      if (j !== hiddenIndex) {
        questions[i] += ` ${pArray[j]}`;
      } else {
        questions[i] += ' ...';
      }
    }
    correctAnswers[i] = pArray[hiddenIndex];
  }
  iterateQuestions(questionText, name, questions, correctAnswers);
};

export default Progression;
