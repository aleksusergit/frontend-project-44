import baseOfGame from '../src/index.js';
import generatorRandom from './genRandom.js';

const playCalcGame = () => {
  const nameOfGame = 'brain-progression';
  const noteToTask = 'What number is missing in the progression?';

  const game = () => {
    const startOfProgression = generatorRandom(30);
    const stepOfProgression = generatorRandom(7);
    const progressionLength = generatorRandom(5) + 5;
    const endOfProgression = startOfProgression + stepOfProgression * progressionLength;

    const progressionArray = [];
    let progression = startOfProgression;
    for (let i = startOfProgression; i < endOfProgression; i += stepOfProgression) {
      progressionArray.push(progression);
      progression += Number(stepOfProgression);
    }

    const hiddenIndexArray = generatorRandom(progressionLength - 1);
    const partOne = progressionArray.slice(0, hiddenIndexArray);
    const partTwo = progressionArray.slice(hiddenIndexArray + 1);
    const resultArray = partOne.concat('..', partTwo).join(' ');

    const question = resultArray;
    const resultToString = String(progressionArray[hiddenIndexArray]);

    return [question, resultToString];
  };
  baseOfGame(nameOfGame, noteToTask, game);
};

export default playCalcGame;
