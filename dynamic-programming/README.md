# Dynamic Programming

A method for solving a complex problem by breaking it down into a collection of simpler sub problems, solving each of those sub problems just once, and storing their solutions.

## Overlapping Sub Problems

A problem is said to have overlapping sub problems if it can be broken down into sub problems which are reused several times.

## Optimal Substructure

A problem is said to have optimal substructure if an optimal solution can be constructed from optimal solutions of its sub problems.

## Memoization

Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

```js
function fibonacci(num, memo = []) {
  if (memo[num] !== undefined) {
    return memo[num];
  }
  if (num <= 2) {
    return 1;
  }
  const result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  memo[num] = result;
  return result;
}
```

## Tabulation

Storing the result of a previous result in a "table" (usually an array).
Usually done using iteration.
Better space complexity can be achieved using tabulation.

```js
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[num];
}
```
