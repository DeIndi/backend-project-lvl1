import readlineSync from 'readline-sync';
import askName from './cli.js';

const totalQuestionsCount = 3;

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkAnswer = (name, answer, correctAnswer) => (!!((answer === correctAnswer
 || parseInt(answer, 10) === correctAnswer)));

const iterateQuestions = (generateQuestionAnswerPair, questionDescription) => {
  const name = askName();
  console.log(questionDescription);
  for (let i = 0; i < totalQuestionsCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAnswerPair();
    const answer = askQuestion(question);
    if (checkAnswer(name, answer, correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default iterateQuestions;
