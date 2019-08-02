# Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

## Uses For Graphs

* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations

## Essential Graph Terms

* Vertex - a node
* Edge - connection between nodes
* Weighted/Unweighted - values assigned to distances between vertices
* Directed/Undirected - directions assigned to distanced between vertices

## Types of Graphs

### Adjacency List

* Can take up less space (in sparse graphs)
* Faster to iterate over all edges
* Can be slower to lookup specific edge

### Adjacency Matrix

* Takes up more space (in sparse graphs)
* Slower to iterate over all edges
* Faster to lookup specific edge

## Graph Traversal

Visiting/Updating/Checking each vertex in a graph.

### Graph Traversal Uses

* Peer to peer networking
* Web crawlers
* Finding "closest" matches/recommendations
* Shortest path problems
* * GPS Navigation
* * Solving mazes
* * AI (shortest path to win the game)

### Depth First

Explore as far as possible down one branch before "backtracking".

### Breadth First

Visit neighbors at current depth first!
