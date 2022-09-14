import baseOfGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const playCalcGame = () => {
  const gameCondition = 'What is the result of the expression?';
  const minRandomNumber = 0;
  const maxRandomNumber = 20;

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
  const roundsCount = () => {
    const element1 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const element2 = getRandomNumber(minRandomNumber, maxRandomNumber);
    const signs = ['+', '-', '*'];
    const sign = signs[getRandomIndex(signs)];

    const question = `${element1} ${sign} ${element2}`;
    const result = calculate(element1, element2, sign);
    const answer = String(result);
    return [question, answer];
  };
  baseOfGame(gameCondition, roundsCount);
};

export default playCalcGame;
