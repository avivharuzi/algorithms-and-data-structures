/**
 * @param {string} word
 * @return {array}
 */
function matchTable(word) {
  let arr = Array.from({ length: word.length }).fill(0);
  let suffixEnd = 1;
  let prefixEnd = 0;

  while (suffixEnd < word.length) {
    if (word[suffixEnd] === word[prefixEnd]) {
      // We can build a longer prefix based on this suffix
      // Store the length of this longest prefix
      // Move prefixEnd and suffixEnd
      prefixEnd += 1;
      arr[suffixEnd] = prefixEnd;
      suffixEnd += 1;
    } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
      // There's a mismatch, so we can't build a larger prefix
      // Move the prefixEnd to the position of the next largest prefix
      prefixEnd = arr[prefixEnd - 1];
    } else {
      // We can't build a proper prefix with any of the proper suffixes
      // Let's move on
      arr[suffixEnd] = 0;
      suffixEnd += 1;
    }
  }

  return arr;
}

/**
 * @param {string} long
 * @param {string} short
 * @return {number}
 */
function kmpSearch(long, short) {
  let table = matchTable(short);
  let shortIdx = 0;
  let longIdx = 0;
  let count = 0;

  while (longIdx < long.length - short.length + shortIdx + 1) {
    if (short[shortIdx] !== long[longIdx]) {
      // We found a mismatch :(
      // If we just started searching the short, move the long pointer
      // Otherwise, move the short pointer to the end of the next potential prefix
      // That will lead to a match
      if (shortIdx === 0) longIdx += 1;
      else shortIdx = table[shortIdx - 1];
    } else {
      // We found a match! shift both pointers
      shortIdx += 1;
      longIdx += 1;
      // Then check to see if we've found the substring in the large string
      if (shortIdx === short.length) {
        // We found a substring! increment the count
        // Then move the short pointer to the end of the next potential prefix
        count++;
        shortIdx = table[shortIdx - 1];
      }
    }
  }

  return count;
}

console.log(kmpSearch('lorie loled', 'lol')); // 1
