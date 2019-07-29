/**
 * @class
 */
class Node {
  /**
   * @constructor
   * @param {any} value
   * @param {number} priority
   */
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * @class
 */
class PriorityQueue {
  /**
   * @constructor
   */
  constructor() {
    /** @member {array} */
    this.values = [];
  }

  /**
   * @param {any} value
   * @param {number} priority
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
