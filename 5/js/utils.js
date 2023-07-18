function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
const createPhotosArray = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export {createPhotosArray};
export {getRandomInteger};
