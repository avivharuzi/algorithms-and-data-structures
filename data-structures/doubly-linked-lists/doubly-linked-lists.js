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
    /** @member {null|Node} */
    this.prev = null;
  }
}

/**
 * @class
 */
class DoublyLinkedList {
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
   * Adding a node to the end of the Doubly Linked List.
   *
   * @param {any} val
   * @return {DoublyLinkedList}
   */
  push(val) {
    const newNode = new Node(val);

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
   * @return {undefined|Node}
   */
  pop() {
    if (!this.head) {
      return undefined;
    }

    let poppedNode = this.tail;

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
   * @return {undefined|Node}
   */
  shift() {
    if (this.length === 0) {
      return undefined;
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
   * @param {any} val
   * @return {DoublyLinkedList}
   */
  unshift(val) {
    const newNode = new Node(val);

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
   * @param {number} index
   * @return {null|Node}
   */
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let counter, currentHead;

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
   * @param {number} index
   * @param {any} val
   * @return {boolean}
   */
  set(index, val) {
    let foundNode = this.get(index);

    if (!foundNode) {
      return false;
    }

    foundNode.val = val;

    return true;
  }

  /**
   * Adding a node in a Doubly Linked List by a certain position.
   *
   * @param {number} index
   * @param {any} val
   * @return {boolean}
   */
  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

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
   * @param {number} index
   * @return {undefined|Node}
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;

    return removedNode;
  }
}
