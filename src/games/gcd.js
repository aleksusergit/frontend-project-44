import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const gameCondition = 'Find the greatest common divisor of given numbers.';
const minRandomNumber = 1;
const maxRandomNumber = 30;

const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

const getRound = () => {
  const num1 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const num2 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return [question, answer];
};

const playGcdGame = () => {
  getBase(gameCondition, getRound);
};

export default playGcdGame;
