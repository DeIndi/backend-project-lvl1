import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';


const generateQuestionAnswerPair = () => {
const question = generateFloorRand(100);
return [question, (question % 2) ? 'no' : 'yes'];
};

const generateQuestion = () => generateFloorRand(100);

const generateAnswer = (question) => ((parseInt(question, 10) % 2) ? 'no' : 'yes');

const startEvenGame = () => {
  const questionDesc = 'Answer "yes" if the number is even, otherwise answer "no".';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
};

export default startEvenGame;
