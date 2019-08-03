/**
 * Returns if number is odd.
 *
 * @param {number} num - The num value.
 * @return {boolean}
 */
const isOdd = num => num % 2 !== 0;

/**
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 *
 * @param {Array<number>} arr - The arr value.
 * @param {Function} cb - The cb value.
 * @return {boolean}
 */
function someRecursive(arr, cb) {
  if (!arr.length) {
    return false;
  }

  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false
