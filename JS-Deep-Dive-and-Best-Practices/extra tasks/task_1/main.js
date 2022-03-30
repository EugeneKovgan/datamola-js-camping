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
      return true;
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
    return true;
  }

  removeNode(index) {
    if (index > 0 && index > this.size ||this.size ===1) {
      return false;    }

    let current = this.head;
    let previous;
    let count = 0;
    if(!index || index===0){
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
    return true
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

// const list = new List();
// list.addNode(1);
// list.addNode(2);
// list.addNode(4);
// list.addNode(5, 0);
// list.addNode(6, 2);
// list.addNode(7, 10);
// list.addNode(8);

// list.removeNode(1);
// list.removeNode(0);
// list.removeNode();
// console.log(list.print());

let list = new List(1);
console.log(list);
console.log(list.addNode(2)); //true
console.log(list.addNode(3, 1)); //true
console.log(list.print(), list);
console.log(list.addNode(33, 1)); //true
console.log(list.print(), list);
console.log(list.addNode(0, 10)); //false
console.log(list.print(), list);
console.log(list.removeNode(0)); //true
console.log(list.print(), list);
console.log(list.removeNode(2)); //true
console.log(list.print(), list);
console.log(list.removeNode(10)); //false
console.log(list.print(), list);
console.log(list.removeNode()); //true
console.log(list.print(), list);
console.log(list.removeNode()); //false
console.log(list.print(), list);
console.log(list.removeNode()); //false
console.log(list.print(), list);

