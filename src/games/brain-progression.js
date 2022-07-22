import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const progressionSize = 6;

const generateQuestionAnswerPair = () => {
  const progression = [];
  const hiddenIndex = generateFloorRand(6);
  const progressionCoeff = generateFloorRand(30);
  let lastGenerated = generateFloorRand(30);
  let hiddenElement = null;
  for (let i = 0; i < progressionSize; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
      hiddenElement = lastGenerated + progressionCoeff;
    } else {
    progression.push (lastGenerated + progressionCoeff);
  }
  lastGenerated += progressionCoeff;
  }
  return [progression.join (' '), hiddenElement];
};

const startProgressionGame = () => {
  const questionDesc = 'What number is missing in the progression?';
  iterateQuestions(generateQuestionAnswerPair, questionDesc);
};

export default startProgressionGame;
