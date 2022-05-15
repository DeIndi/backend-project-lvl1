export const Calc = () => {
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
  console.log(`${n1} ${op} ${n2} = ${result}`);   
}
