import iterateQuestions from '../index.js';
import generateRand from '../generateRand.js';

const progressionSizeMax = 6;
const progressionCoeffMax = 30;

const generateProgression = (progressionSize, progressionCoeff) => {
  const progression = [];
  let lastGenerated = generateRand(progressionCoeffMax);
  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(lastGenerated + progressionCoeff);
    lastGenerated += progressionCoeff;
  }
  return progression;
};

const generateQuestionAnswerPair = () => {
  const hiddenIndex = generateRand(progressionSizeMax);
  const progressionCoeff = generateRand(progressionCoeffMax);
  const progression = generateProgression(progressionSizeMax, progressionCoeff);
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
