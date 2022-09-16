import baseOfGame from '../index.js';
import getRandomNumber from '../utils.js';

const playGcdGame = () => {
  const gameCondition = 'Find the greatest common divisor of given numbers.';
  const minRandomNumber = 1;
  const maxRandomNumber = 30;

  const getGcd = (num1, num2) => (num2 === 0 ? num1 : getGcd(num2, num1 % num2));

  const roundsCount = () => {
    const num1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const num2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const question = `${num1} ${num2}`;
    const answer = String(getGcd(num1, num2));
    return [question, answer];
  };
  baseOfGame(gameCondition, roundsCount);
};

export default playGcdGame;
