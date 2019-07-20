/**
 * Should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow().
 *
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
