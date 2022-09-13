import readlineSync from 'readline-sync';

const baseOfGame = (nameOfGame, gameCondition, countIter) => {
  // console.log(nameOfGame, '\n');
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameCondition);

  const attemptsCount = 3;
  for (let iter = 0; iter < attemptsCount; iter += 1) {
    const [question, correctAnswer] = countIter();
    console.log(`Question: ${question}`);
    // console.log(correctAnswer);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default baseOfGame;
