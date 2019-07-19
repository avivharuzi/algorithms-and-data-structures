/**
 * Helper method recursion.
 *
 * @param {array} arr
 * @return {array}
 */
function collectOddValues(arr) {
  let result = []

  /**
   * @param {array} helperInput
   */
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 3, 5, 7, 9]

/**
 * Pure recursion.
 *
 * @param {array} arr
 */
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5])); // [1, 3, 5]
