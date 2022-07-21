import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const generateQuestion = () => {
  const n1 = generateFloorRand(100);
  const n2 = generateFloorRand(100);
  const opArray = ['+', '-', '*'];
  const op = opArray[generateFloorRand(opArray.length)];
  return `${n1} ${op} ${n2}`;
};

const generateAnswer = (question) => {
  const operands = question.split(' ');
  let correctAnswer = 0;
  switch (operands[1]) {
    case '+': correctAnswer = parseInt(operands[0]) + parseInt(operands[2]); break;
    case '*': correctAnswer = parseInt(operands[0]) * parseInt(operands[2]); break;
    case '-': correctAnswer = parseInt(operands[0]) - parseInt(operands[2]); break;
    default: correctAnswer = 0;
  }
  return correctAnswer;
};

const startCalcGame = () => {
  const questionDesc = 'Calculate the end result';
  iterateQuestions(generateQuestion, generateAnswer, questionDesc);
};

export default startCalcGame;
