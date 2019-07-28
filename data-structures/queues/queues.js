/**
 * @class
 */
class Node {
  /**
   * @constructor
   * @param {any} value
   */
  constructor(value) {
    this.value = value;
    /** @member {null|Node} */
    this.next = null;
  }
}

/**
 * @class
 */
class Queue {
  /**
   * @constructor
   */
  constructor() {
    /** @member {null|Node} */
    this.first = null;
    /** @member {null|Node} */
    this.last = null;
    /** @member {number} */
    this.length = 0;
  }

  /**
   * Adding to the beginning of the Queue.
   *
   * @param {any} value
   * @return {number}
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
   * @return {null|any}
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
