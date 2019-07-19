/**
 * Calculates the sum of all numbers from 1 up to (and including) some number n.
 * Time Complexity - O(n).
 *
 * @param {number} n
 * @return {number}
 */
function addUpTo(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

console.log(addUpTo(10)); // 55
console.log(addUpTo(50)); // 1275
console.log(addUpTo(100)); // 5050
