/**
 * Calculate from 0 up to the number is given.
 * The slow way.
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
