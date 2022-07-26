import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestionAnswerPair = () => {
  const a = generateRand(11);
  const b = generateRand(11);
  return [`${a} ${b}`, gcd(a, b)];
};

function startGcdGame() {
  const questionDescription = 'Find the greatest common divisor of given numbers.';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
}

export default startGcdGame;
