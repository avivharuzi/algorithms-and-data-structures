/**
 * Finding the index where the pivot should end up in the sorted array.
 *
 * @param {Array<number>} arr - The arr value.
 * @param {number} start - The start value.
 * @param {number} end - The end value.
 * @return {number}
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  /**
   * Swap betweeen two array values.
   *
   * @param {Array<number>} arr - The arr value.
   * @param {number} i - The i value.
   * @param {number} j - The j value.
   */
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // We are assuming the pivot is always the first element.
  let pivot = arr[start],
    swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  // Swap the pivot from the start the swap point.
  swap(arr, start, swapIndex);
  
  return swapIndex;
}

/**
 * Sorting the array using quick sort algorithm.
 *
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    // Left side.
    quickSort(arr, left, pivotIndex - 1);

    // Right side.
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3])); // [1, 2, 3, 4, 5, 6, 9]
