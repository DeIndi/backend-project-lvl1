import { mainLoop } from '../src/index.js';

export function Progression(name) {
  const questionText = 'What number is missing in the progression?';
  const questions = [];
  const correctAnswers = [];
  let pArray = [], hiddenIndex;
  for (let i = 0; i < 3; i++) {
    questions[i] = '';
  pArray = [];
  hiddenIndex = Math.floor(Math.random() * 5);
  let pk = Math.floor (Math.random() * 30);
  for (let j = 0 ; j < 5; j += 1) {
    (j !== 0) ? pArray[j] = (pArray[j-1] + pk) : pArray[j] = Math.floor (Math.random() * 30);
    if (j !== hiddenIndex) {
    questions[i] += ` ${pArray[j]}`;
    } else {
	  questions[i] += ` ...`;   
    }
  }
  correctAnswers[i] = pArray[hiddenIndex];
  }
  mainLoop (questionText, name, questions, correctAnswers);
}
