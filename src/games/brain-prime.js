import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const isPrime = (n) => {
  for (let i = 2; i < Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswerPair = () => {
  const question = generateRand(100);
  return [question, isPrime(question) ? 'yes' : 'no'];
};

const startPrimeGame = () => {
  const questionDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startPrimeGame;
