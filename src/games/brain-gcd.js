import { iterateQuestions } from '../index.js';

function gcd(x, y) {
  let a = x;
  let b = y;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return (a + b);
}

const generateQuestionAnswerPair = () => {
  const n1 = Math.floor(Math.random() * 11);
  const n2 = Math.floor(Math.random() * 11);
  const correctAnswer = gcd(n1, n2);
  const questionText = `${n1} ${n2}`;
  return [questionText, correctAnswer];
};

export function startGcdGame(name) {
  const questionDesc = 'Find the greatest common divisor of given numbers.';
  iterateQuestions(generateQuestionAnswerPair, questionDesc, name);
}

export default startGcdGame;
