/**
 * Returns the digit in num at the given i value.
 *
 * @param {number} num
 * @param {number} i
 * @return {number}
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns the number of digits in num.
 *
 * @param {number} num
 * @return {number}
 */
function digitCount(num) {
  if (num === 0) {
    return 1;
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * Given an array of numbers, returns the number of digits in the largest numbers in the list.
 *
 * @param {array} nums
 * @return {array}
 */
function mostDigits(nums) {
  let maxDigits = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

/**
 * @param {array} nums
 * @return {array}
 */
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);

      digitBuckets[digit].push(nums[j]);
    }

    nums = [].concat(...digitBuckets);
  }

  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852])); // [12, 23, 345, 2345, 5467, 9852]
