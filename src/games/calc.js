import baseOfGame from '../index.js';
import getRandomNumber from '../utils.js';

const signs = ['+', '-', '*'];

const calculate = (element1, element2, sign) => {
  switch (sign) {
    case '+':
      return element1 + element2;
    case '-':
      return element1 - element2;
    case '*':
      return element1 * element2;
    default:
      return null;
  }
};

const playCalcGame = () => {
  const gameCondition = 'What is the result of the expression?';
  const minRandomNumber = 0;
  const maxRandomNumber = 20;

  const roundsCount = () => {
    const element1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const element2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const sign = signs[getRandomNumber(0, signs.length - 1)];

    const question = `${element1} ${sign} ${element2}`;
    const result = calculate(element1, element2, sign);
    const answer = String(result);
    return [question, answer];
  };
  baseOfGame(gameCondition, roundsCount);
};

export default playCalcGame;
