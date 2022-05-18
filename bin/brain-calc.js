import readlineSync from 'readline-sync';
import { mainLoop } from '../src/index.js';
export const Calc = (name) => {
	let results = [];
	let questions = [];
	for (let i = 0; i < 3; i++) {
		let n1 = Math.floor(Math.random() * 100);
		let n2 = Math.floor(Math.random() * 100);
		const opArray = ['+','-','*'];
		const op = opArray[Math.floor(Math.random() * opArray.length)];
		let result = 0;
		switch (op){
		  case '+': results[i] = n1 + n2; questions[i] = `${n1} + ${n2}`; break;
		  case '*': results[i] = n1 * n2; questions[i] = `${n1} * ${n2}`; break;
		  case '-': results[i] = n1 - n2; questions[i] = `${n1} - ${n2}`; break;
		  default: results[i] = 0;
		}
	  }
  mainLoop( "", name, questions, results );
}