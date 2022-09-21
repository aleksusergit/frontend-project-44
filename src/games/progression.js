import getBase from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (begin, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(begin + step * i);
  }
  return progression;
};

const getRound = () => {
  const beginOfProgression = getRandomNumber(0, 30);
  const stepOfProgression = getRandomNumber(1, 7);
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(beginOfProgression, progressionLength, stepOfProgression);
  const indexHiddenItem = getRandomNumber(0, progression.length - 1);

  const hiddenItem = progression.splice(indexHiddenItem, 1, '..');
  const question = progression.join(' ');
  const rightAnswer = String(hiddenItem);

  return [question, rightAnswer];
};
const playProgressionGame = () => {
  getBase(description, getRound);
};

export default playProgressionGame;
