import { iterateQuestions } from '../index.js';

const Prime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswerPair = () => {
  let randNum = 0;
  randNum = Math.floor(Math.random() * 100);
  let correctAnswer = 'no';
  switch (Prime(randNum)) {
    case true: correctAnswer = 'yes'; break;
    case false: correctAnswer = 'no'; break;
    default: break;
  }
  const questionText = randNum;
  return [questionText, correctAnswer];
};

export const PrimeGame = (name) => {
  const questionDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDesc, name);
};

export default PrimeGame;
