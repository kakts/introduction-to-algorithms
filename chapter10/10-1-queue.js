class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(x) {
    this.list.push(x);
  }

  dequeue() {
    return this.list.shift();
  }

  showList() {
    console.log(this.list);
  }
}

let a = new Queue();
a.enqueue('a');
a.showList();
a.enqueue('b');
a.showList();
let b = a.dequeue();
console.log(b);
a.showList();