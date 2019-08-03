/**
 * Class representing a node.
 *
 * @class
 */
class Node {
  /**
   * Create a node.
   *
   * @constructor
   * @param {*} value - The value value.
   * @param {number} priority - The priority value.
   */
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * Class representing a priority queue.
 *
 * @class
 */
class PriorityQueue {
  /**
   * Create a priority queue.
   *
   * @constructor
   */
  constructor() {
    /** @property {Array} */
    this.values = [];
  }

  /**
   * @param {*} value - The value value.
   * @param {number} priority - The priority value.
   */
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2),
        parentValue = this.values[parentIndex];

      if (element.priority >= parentValue.priority) {
        break;
      }

      this.values[parentIndex] = element;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  dequeue() {
    const minValue = this.values[0],
      endValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = endValue;
      this.sinkDown();
    }

    return minValue;
  }

  sinkDown() {
    let index = 0;

    const length = this.values.length,
      value = this.values[0];

    while (true) {
      let leftChildIndex = 2 * index + 1,
        rightChildIndex = 2 * index + 2
        leftChildValue,
        rightChildValue,
        swapIndex = null;

      if (leftChildIndex < length) {
        leftChildValue = this.values[leftChildIndex];

        if (leftChildValue.priority < value.priority) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];

        if (
          (swapIndex === null && rightChildValue.priority < value.priority) ||
          (swapIndex !== null && rightChildValue.priority < leftChildValue.priority)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = value;
      index = swapIndex;
    }
  }
}
