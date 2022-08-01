import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const progressionSizeMax = 6;
const stepMax = 30;

const getProgressionElement = (first, position, step) => first + ((position - 1) * step);

const generateProgression = (progressionSize, step) => {
  const progression = [];
  progression[0] = generateRand(stepMax);
  for (let i = 1; i < progressionSize; i += 1) {
    progression.push(getProgressionElement(progression[0], i, step));
  }
  return progression;
};

const generateQuestionAnswerPair = () => {
  const hiddenIndex = generateRand(progressionSizeMax);
  const step = generateRand(stepMax);
  const progression = generateProgression(progressionSizeMax, step);
  const hiddenElement = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, hiddenElement];
};

const startProgressionGame = () => {
  const questionDescription = 'What number is missing in the progression?';
  iterateQuestions(generateQuestionAnswerPair, questionDescription);
};

export default startProgressionGame;
