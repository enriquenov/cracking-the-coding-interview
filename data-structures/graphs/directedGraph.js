import Stack from '../stack.js';

function topSortHelper(nodeName, visited, sortedStack) {
  visited[nodeName] &&
    visited[nodeName].forEach(course => {
      if (!visited[course]) {
        topSortHelper(course, visited, sortedStack);
      }
    });

  sortedStack.push(nodeName);
}

function topSort(graph) {
  let len = graph.length;
  let ordering = new Array(len);
  let idx = len - 1;

  // Create a set to track visited nodes.
  const visited = {};

  // Create a stack to keep track of all elements in sorted order.
  const sortedStack = new Stack();

  // For every unvisited node in our graph, call the helper function.
  graph.forEach(node => {
    if (!visited.hasOwnProperty(node.name)) {
      // if this is null
      visited[node.name] = node.prerequisites;

      topSortHelper(node.name, visited, sortedStack);
    }
  });

  while (idx >= 0) {
    ordering[idx] = sortedStack.pop();
    idx--;
  }

  return ordering;
}

let directedGraph = [
  {
    name: 'Algebra 1',
    prerequisites: [],
  },
  {
    name: 'Geometry',
    prerequisites: [],
  },
  {
    name: 'Algebra 2',
    prerequisites: ['Algebra 1', 'Geometry'],
  },
  {
    name: 'Pre Calculus',
    prerequisites: ['Algebra 2'],
  },
  {
    name: 'Statistics',
    prerequisites: ['Geometry', 'Algebra 2'],
  },
  {
    name: 'Calculus',
    prerequisites: ['Pre Calculus', 'Statistics'],
  },
];

let physics = [
  {
    name: 'Calculus',
    prerequisites: [],
  },
  {
    name: 'Scientific Thinking',
    prerequisites: [],
  },
  {
    name: 'Differential Equations',
    prerequisites: ['Calculus'],
  },
  {
    name: 'Intro to Physics',
    prerequisites: ['Scientific Thinking'],
  },
  {
    name: 'Relativity',
    prerequisites: ['Differential Equations', 'Intro to Physics'],
  },
];

// console.log(topSort(directedGraph));
console.log(topSort(physics));
