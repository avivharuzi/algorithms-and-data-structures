/**
 * Class representing a priority queue.
 *
 * @class
 */
class PriorityQueue {
  /**
   * Create a priority queue.
   *
   * @constructor
   */
  constructor() {
    /** @property {Array} */
    this.values = [];
  }

  /**
   * Enqueue value into values array.
   *
   * @param {*} val
   * @param {number} priority
   */
  enqueue(val, priority) {
    this.values.push({
      val,
      priority
    });

    this.sort();
  };

  /**
   * Dequeue value from values array.
   *
   * @return {*}
   */
  dequeue() {
    return this.values.shift();
  };

  /**
   * Sort values array.
   */
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

/**
 * Class representing a weighted graph.
 *
 * @class
 */
class WeightedGraph {
  /**
   * Create a weighted graph.
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
   * Add connection between two vertices with weight number.
   *
   * @param {*} vertex1 - The vertex1 value.
   * @param {*} vertex2 - The vertex2 value.
   * @param {number} weight - The weight value.
   */
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight
    });

    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight
    });
  }

  /**
   * Finds the shortest path using dijkstra algorithm.
   *
   * @param {*} start - The start value.
   * @param {*} finish - The finish value.
   * @return {Array}
   */
  dijkstra(start, finish) {
    const nodes = new PriorityQueue(),
      distances = {},
      previous = {};

    let path = [],
      smallest;

    // Build up initial state.
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // As long as there is something to visit.
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // We are done.
        // Build up path to return at end.
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node.
          const nextNode = this.adjacencyList[smallest][neighbor];

          // Calculate new distance to neighboring node.
          const candidate = distances[smallest] + nextNode.weight,
            nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor.
            distances[nextNeighbor] = candidate;

            // Updating previous - How we got to neighbor.
            previous[nextNeighbor] = smallest;

            // Enqueue in priority queue with new priority.
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}
