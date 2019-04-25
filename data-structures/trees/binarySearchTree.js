class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log n) time |
  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (current !== null) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  // O(log n) time
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return found;
  }

  /**********************
       TREE TRAVERSAL
  ***********************/

  // Breadth First Search
  BFS() {
    let data = [];
    let queue = [this.root];
    let currentNode;

    while (queue.length) {
      currentNode = queue.shift();
      data.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return data;
  }

  // Depth First Search PreOrder => Traverses from the root to the left and down  (Useful to reconstruct a tree)
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // Depth First Search PostOrder
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(current);
    return data;
  }

  // Depth First Search InOrder => Traverses from lowest to highest
  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(24);
tree.insert(12);
tree.insert(45);
tree.insert(31);
tree.insert(4);
tree.insert(6);

console.log(tree);
