import { iterateQuestions } from '../src/index.js';

const Prime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

export const PrimeGame = (name) => {
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const correctAnswers = [];
  const questions = [];
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    questions[i] = num.toString();
    if (Prime(num)) {
      (correctAnswers[i] = 'yes');
    } else {
      (correctAnswers[i] = 'no');
    }
  }
  iterateQuestions(questionText, name, questions, correctAnswers);
};

export default PrimeGame;
