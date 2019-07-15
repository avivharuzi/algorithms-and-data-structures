# Big O Notation

Big O Notation is a way to formalize fuzzy counting.
It allows us to talk formally about how the runtime of an algorithm grows as the input grow.
We won't care about the details only the trends.

We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.

* f(n) could be linear (f(n) = n)
* f(n) could be quadratic (f(n) = n)
* f(n) could be constant (f(n) = 1)
* f(n) could be something entirely different!

## Shorthands

1. Arithmetic operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop

## Space Complexity

* Most primitives (booleans, numbers, undefined, null) are constant space
* Strings require O(n) space (where n is the string length)
* Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

## Logarithm

The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

## Logarithm Complexity

* O(1)
* O(log n)
* O(n)
* O(nlog n)
* O(n^2)
