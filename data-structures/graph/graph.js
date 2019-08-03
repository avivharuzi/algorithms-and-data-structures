/**
 * Class representing a graph.
 *
 * @class
 */
class Graph {
  /**
   * Create a graph.
   *
   * @constructor
   */
  constructor() {
    /** @property {Object} */
    this.adjacencyList = {};
  }

  /**
   * Add vertex to adjacencyList.
   *
   * @param {*} vertex - The vertex value.
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  /**
   * Add connection between two vertices.
   *
   * @param {*} vertex1 - The vertex1 value.
   * @param {*} vertex2 - The vertex2 value.
   */
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Remove connection between two vertices.
   *
   * @param {*} vertex1 - The vertex1 value.
   * @param {*} vertex2 - The vertex2 value.
   */
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }

  /**
   * Remove vertex from adjacencyList.
   *
   * @param {*} vertex - The vertex value.
   */
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacencyVertex);
    }

    delete this.adjacencyList[vertex];
  }

  /**
   * Implements depth first recursive in a graph.
   *
   * @param {*} startVertex - The startVertex value.
   * @return {null|*}
   */
  depthFirstRecursive(startVertex) {
    const result = [],
      visited = {},
      adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) {
        return null;
      }

      visited[vertex] = true;

      result.push(vertex);

      adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }

    dfs(startVertex);

    return result;
  }

  /**
   * Implements depth first iterative in a graph.
   *
   * @param {*} startVertex - The startVertex value.
   * @return {*}
   */
  depthFirstIterative(startVertex) {
    const result = [],
      visited = {},
      stack = [startVertex];

    let currentVertex;

    visited[startVertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  /**
   * Implements breadth first in a graph.
   *
   * @param {*} startVertex - The startVertex value.
   * @return {*}
   */
  breadthFirst(startVertex) {
    const result = [],
      visited = {},
      queue = [startVertex];

    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}
