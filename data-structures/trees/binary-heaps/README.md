# Binary Heaps

Very similar to a binary search tree, but with some different rules!
In a MaxBinaryHeap, parent nodes are always larger than child nodes.
In a MinBinaryHeap, parent nodes are always smaller than child node.

## Max Binary Heap

* Each parent has at most two child nodes
* The value of each parent node is always greater than its child nodes
* In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

## Sink Down

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).

## Priority Queue

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

## Big O of Binary Heaps

* Insertion - O(log n)
* Removal - O(log n)
* Search - O(n)
