import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const gameCondition = 'What number is missing in the progression?';
const minRangeForBegin = 0;
const maxRangeForBegin = 30;
const minRangeForStep = 1;
const maxRangeForStep = 7;
const minProgressionLength = 5;
const maxProgressionLength = 10;

const getProgression = (begin, end, step) => {
  const progression = [];
  let result = begin;
  for (let i = begin; i < end; i += step) {
    progression.push(result);
    result += Number(step);
  }
  return progression;
};
/* const getProgression = (begin, end, step) => {
  console.log(begin, end, step);
  const progression = [];
  let result = begin;
  for (let i = 0; i < end; i += step) {
    progression.push(result);
    result += Number(step);
  }
  return progression;
}; */

const getRound = () => {
  const beginOfProgression = getRandomNumber(minRangeForBegin, maxRangeForBegin);
  const stepOfProgression = getRandomNumber(minRangeForStep, maxRangeForStep);
  const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
  const endOfProgression = beginOfProgression + stepOfProgression * progressionLength;
  const progression = getProgression(beginOfProgression, endOfProgression, stepOfProgression);

  const minRangeOfIndex = 0;
  const maxRangeOfIndex = progression.length - 1;
  const indexHiddenItem = getRandomNumber(minRangeOfIndex, maxRangeOfIndex);

  const hiddenItem = progression.splice(indexHiddenItem, 1, '..');
  const question = progression.join(' ');

  const resultToString = String(hiddenItem);

  return [question, resultToString];
};
const playProgressionGame = () => {
  getBase(gameCondition, getRound);
};

export default playProgressionGame;
