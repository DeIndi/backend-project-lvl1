import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const generateQuestionAnswerPair = () => {
  const question = generateRand(100);
  return [question, (question % 2) ? 'no' : 'yes'];
};

const startEvenGame = () => {
  const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startEvenGame;
