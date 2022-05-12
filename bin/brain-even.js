import readlineSync from 'readline-sync';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/prefer-default-export
export function Even(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let corrAnswNum = 0;
  for (let i = 0; i < 3; i += 1) {
    const randNum = Math.floor(Math.random() * 100);
    const answer = readlineSync.question(`Question: ${randNum}`);
    console.log(`Your answer: ${answer}`);
    let correctAnswer = 'no';
    switch (randNum % 2) {
      case 0: correctAnswer = 'yes'; break;
      case 1: correctAnswer = 'no'; break;
      default: break;
    }
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}`);
      break;
    } else {
      console.log('Correct!');
      corrAnswNum += 1;
    }
  }
  if (corrAnswNum === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}
