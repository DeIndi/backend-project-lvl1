import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestionAnswerPair = () => {
  const a = generateFloorRand(11);
  const b = generateFloorRand(11);
  return [`${a} ${b}`, gcd(a,b)];
};

function startGcdGame() {
  const questionDesc = 'Find the greatest common divisor of given numbers.';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
}

export default startGcdGame;
