import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const generateQuestionAnswerPair = () => {
  const question = generateRand(100);
  const answer = (question % 2) ? 'no' : 'yes';
  return [question, answer];
};

const startEvenGame = () => {
  const questionDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startEvenGame;
