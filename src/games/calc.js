import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';
const minRandomNumber = 0;
const maxRandomNumber = 20;
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
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const getRound = () => {
  const element1 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const element2 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const sign = signs[getRandomNumber(0, signs.length - 1)];

  const question = `${element1} ${sign} ${element2}`;
  const result = calculate(element1, element2, sign);
  const answer = String(result);
  return [question, answer];
};

const playCalcGame = () => {
  getBase(description, getRound);
};

export default playCalcGame;
