import readlineSync from 'readline-sync';
export function input () 
{
    const name = readlineSync.question('May I have your name?');
    console.log('Hello, ' + name + '!');
}