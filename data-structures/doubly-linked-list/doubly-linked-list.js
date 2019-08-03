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
    /** @property {(null|Node)} */
    this.prev = null;
  }
}

/**
 * Class representing a doubly linked list.
 *
 * @class
 */
class DoublyLinkedList {
  /**
   * Create a doubly linked list.
   *
   * @constructor
   */
  constructor() {
    /** @property {(null|Node)} */
    this.head = null;
    /** @property {(null|Node)} */
    this.tail = null;
    /** @property {number} */
    this.length = 0;
  }

  /**
   * Adding a node to the end of the Doubly Linked List.
   *
   * @param {*} value - The value value.
   * @return {DoublyLinkedList}
   */
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Removing a node from the end of the Doubly Linked List.
   *
   * @return {Node}
   */
  pop() {
    if (!this.head) {
      return;
    }

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;

    return poppedNode;
  }

  /**
   * Removing a node from the beginning of the Doubly Linked List.
   *
   * @return {Node}
   */
  shift() {
    if (this.length === 0) {
      return;
    }

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  /**
   * Adding a node to the beginning of the Doubly Linked List.
   *
   * @param {*} value - The value value.
   * @return {DoublyLinkedList}
   */
  unshift(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Accessing a node in a Doubly Linked List by its position.
   *
   * @param {number} index - The index value.
   * @return {(null|Node)}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter,
      currentHead;

    if (index <= this.length / 2) {
      counter = 0;
      currentHead = this.head;

      while (counter !== index) {
        currentHead = currentHead.next;
        counter++;
      }

      return currentHead;
    } else {
      counter = this.length - 1;
      currentHead = this.tail;

      while (counter !== index) {
        currentHead = currentHead.prev;
        counter--;
      }
    }

    return currentHead;
  }

  /**
   * Replacing the value of a node to the in a Doubly Linked List.
   *
   * @param {number} index - The index value.
   * @param {*} value - The value value.
   * @return {boolean}
   */
  set(index, value) {
    const foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.value = value;

    return true;
  }

  /**
   * Adding a node in a Doubly Linked List by a certain position.
   *
   * @param {number} index - The index value.
   * @param {*} value - The value value.
   * @return {boolean}
   */
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const newNode = new Node(value),
      beforeNode = this.get(index - 1),
      afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;

    return true;
  }

  /**
   * Removing a node in a Doubly Linked List by a certain position.
   *
   * @param {number} index - The index value.
   * @return {Node}
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index),
      beforeNode = removedNode.prev,
      afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}
