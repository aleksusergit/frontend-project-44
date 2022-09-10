import readlineSync from 'readline-sync';

const baseOfGame = (nameOfGame, noteToTask, countIter) => {
  console.log(nameOfGame, '\n');
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(noteToTask);

  for (let iter = 0; iter < 3; iter += 1) {
    const questionWithResult = countIter();
    console.log('Question:', questionWithResult[0]);
    // console.log(questionWithResult[1]);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === questionWithResult[1]) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answerUser}' is wrong answer ;(. Correct answer was '${questionWithResult[1]}'.\nLet's try again, ${userName}!`,
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default baseOfGame;
