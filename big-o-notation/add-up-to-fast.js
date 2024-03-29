/**
 * Calculates the sum of all numbers from 1 up to (and including) some number num.
 * Time Complexity - O(1).
 *
 * @param {number} num - The num value.
 * @return {number}
 */
function addUpTo(num) {
  return num * (num + 1) / 2;
}

console.log(addUpTo(10)); // 55
console.log(addUpTo(50)); // 1275
console.log(addUpTo(100)); // 5050
