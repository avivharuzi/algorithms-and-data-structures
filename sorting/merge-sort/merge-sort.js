/**
 * @param {array} arr1
 * @param {array} arr2
 * @return {array}
 */
function merge(arr1, arr2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j])
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results;
}

/**
 * @param {array} arr
 * @return {array}
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
