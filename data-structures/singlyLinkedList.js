class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // O(1) time | O(1) space
  push(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  // O(1) time | O(1) space
  shift() {
    if (!this.head) return undefined;

    let curHead = this.head;
    this.head = curHead.next;
    this.length--;

    if (!this.length) this.tail = null;

    return curHead;
  }

  // O(1) time | O(1) space
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // O(n) time | O(1) space
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let currentNode = this.head;

    while (count !== idx) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  // O(1) time | O(1) space
  set(idx, val) {
    let node = this.get(idx);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  // O(n) time | O(1) space
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    let prev = this.get(idx - 1);
    let newNode = new Node(val);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  // O(n) time | O(1) space
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.unshift();
    if (idx === this.length) return this.pop();

    let prev = this.get(idx - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let stringified = '';
    let currentNode = this.head;
    while (currentNode) {
      stringified += ` ${currentNode.val}`;
      currentNode = currentNode.next;
    }
    return stringified;
  }
}

let list = new SinglyLinkedList();

list.push('uno');
list.push('dos');
list.push('tres');
list.push('cuatro');
list.push('cinco');
list.push('seis');

console.log(list);
