import baseOfGame from '../src/index.js';
import generatorRandom from './genRandom.js';

const playCalcGame = () => {
  const nameOfGame = 'brain-prime';
  const noteToTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const game = () => {
    const genNumber = generatorRandom(100);
    while (genNumber < 2) {
      genNumber = generatorRandom(100);
    }
    const array = [];
    for (let i = 2; i < genNumber; i += 1) {
      if (genNumber % i !== 0) {
        array.push(i);
      }
    }
    let result = array.length === genNumber - 2 ? 'yes' : 'no';

    const question = genNumber;
    return [question, result];
  };
  baseOfGame(nameOfGame, noteToTask, game);
};

export default playCalcGame;
