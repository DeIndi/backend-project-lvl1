import readlineSync from 'readline-sync';

export function questionF(question) {
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
  console.log(`Let's try again, ${name}`);
  return false;
}

export function mainLoop(questionText, name, questions, correctAnswers) {
  let corrAnswNum = 0;
  console.log(questionText);
  for (let i = 0; i < 3; i += 1) {
    const answer = questionF(questions[i]);
    if (checkAnswer(name, answer, correctAnswers[i])) {
      corrAnswNum += 1;
    } else {
      break;
    }
  }
  if (corrAnswNum === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
