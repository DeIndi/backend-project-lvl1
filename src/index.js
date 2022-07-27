import readlineSync from 'readline-sync';
import askName from './cli.js';

const correctAnswersRequirement = 3;
const totalQuestionsNumber = 3;

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (name, answer, correctAnswer) => {
  if (answer === correctAnswer || parseInt(answer, 10) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

const iterateQuestions = (generateQuestionAnswerPair, questionDescription) => {
  const name = askName();
  let corrAnswNum = 0;
  console.log(questionDescription);
  for (let i = 0; i < totalQuestionsNumber; i += 1) {
    const [question, correctAnswer] = generateQuestionAnswerPair();
    const answer = askQuestion(question);
    if (checkAnswer(name, answer, correctAnswer)) {
      corrAnswNum += 1;
    } else {
      break;
    }
  }
  if (corrAnswNum === correctAnswersRequirement) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default iterateQuestions;
