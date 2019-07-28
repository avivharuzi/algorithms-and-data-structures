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
class SinglyLinkedList {
  /**
   * @constructor
   */
  constructor() {
    /** @member {null|Node} */
    this.head = null;
    /** @member {null|Node} */
    this.tail = null;
    /** @member {number} */
    this.length = 0;
  }

  /**
   * Adding a new node to the end of the Linked List.
   *
   * @param {any} value
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
   * @return {undefined|Node}
   */
  pop() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    let newTail = current;

    while (current.next) {
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
   * @return {undefined|Node}
   */
  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
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
   * @param {any} value
   * @return {undefined|Node}
   */
  unshift(value) {
    let newNode = new Node(value);

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
   * @param {number} index
   * @return {null|Node}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter = 0;
    let currentHead = this.head;

    while (counter !== index) {
      currentHead = currentHead.next;
      counter++;
    }

    return currentHead;
  }

  /**
   * Changing the value of a node based on it's position in the Linked List.
   *
   * @param {number} index
   * @param {any} value
   * @return {boolean}
   */
  set(index, value) {
    let foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.value = value;

    return true;
  }

  /**
   * Adding a node to the Linked List at a specific position.
   *
   * @param {number} index
   * @param {any} value
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

    let newNode = new Node(value);
    let prevNode = this.get(index - 1);
    let prevNodeNext = prevNode.next;

    prevNode.next = newNode;
    newNode.next = prevNodeNext;

    this.length++;

    return true;
  }

  /**
   * Removing a node from the Linked List at a specific position.
   *
   * @param {number} index
   * @return {undefined|Node}
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    let prevNode = this.get(index - 1);
    let removedNode = prevNode.next;
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

    let nextHead;
    let prevHead;

    for (let i = 0; i < this.length; i++) {
      nextHead = currentHead.next;
      currentHead.next = prevHead;
      prevHead = currentHead;
      currentHead = nextHead;
    }

    return this;
  }
}
