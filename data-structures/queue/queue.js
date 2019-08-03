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
   */
  constructor(value) {
    this.value = value;
    /** @property {(null|Node)} */
    this.next = null;
  }
}

/**
 * Class representing a queue.
 *
 * @class
 */
class Queue {
  /**
   * Create a queue.
   *
   * @constructor
   */
  constructor() {
    /** @property {(null|Node)} */
    this.first = null;
    /** @property {(null|Node)} */
    this.last = null;
    /** @property {number} */
    this.length = 0;
  }

  /**
   * Adding to the beginning of the Queue.
   *
   * @param {*} value - The value value.
   * @return {number
   */
  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.length;
  }

  /**
   * Removing from the beginning of the Queue.
   *
   * @return {null|*}
   */
  dequeue() {
    if (!this.first) {
      return null;
    }

    const currentFirst = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;

    this.length--;

    return currentFirst.value;
  }
}
