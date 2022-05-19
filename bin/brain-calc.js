import { mainLoop } from '../src/index.js';

export const Calc = (name) => {
  const results = [];
  const questions = [];
  for (let i = 0; i < 3; i += 1) {
    const n1 = Math.floor(Math.random() * 100);
    const n2 = Math.floor(Math.random() * 100);
    const opArray = ['+', '-', '*'];
    const op = opArray[Math.floor(Math.random() * opArray.length)];
    const result = 0;
    switch (op) {
      case '+': results[i] = n1 + n2; questions[i] = `${n1} + ${n2}`; break;
      case '*': results[i] = n1 * n2; questions[i] = `${n1} * ${n2}`; break;
      case '-': results[i] = n1 - n2; questions[i] = `${n1} - ${n2}`; break;
      default: results[i] = 0;
    }
  }
  mainLoop('', name, questions, results);
};
