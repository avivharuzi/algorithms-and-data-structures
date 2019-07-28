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
class Stack {
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
   * Add a value to the top of the stack.
   *
   * @param {any} value
   * @return {nunber}
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
   * @return {null|any}
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
