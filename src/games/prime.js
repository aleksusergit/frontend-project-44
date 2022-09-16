import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRangeOfNumber = 0;
const maxRangeOfNumber = 100;
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const sqrtNumber = Math.sqrt(number);
  for (let i = 2; i <= sqrtNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const generatedNumber = getRandomNumber(minRangeOfNumber, maxRangeOfNumber);
  const result = isPrime(generatedNumber) ? 'yes' : 'no';
  const question = generatedNumber;
  return [question, result];
};

const playGame = () => {
  getBase(gameCondition, getRound);
};

export default playGame;
