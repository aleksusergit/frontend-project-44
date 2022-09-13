import baseOfGame from '../src/index.js';
import { getRandomNumber } from './genRandom.js';

const playEvenGame = () => {
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const minRandomNumber = 0;
  const maxRandomNumber = 100;

  const isEven = (number) => (number % 2 === 0);

  const roundsCount = () => {
    const number = getRandomNumber(minRandomNumber, maxRandomNumber);
    const question = `${number}`;
    const result = isEven(number) ? 'yes' : 'no';
    return [question, result];
  };

  baseOfGame(gameCondition, roundsCount);
};

export default playEvenGame;
