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
    this.tail = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
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

function init() {
  const list = new List();
  list.addNode('1').addNode('2').addNode('3');
  list.addNode('4', '1');
  console.log(list.toArray());
  console.log(typeof list);

  console.log(list.print());
}

init();
