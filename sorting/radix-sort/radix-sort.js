/**
 * Returns the digit in num at the given i value.
 *
 * @param {number} num - The num value.
 * @param {number} i - The i value.
 * @return {number}
 */
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * Returns the number of digits in num.
 *
 * @param {number} num - The num value.
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
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function mostDigits(arr) {
  let maxDigits = 0;

  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }

  return maxDigits;
}

/**
 * Sorting the array using radix sort algorithm.
 *
 * @param {Array<number>} arr - The arr value.
 * @return {Array<number>}
 */
function radixSort(arr) {
  const maxDigitCount = mostDigits(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);

      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852])); // [12, 23, 345, 2345, 5467, 9852]
