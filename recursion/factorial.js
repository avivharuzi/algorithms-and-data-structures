/**
 * Factorial of a number n can be defined as product of all positive numbers less than or equal to n.
 * Multiplying sequence of numbers in a descending order till 1.
 *
 * @param {number} num
 * @return {number}
 */
function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(10)); // 3628800
