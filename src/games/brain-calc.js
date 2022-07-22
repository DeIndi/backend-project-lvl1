import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const operators = ['+', '-', '*'];

const calcExpression = (a, operator, b) => {
  let result = 0;
  switch (operator) {
    case '+': result = a + b; break;
    case '*': result = a * b; break;
    case '-': result = a - b; break;
    default: result = 0;
  }
  return result;
};

const generateQuestionAnswerPair = () => {
  const a = generateFloorRand(100);
  const b = generateFloorRand(100);
  const op = operators[generateFloorRand(operators.length)];
  return [`${a} ${op} ${b}`, calcExpression(a, op, b)];
};

const startCalcGame = () => {
  const questionDesc = 'Calculate the end result';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
};

export default startCalcGame;
