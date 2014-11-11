Graph Drawer
============

Given an adjacency lists representation of a graph in json, draw a directed graph using d3 force layout. The expected graph representation should be in the following format:

```
{
    "0": ["1", "3"],
    "1": ["3", "4"],
    "2": [],
    "3": ["2"],
    "4": ["3"],
    "5": ["0"]
}
```
