/**
 * Counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 * Time Complexity - O(n^2).
 *
 * @param {array} values
 * @return {number}
 */
function countUniqueValues(values) {
  let uniqueValues = [];

  for (let value of values) {
    if (uniqueValues.indexOf(value) > -1) {
      continue;
    } else {
      uniqueValues.push(value);
    }
  }

  return uniqueValues.length;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
