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
    this.left = null;
    /** @member {null|Node} */
    this.right = null;
  }
}

/**
 * @class
 */
class BinarySearchTree {
  /**
   * @constructor
   */
  constructor() {
    /** @member {null|Node} */
    this.root = null;
  }

  /**
   * Inserting a node into the binary search tree.
   *
   * @param {any} value
   * @return {undefined|BinarySearchTree}
   */
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      } else {
        return undefined;
      }
    }
  }

  /**
   * Finding a node from binary search tree.
   *
   * @param {any} value
   * @return {undefined|Node}
   */
  find(value) {
    if (this.root === null) {
      return undefined;
    }

    let currentNode = this.root,
      isFound = false;

    while (currentNode !== null && !isFound) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        isFound = true;
      }
    }

    if (!isFound) {
      return undefined;
    }

    return currentNode;
  }

  /**
   * Returns if binay search tree contain the given value.
   *
   * @param {any} value
   * @return {boolean}
   */
  contains(value) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (currentNode > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  /**
   * @return {array}
   */
  breadthFirstSearch() {
    let currentNode = this.root,
      data = [],
      queue = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    return data;
  }

  /**
   * @return {array}
   */
  depthFirstPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node);

      if (node.left !== null) {
        traverse(node.left);
      }

      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }

    /**
   * @return {array}
   */
  depthFirstPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }

      if (node.right !== null) {
        traverse(node.right);
      }

      data.push(node);
    }

    traverse(this.root);

    return data;
  }

      /**
   * @return {array}
   */
  depthFirstInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }

      data.push(node);

      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return data;
  }
}
