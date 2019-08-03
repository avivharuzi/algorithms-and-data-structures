/**
 * Class representing a hash table.
 *
 * @class
 */
class HashTable {
  /**
   * Create a hash table.
   *
   * @constructor
   * @param {number} [size=53] - The size value.
   */
  constructor(size = 53) {
    /** @property {Array} */
    this.keyMap = new Array(size);
  }

  /**
   * Generate a hash from given key.
   *
   * @param {string} key - The key value.
   * @return {number}
   */
  _hash(key) {
    const WEIRD_PRIME = 31;

    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i],
        value = char.charCodeAt(0) - 96;

      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  /**
   * Set the key value into keyMap.
   *
   * @param {string} key - The key value.
   * @param {*} value - The value value.
   */
  set(key, value) {
    const index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);
  }

  /**
   * Get the value from keyMap by key.
   *
   * @param {string} key - The key value.
   * @return {*}
   */
  get(key) {
    const index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return;
  }

  /**
   * Returns all the keys from keyMap.
   *
   * @return {Array}
   */
  keys() {
    const keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }

      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (keysArr.includes(this.keyMap[i][j][0])) {
          continue;
        }

        keysArr.push(this.keyMap[i][j][0]);
      }
    }

    return keysArr;
  }

  /**
   * Returns all the values from keyMap.
   *
   * @return {Array}
   */
  values() {
    const valuesArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }

      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (valuesArr.includes(this.keyMap[i][j][1])) {
          continue;
        }

        valuesArr.push(this.keyMap[i][j][1]);
      }
    }

    return valuesArr;
  }
}
