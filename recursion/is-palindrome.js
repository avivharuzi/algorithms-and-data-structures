/**
 * Returns true if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 *
 * @param {string} str - The str value.
 * @return {boolean}
 */
function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  if (str.length === 2) {
    return str[0] === str[1];
  }

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false
