# Dijkstra's Algorithm

* One of the most famous and widely used algorithms around!
* Finds the shortest path between two vertices on a graph
* "What's the fastest way to get from point A to point B?"

## Who Was He?

* Edsger Dijkstra was a Dutch programmer, physicist, essayist, and all around smarty-pants
* He helped to advance the field of computer science from an "art" to an academic discipline
* Many of his discoveries and algorithms are still commonly used to this day.

## Why Is It Useful?

* GPS - finding fastest route
* Network Routing - finds open shortest path for data
* Biology - used to model the spread of viruses among humans
* Airline tickets - finding cheapest route to your destination
* Many other uses!

# The Approach

1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we’re checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.
