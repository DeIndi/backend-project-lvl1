import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestion = () => {
  const n1 = generateFloorRand(11);
  const n2 = generateFloorRand(11);
  return `${n1} ${n2}`;
};

const generateAnswer = (question) => {
  const operands = question.split(' ').map((x) => parseInt(x, 10));
  console.log(operands);
  const correctAnswer = gcd(operands[0], operands[1]);
  console.log(correctAnswer);
  return correctAnswer;
};

function startGcdGame() {
  const questionDesc = 'Find the greatest common divisor of given numbers.';
  iterateQuestions(generateQuestion, generateAnswer, questionDesc);
}

export default startGcdGame;
