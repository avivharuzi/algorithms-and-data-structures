# Hash Table

Hash table is used to store key-value pairs.
Is like array, but the keys are not ordered.
Unlike array, hash table is fast for all of the following operations: finding values, adding new values, and removing values.

## The Hash Function

To implement a hash table, we'll be using an array.
In order to look up values by key, we need a way to convert keys into valid array indices.
A function that performs this task is called a hash function.

## Whats makes a good Hash?

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

## Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.
There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining
2. Linear Probing

### Separate Chaining

With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).
This allows us to store multiple key-value pairs at the same index.

### Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.
Unlike with separate chaining, this allows us to store a single key-value at each index.

## Set / Get

### Set

1. Accepts a key and a value
2. Hashes the key
3. Stores the key-value pair in the hash table array via separate chaining

### Get

1. Accepts a key
2. Hashes the key
3. Retrieves the key-value pair in the hash table
4. If the key isn't found, returns undefined

## Keys / Values

### Keys

1. Loops through the hash table array and returns an array of keys in the table

### Values

1. Loops through the hash table array and returns an array of values in the table

## Big O of Hash Table

1. Insert - O(1)
2. Deletion - O(1)
3. Access - O(1)
