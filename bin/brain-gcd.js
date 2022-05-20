import { mainLoop } from '../src/index.js';

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

export function gcdLoop(name) {
  const questionText = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const n1 = Math.floor(Math.random() * 11);
    const n2 = Math.floor(Math.random() * 11);
    questions[i] = `${n1} ${n2}`;
    correctAnswers[i] = gcd(n1, n2);
  }

  mainLoop(questionText, name, questions, correctAnswers);
}

export default gcdLoop;
