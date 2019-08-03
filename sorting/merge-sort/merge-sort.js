/**
 * Merge between two arrays together.
 *
 * @param {Array<number>} arr1 - The arr1 value.
 * @param {Array<number>} arr2 - The arr2 value.
 * @return {Array<number>}
 */
function merge(arr1, arr2) {
  const mergedArr = [];

  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      mergedArr.push(arr1[i]);
      i++;
    } else {
      mergedArr.push(arr2[j])
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArr.push(arr1[i])
    i++;
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j])
    j++;
  }

  return mergedArr;
}

/**
 * Sorting the array using merge sort algorithm.
 *
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9])); // [1, 9, 10, 24, 72, 73, 76]
