/**
 * gets a number and returns string after concatenating px with the number
 * @param { number} num ie 10
 * @returns {string} ie. 10px
 */
const toPx = (num) => {
  return `${num}px`;
};

/**
 * generates random integer between min and max number
 * @param {number} min : lowest range of number that is to generate
 * @param {*} max : higest range of number
 * @returns {number} : randomly generated number between min and max
 */
const createRandomInt = (min = 0, max = 1) => {
  return Math.round(Math.random() * (max - min)) + min;
};
