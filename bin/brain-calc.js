import readlineSync from 'readline-sync';
export const Calc = (name) => {
	let count = 0;
	for (let i = 0; i < 3; i++) {
		const n1 = Math.floor(Math.random() * 100);
		const n2 = Math.floor(Math.random() * 100);
		const opArray = ['+','-','*'];
		const op = opArray[Math.floor(Math.random() * opArray.length)];
		let result = 0;
		switch (op){
		  case '+': result = n1 + n2; break;
		  case '*': result = n1 * n2; break;
		  case '-': result = n1 - n2; break;
		  default: result = 0;
		}
		  console.log(` Question: ${n1} ${op} ${n2}`);
		  const answer = readlineSync.question('Your answer: ');
	  if (parseInt(answer) !== parseInt(result)) {
		  console.log(`'${answer}' is wrong answer ;). Correct answer was '${result}'`);
		  console.log(`Let's try again, ${name}`);
	  break;
	  }
	  else {
		  console.log('Correct!');
		  count += 1;
	  }
	  }
  if (count === 3)
  	console.log(`Congratulations, ${name}!`);  
}
