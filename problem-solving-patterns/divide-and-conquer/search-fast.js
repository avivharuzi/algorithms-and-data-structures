/**
 * Binary Search.
 * Accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 * Time Complexity - O(log n).
 *
 * @param {Array<number>} arr - The arr value.
 * @param {number} val - The val value.
 * @return {number}
 */
function search(arr, val) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2),
      currentElement = arr[middle];

    if (currentElement < val) {
      left = middle + 1;
    } else if (currentElement > val) {
      right = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
