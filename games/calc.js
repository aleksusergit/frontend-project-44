import baseOfGame from '../src/index.js';
import generatorRandom from './genRandom.js';

const playCalcGame = () => {
  const nameOfGame = 'brain-calc';
  const noteToTask = 'What is the result of the expression?';

  const game = () => {
    const element1 = generatorRandom(100);
    const element2 = generatorRandom(100);

    const signs = ['+', '-', '*'];
    const sign = signs[generatorRandom(3)];

    const question = `${element1} ${sign} ${element2}`;
    let result = 0;

    switch (sign) {
      case '+':
        result = element1 + element2;
        break;
      case '-':
        result = element1 - element2;
        break;
      case '*':
        result = element1 * element2;
        break;
      default:
        result = 0;
    }
    const resultToString = String(result);
    return [question, resultToString];
  };
  baseOfGame(nameOfGame, noteToTask, game);
};

export default playCalcGame;
