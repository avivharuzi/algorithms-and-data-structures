/**
 * @param {array} arr
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swap point
  swap(arr, start, swapIdx);
  return swapIdx;
}

/**
 * @param {array} arr
 * @return {array}
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);

    // Left
    quickSort(arr, left, pivotIdx - 1);

    // Right
    quickSort(arr, pivotIdx + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3])); // [1, 2, 3, 4, 5, 6, 9]
