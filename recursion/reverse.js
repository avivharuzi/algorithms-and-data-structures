/**
 * Returns a new string in reverse.
 *
 * @param {string} str
 * @return {string}
 */
function reverse(str) {
  if (str.length === 1) {
    return str;
  }

  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'
