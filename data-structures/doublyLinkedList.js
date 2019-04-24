class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1) time | O(1) space
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // O(1) time | O(1) space
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  // O(1) time | O(1) space
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) return this.pop();
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // O(1) time | O(1) space
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) return this.push(val);
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // O(n) time | O(1) space
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current, count;
    if (idx <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  // O(n) time | O(1) space
  set(idx, val) {
    let current = this.get(idx);

    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  // O(n) time | O(1) space
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return null;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let prevNode = this.get(idx - 1);
    let afterNode = prevNode.next;
    let newNode = new Node(val);

    newNode.next = afterNode;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // O(n) time | O(1) space
  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.shift();
    if (idx === this.length) return !!this.pop();

    let removedNode = this.get(idx);
    let beforeNode = removedNode.prev;

    beforeNode.next = removedNode.next;
    removedNode.next.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }
}

let doulist = new DoublyLinkedList();

doulist.push('First');
doulist.push('Second');
doulist.push('Third');
doulist.push('Fourth');
doulist.push('Fifth');

console.log(doulist);
