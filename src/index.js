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

const iterateQuestions = (generateQuestionAnswerPair, questionDesc) => {
  const name = askName();
  let corrAnswNum = 0;
  console.log(questionDesc);
  for (let i = 0; i < 3; i += 1) {
    const QAPair = generateQuestionAnswerPair();
    const answer = askQuestion(QAPair[0]);
    if (checkAnswer(name, answer, QAPair[1])) {
      corrAnswNum += 1;
    } else {
      break;
    }
  }
  if (corrAnswNum === correctAnswersReq) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default iterateQuestions;
