/**
 * @param {array} arr
 * @return {array}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) {
      // Swap numbers
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17])); // [0, 2, 10, 17, 19, 22, 34]
