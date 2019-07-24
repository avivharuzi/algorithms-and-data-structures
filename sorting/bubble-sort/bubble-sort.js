/**
 * Not optimized.
 *
 * @param {array} arr
 * @return {array}
 */
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, 100, -3])); // [-3, 8, 12, 29, 37, 45, 88, 100]

/**
 * Optimized with noSwaps
 *
 * @param {array} arr
 * @return {array}
 */
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps;

    for (let j = 0; j < i - 1; j++) {
      noSwaps = true;

      if (arr[j] > arr[j + 1]) {
        // Swap numbers
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7, 8]
