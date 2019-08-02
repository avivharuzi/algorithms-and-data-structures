/**
 * Sorting the array using selection sort algorithm.
 *
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      // Swap numbers.
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17])); // [0, 2, 10, 17, 19, 22, 34]
