/**
 * @class
 */
class Node {
  /**
   * @constructor
   * @param {any} val
   */
  constructor(val) {
    this.val = val;
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
   * @param {any} val
   * @return {nunber}
   */
  push(val) {
    const newNode = new Node(val);

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
   * @return {any}
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

    return currentFirst.val;
  }
}
