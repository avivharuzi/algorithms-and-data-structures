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
 * Class representing a stack.
 *
 * @class
 */
class Stack {
  /**
   * Create a stack.
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
   * Add a value to the top of the stack.
   *
   * @param {*} value - The value value.
   * @return {number}
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const currentFirst = this.first;
      this.first = newNode;
      this.first.next = currentFirst;
    }

    return ++this.length;
  }

  /**
   * Remove a value from the top of the stack.
   *
   * @return {null|*}
   */
  pop() {
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
