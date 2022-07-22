import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswerPair = () => {
  const question = generateFloorRand(100);
  return [question, isPrime(question) ? 'yes' : 'no'];
};

const startPrimeGame = () => {
  const questionDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
};

export default startPrimeGame;
