/**
 * Finds all all of the values which are numbers and convert them to strings.
 *
 * @param {Object} obj - The obj value.
 * @return {Object}
 */
function stringifyNumbers(obj) {
  const newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
};

console.log(stringifyNumbers(obj)); // { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }
