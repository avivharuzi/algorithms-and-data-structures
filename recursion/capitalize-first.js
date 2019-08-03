/**
 * Given an array of strings, capitalize the first letter of each string in the array.
 *
 * @param {Array<string>} arr - The arr value.
 * @return {Array<string>}
 */
function capitalizeFirst(arr) {
  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].substr(1)];
  }

  const res = capitalizeFirst(arr.slice(0, -1));
  const str = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);

  res.push(str);

  return res;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']
