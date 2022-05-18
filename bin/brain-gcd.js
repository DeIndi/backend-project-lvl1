import { mainLoop } from '../src/index.js';

export function GcD_Loop (name) {
let questionText = 'Find the greatest common divisor of given numbers.';
let questions = [];
let correctAnswers = [];
for ( let i =0; i < 3; i += 1 ) {
	const n1 = Math.floor (Math.random() * 11);
	const n2 = Math.floor (Math.random() * 11);
	questions[i] = `${n1} ${n2}`;
	correctAnswers[i] = gcd(n1,n2);
}

mainLoop (questionText, name, questions, correctAnswers);
}

function gcd (a, b) {
while (a !== 0 && b !== 0)
    if (a > b) {
        a = a % b
        }
    else {
        b = b % a
        }
        return (a+b);
}
