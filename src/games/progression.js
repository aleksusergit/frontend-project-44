import baseOfGame from '../index.js';
import getRandomNumber from '../utils.js';

const playProgressionGame = () => {
  const gameCondition = 'What number is missing in the progression?';
  const minRangeForBegin = 0;
  const maxRangeForBegin = 30;
  const minRangeForStep = 1;
  const maxRangeForStep = 7;
  const minProgressionLength = 5;
  const maxProgressionLength = 10;

  const getProgression = (begin, end, step) => {
    const progressionArray = [];
    let progression = begin;
    for (let i = begin; i < end; i += step) {
      progressionArray.push(progression);
      progression += Number(step);
    }
    return progressionArray;
  };

  const roundsCount = () => {
    const beginOfProgression = getRandomNumber(minRangeForBegin, maxRangeForBegin);
    const stepOfProgression = getRandomNumber(minRangeForStep, maxRangeForStep);
    const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
    const endOfProgression = beginOfProgression + stepOfProgression * progressionLength;
    const progression = getProgression(beginOfProgression, endOfProgression, stepOfProgression);
    const minRangeOfIndex = 0;
    const maxRangeOfIndex = progression.length - 1;
    const hiddenIndexOfArrayOfProgression = getRandomNumber(minRangeOfIndex, maxRangeOfIndex);
    const hiddenNumber = progression[hiddenIndexOfArrayOfProgression];
    const partOneOfProgression = progression.slice(0, hiddenIndexOfArrayOfProgression);
    const partTwoOfProgression = progression.slice(hiddenIndexOfArrayOfProgression + 1);
    const resultArray = partOneOfProgression.concat('..', partTwoOfProgression).join(' ');

    const question = resultArray;
    const resultToString = String(hiddenNumber);

    return [question, resultToString];
  };
  baseOfGame(gameCondition, roundsCount);
};

export default playProgressionGame;
