# Sorting

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

## Content

* [Bubble Sort](bubble-sort)
* [Selection Sort](selection-sort)
* [Insertion Sort](insertion-sort)
* [Merge Sort](merge-sort)
* [Quick Sort](quick-sort)
* [Radix Sort](radix-sort)

## Examples

* Sorting numbers from smallest to largest
* Sorting names alphabetically
* Sorting movies based on release year
* Sorting movies based on revenue

## Swap

Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order).

```js
// ES5
function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
```

```js
// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}
```

![Sorting](/images/sorting.png)
