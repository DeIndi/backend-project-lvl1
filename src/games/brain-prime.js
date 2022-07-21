import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => generateFloorRand(100);

const generateAnswer = (question) => isPrime(parseInt(question, 10)) ? 'yes' : 'no';

const startPrimeGame = () => {
  const questionDesc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  iterateQuestions(generateQuestion, generateAnswer, questionDesc);
};

export default startPrimeGame;
