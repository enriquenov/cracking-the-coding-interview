// First In First Out (FIFO)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // O(1) time | O(1) space
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  // O(1) time | O(1) space
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(62);
queue.enqueue(90);
queue.enqueue(12);
queue.enqueue(8);

console.log(queue);
