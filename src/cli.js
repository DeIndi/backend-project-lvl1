// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export function input() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
