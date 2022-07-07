//Implementing using a function
// function Queue(){
//     this.collection = [];

//     this.enqueue = function(data){
//         this.collection.push(data)
//     }

//     this.deQueue = function(){
//         this.collection.shift()
//     }

//     this.front = function(){
//         return this.collection[0]
//     }

//     this.rear = function(){
//         return this.collection[this.collection.length-1]
//     }

//     this.print = function(){
//         return this.collection
//     }
// }

// let queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.print())
// queue.deQueue()
// queue.deQueue()
// console.log(queue.print())
// console.log(queue.front())
// console.log(queue.rear())



//Implementing using a class
class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(data) {
    this.collection.push(data);
  }

  deQueue() {
    this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  rear() {
    return this.collection[this.collection.length - 1];
  }

  print() {
    return this.collection;
  }
}

let queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.print())
queue.deQueue()
queue.deQueue()
console.log(queue.print())
console.log(queue.front())
console.log(queue.rear())
