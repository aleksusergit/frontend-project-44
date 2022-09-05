import baseOfGame from '../src/index.js';
import generatorRandom from './genRandom.js';

const playEvenGame = () => {
  const nameOfGame = 'brain-even';
  const noteToTask = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameIsEven = () => {
    const number = generatorRandom(100);
    const question = `${number}`;
    const result = number % 2 === 0 ? 'yes' : 'no';

    return [question, result];
  };

  baseOfGame(nameOfGame, noteToTask, gameIsEven);
};

export default playEvenGame;
