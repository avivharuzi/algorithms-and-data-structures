/**
 * Sum numbers starting from num using recursion
 *
 * @param {number} num
 * @return {number}
 */
function sumRange(num) {
  if (num === 1) {
    return 1;
  }

  return num + sumRange(num - 1);
}

console.log(sumRange(4)); // 10
