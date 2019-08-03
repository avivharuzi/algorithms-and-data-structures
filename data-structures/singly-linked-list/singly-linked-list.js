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
 * Class representing a singly linked list.
 *
 * @class
 */
class SinglyLinkedList {
  /**
   * Create a singly linked list.
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
   * Adding a new node to the end of the Linked List.
   *
   * @param {*} value - The value value.
   * @return {SinglyLinkedList}
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Removing a node from the end of the Linked List.
   *
   * @return {Node}
   */
  pop() {
    if (!this.head) {
      return;
    }

    let currentHead = this.head,
      newTail = currentHead;

    while (currentHead.next) {
      newTail = currentHead;
      currentHead = currentHead.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }

  /**
   * Removing a new node from the beginning of the Linked List.
   *
   * @return {Node}
   */
  shift() {
    if (!this.head) {
      return;
    }

    const currentHead = this.head;
    this.head = currentHead.next;

    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  /**
   * Adding a new node to the beginning of the Linked List.
   *
   * @param {*} value - The value value.
   * @return {SinglyLinkedList}
   */
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  /**
   * Retrieving a node by it's position in the Linked List.
   *
   * @param {number} index - The index value.
   * @return {(null|Node)}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0,
      currentHead = this.head;

    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }

    return currentHead;
  }

  /**
   * Changing the value of a node based on it's position in the Linked List.
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
   * Adding a node to the Linked List at a specific position.
   *
   * @param {number} index - The index value.
   * @param {*} value - The value value.
   * @return {boolean}
   */
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const newNode = new Node(value),
      prevNode = this.get(index - 1),
      prevNodeNext = prevNode.next;

    prevNode.next = newNode;
    newNode.next = prevNodeNext;

    this.length++;

    return true;
  }

  /**
   * Removing a node from the Linked List at a specific position.
   *
   * @param {number} index - The index value.
   * @return {Node}
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const prevNode = this.get(index - 1),
      removedNode = prevNode.next;

    prevNode.next = removedNode.next;

    this.length--;

    return removedNode;
  }

  /**
   * Reversing the Linked List in place.
   *
   * @return {SinglyLinkedList}
   */
  reverse() {
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;

    let nextHead,
      prevHead;

    for (let i = 0; i < this.length; i++) {
      nextHead = currentHead.next;
      currentHead.next = prevHead;
      prevHead = currentHead;
      currentHead = nextHead;
    }

    return this;
  }
}
