import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-even\n');
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let iter = 0; iter <= 2; iter += 1) {
    const generateNumber = () => {
      const num = Math.round(Math.random() * 100);
      // console.log('Сгенерированное число = ', num);
      return num;
    };
    const genNum = generateNumber();

    const question = readlineSync.question(`Question: ${genNum}\nYou answer: `);

    const isEven = () => {
      const num = genNum;
      const even = true;
      const notEven = false;
      return num % 2 === 0 ? even : notEven;
    };
    const isTheEven = isEven();
    if (
      (question === 'yes' && isTheEven === true)
      || (question === 'no' && isTheEven === false)
    ) {
      console.log('Correct!');
    } else if (question === 'yes' && isTheEven === false) {
      return console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
      );
    } else if (question === 'no' && isTheEven === true) {
      return console.log(
        `'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`,
      );
    } else {
      return console.log(`Incorrect answer\nLet's try again, ${userName}!`);
    }
    if (iter === 2) {
      break;
      // console.log(`Congratulations, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
