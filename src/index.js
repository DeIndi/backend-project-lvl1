import readlineSync from 'readline-sync';

export function askQuestion(question) {
  const answer = readlineSync.question(`Question: ${question}`);
  console.log(`Your answer: ${answer}`);
  return answer;
}

export function checkAnswer(name, answer, correctAnswer) {
  if (answer === correctAnswer || parseInt(answer, 10) === parseInt(correctAnswer, 10)) {
    console.log('Correct!');
    return true;
  }

  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
  console.log(`Let's try again, ${name}!`);
  return false;
}

export function iterateQuestions(generateQuestionAnswerPair, questionDesc, name) {
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
  if (corrAnswNum === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
