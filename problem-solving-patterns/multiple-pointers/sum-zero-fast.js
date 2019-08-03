/**
 * Finds the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * Time Complexity - O(n).
 * Space Complexity - O(1).
 *
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function sumZero(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
