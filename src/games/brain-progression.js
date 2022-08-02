import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const progressionSizeMax = 6;
const stepMax = 30;

// const getProgressionElement = (first, position, step) => first + ((position - 1) * step);

const generateProgression = (progressionSize, step) => {
  const first = generateRand(stepMax);
  return Array.from({ length: progressionSize }, (_, i) => (i + first) * step);
};

const generateQuestionAnswerPair = () => {
  const hiddenIndex = generateRand(progressionSizeMax - 1);
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
