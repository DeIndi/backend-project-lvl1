import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const generateQuestionAnswerPair = () => {
  const question = generateRand(100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => {
  const questionDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startPrimeGame;
