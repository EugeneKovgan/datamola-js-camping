class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  insertLast(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  addNode(value, index) {
    if (index > 0 && index > this.size) {
      return false;
    }
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }
    if (index) {
      const node = new Node(value);
      let current;
      let previous;
      current = this.head;
      let count = 0;
      while (count < index) {
        previous = current; // нода перед индексом
        count++;
        current = current.next; // нода после индекса
      }
      node.next = current;
      previous.next = node;
      this.size++;
    }
    this.insertLast(value);
  }

  removeNode(index) {
    if (index > 0 && index > this.size) {
      return false;
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  print() {
    return this.toArray()
      .map((node) => node.toString())
      .toString();
  }
}

const list = new List();
list.addNode(1);
list.addNode(2);
list.addNode(4);
list.addNode(5, 0);
list.addNode(6, 2);
list.addNode(7, 10);
list.addNode(8);

list.removeNode(1);
console.log(list.print());

