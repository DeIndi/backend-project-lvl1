import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const generateQuestion = () => generateFloorRand(100);

const generateAnswer = (question) => ((parseInt(question, 10) % 2) ? 'no' : 'yes');

const startEvenGame = () => {
  const questionDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
  iterateQuestions(generateQuestion, generateAnswer, questionDesc);
};

export default startEvenGame;
