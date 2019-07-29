/**
 * @class
 */
class MaxBinaryHeap {
  /**
   * @constructor
   */
  constructor() {
    /** @member {array} */
    this.values = [];
  }

  /**
   * @param {any} value
   */
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const value = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2),
        parentValue = this.values[parentIndex];

      if (value <= parentValue) {
        break;
      }

      this.values[parentIndex] = value;
      this.values[index] = parentValue;
      index = parentIndex;
    }
  }

  extractMax() {
    const maxValue = this.values[0],
      endValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = endValue;
      this.sinkDown();
    }

    return maxValue;
  }

  sinkDown() {
    let index = 0;

    const length = this.values.length,
      value = this.values[0];

    while (true) {
      let lefChildIndex = 2 * index + 1,
        rightChildIndex = 2 * index + 2,
        leftChildValue,
        rightChildValue,
        swapIndex = null;

      if (lefChildIndex < length) {
        leftChildValue = this.values[lefChildIndex];

        if (leftChildValue > value) {
          swapIndex = lefChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildValue = this.values[rightChildIndex];

        if (
          (swapIndex === null && rightChildValue > value) ||
          (swapIndex !== null && rightChildValue > leftChildValue)
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
