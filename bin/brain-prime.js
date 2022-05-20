import { mainLoop } from '../src/index.js'

export const PrimeGame = (name) => {
  let questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  let correctAnswers = [];
  let questions = [];
  for (let i = 0; i < 3; i += 1)
  {
    let num = Math.floor(Math.random() * 100);
    questions[i] = num.toString();
    Prime (num) ? correctAnswers[i] = 'yes' : correctAnswers[i] = 'no';  
  }
  
  mainLoop (questionText, name, questions, correctAnswers); 
}

const Prime = (n) => {
for (let i = 2; i < n; i += 1) {
    if (n % i === 0)
    return false;
  }
  return true;
}

export default PrimeGame;
