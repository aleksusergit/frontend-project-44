export default (range) => {
  const rand = [];
  for (let i = 1; i <= range; i += 1) {
    rand.push(i);
  }
  const num = Math.floor(Math.random() * rand.length);
  return rand[num];
};
