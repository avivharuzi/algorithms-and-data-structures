# Recursion

A process (a function in our case) that calls itself.

Invoke the same function with a different input until you reach your base case.

## Base Case

The condition when the recursion ends.

## Where things go wrong

* No base case
* Forgetting to return or returning the wrong thing
* Stack overflow

## Pure Recursion Tips

* For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
* Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
* To make copies of objects use Object.assign, or the spread operator

## What about big O?

* Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input
* Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory
