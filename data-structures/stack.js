class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export default class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  // O(1) space | O(1) time
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    return this.size++;
  }

  // O(1) space | O(1) time
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push(23);
stack.push(30);
stack.push(50);
stack.push(78);

// console.log(stack);
