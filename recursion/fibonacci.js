/**
 * Returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1, and where every number there after is equal to the sum of the previous two numbers.
 *
 * @param {number} num - The num value.
 * @return {number}
 */
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4)); // 3
console.log(fibonacci(10)); // 55
console.log(fibonacci(28)); // 317811
console.log(fibonacci(35)); // 9227465
