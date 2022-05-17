import { question } from '../src/index.js';
import { checkAnswer } from '../src/index.js';
import { mainLoop } from '../src/index.js';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/prefer-default-export
export function Even(name) {
  let correctAnswers = [];
  let randNums = [];
  let questionText = 'Answer "yes" if the number is even, otherwise answer "no".';
    for (let i = 0; i < 3; i++ ) {
     randNums[i] = Math.floor(Math.random() * 100);
     correctAnswers[i] = 'no';
    switch (randNums[i] % 2) {
      case 0: correctAnswers[i] = 'yes'; break;
      case 1: correctAnswers[i] = 'no'; break;
      default: break;
    }
  }
    mainLoop (questionText, name, randNums, correctAnswers);

}

