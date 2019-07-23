/**
 * @param {array} arr
 * @return {array}
 */
function insertionSort(arr) {
  let currentVal;

  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (currentVal < arr[j]) {
        arr[j + 1] = arr[j];

        if (j === 0) {
          arr[0] = currentVal;
        }
      } else {
        arr[j + 1] = currentVal;
        break;
      }
    }
  }

  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [1, 2, 4, 9, 76]
