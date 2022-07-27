import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const operators = ['+', '-', '*'];

const calcExpression = (a, operator, b) => {
  switch (operator) {
    case '+': return a + b;
    case '*': return a * b;
    case '-': return a - b;
    default: return null;
  }
};

const generateQuestionAnswerPair = () => {
  const a = generateRand(100);
  const b = generateRand(100);
  const op = operators[generateRand(operators.length)];
  const question = `${a} ${op} ${b}`;
  const answer = calcExpression(a, op, b);
  return [question, answer];
};

const startCalcGame = () => {
  const questionDescription = 'Calculate the end result';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startCalcGame;
