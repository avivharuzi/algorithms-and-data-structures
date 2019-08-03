/**
 * Given an array of words, return a new array containing each word capitalized.
 *
 * @param {Array<string>} arr - The arr value.
 * @return {Array<string>}
 */
function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  const res = capitalizeWords(arr.slice(0, -1));

  res.push(arr.slice(arr.length - 1)[0].toUpperCase());

  return res;
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])); // ['I', 'AM', 'LEARNING', 'RECURSION']
