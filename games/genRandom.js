export default (range) => {
  const rand = [];
  for (let i = 0; i < range; i += 1) {
    rand.push(i);
  }
  const num = Math.floor(Math.random() * rand.length);
  return num;
};

// export { generatorRandom };

/* const generatorNumber = () => {
  const num = Math.round(Math.random() * 100);
  // console.log('Сгенерированное число = ', num);
  return num;
};
const generatorSign = (arr = ['+', '-', '*']) => {
  const rand = Math.floor(Math.random() * arr.length);
  const sing = arr[rand];
  // console.log(sing);
  return sing;
};
// const arr = ['+', '-', '*'];
*/
