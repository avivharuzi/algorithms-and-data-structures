/**
 * Accepts an array of arrays and returns new array with all values flattened.
 *
 * @param {Array} oldArr - The oldArr value.
 * @return {Array}
 */
function flatten(oldArr) {
  let newArr = [];

  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }

  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
