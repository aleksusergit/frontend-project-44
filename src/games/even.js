import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRandomNumber = 0;
const maxRandomNumber = 100;

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const question = getRandomNumber(minRandomNumber, maxRandomNumber);
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

const playEvenGame = () => {
  getBase(description, getRound);
};

export default playEvenGame;
