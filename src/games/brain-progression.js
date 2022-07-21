import iterateQuestions from '../index.js';
import generateFloorRand from '../generateFloorRand.js';

const generateQuestion = () => {
  const pArray = [];
  let hiddenIndex = 0;
  let question = '';
  hiddenIndex = generateFloorRand(6);
  const pk = generateFloorRand(30);
  for (let j = 0; j < 6; j += 1) {
    if (j !== 0) { pArray[j] = (pArray[j - 1] + pk); } else {
      pArray[j] = generateFloorRand(30);
    }
    if (j !== hiddenIndex) {
      question += `${pArray[j]}`;
    } else {
      question += '..';
    }
    if (j < 5) {
      question += ' ';
    }
  }
  return question;
};

const getProgressionDiff = (progression) => {
  for (let i = 0; i < progression.length - 1; i += 1) {
    if (progression[i] !== '..' && progression[i + 1] !== '..') {
      return Math.abs(progression[i + 1] - progression[i]);
    }
  }
  return null;
};

const generateAnswer = (question) => {
  const progression = question.split(' ').map((x) => ((x === '..') ? x : parseInt(x, 10)));
  const diff = getProgressionDiff(progression);
  const promptPos = progression.indexOf('..');
  return (promptPos < progression.length - 1) ? progression[promptPos + 1] - diff
    : progression[promptPos - 1] + diff;
};

const startProgressionGame = () => {
  const questionDesc = 'What number is missing in the progression?';
  iterateQuestions(generateQuestion, generateAnswer, questionDesc);
};

export default startProgressionGame;
