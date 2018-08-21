
class Stack {
  constructor() {
    this.top = 0;
    this.map = {};
  }
  stackEmpty() {
    return this.top === 0;
  }
  
  push(x) {
    this.top++;
    this.map[this.top] = x;
  }
  
  pop() {

    if (this.stackEmpty()) {
      throw new Error("under flow pop");
    }
    console.log(1);
    this.top--;
    return this.map[this.top + 1];
  }
  
  showMap() {
    console.log(1)
    console.log(this.map)
  }
}

let a = new Stack();
a.showMap();
a.push('1')
a.showMap();
let b = a.pop();
console.log(b);
a.push('2');
a.push('3');
a.showMap();
