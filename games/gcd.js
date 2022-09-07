import baseOfGame from '../src/index.js';
import generatorRandom from './genRandom.js';

const playGcdGame = () => {
  const nameOfGame = 'brain-gcd';
  const noteToTask = 'Find the greatest common divisor of given numbers.';

  const game = () => {
    let num1 = generatorRandom(100);
    if (num1 === 0) {
      while (num1 === 0) {
        num1 = generatorRandom(100);
      }
      return num1;
    }
    let num2 = generatorRandom(50);
    if (num2 === 0) {
      while (num2 === 0) {
        num2 = generatorRandom(50);
      }
      return num2;
    }

    const question = `${num1} ${num2}`;

    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    const result = num1;
    const resultToString = String(result);
    return [question, resultToString];
  };
  baseOfGame(nameOfGame, noteToTask, game);
};

export default playGcdGame;
