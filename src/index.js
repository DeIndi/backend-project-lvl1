import readlineSync from 'readline-sync';
import askName from './cli.js';

const correctAnswersReq = 3;

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (name, answer, correctAnswer) => {
  if (answer === correctAnswer || parseInt(answer, 10) === parseInt(correctAnswer, 10)) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const iterateQuestions = (generateQuestionAnswerPair, questionDesc) => {
  const name = askName();
  let corrAnswNum = 0;
  console.log(questionDesc);
  for (let i = 0; i < 3; i += 1) {
    const temp = generateQuestionAnswerPair();
    const answer = askQuestion(temp[0]);
    if (checkAnswer(name, answer, temp[1])) {
      corrAnswNum += 1;
    } else {
      break;
    }
  }
  if (corrAnswNum === correctAnswersReq) {
    console.log(`Congratulations, ${name}!`);
  }
};
