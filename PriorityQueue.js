class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  enqueue(data) {
    if (!this.collection.length) {
      this.collection.push(data);
    } else {
        let inserted = false
      for (let i = 0; i < this.collection.length; i++) {
        if(data[1] < this.collection[i][1]){
            this.collection.splice(i,0,data)
            inserted= true
            break;
        }
      }
      if(!inserted){
        this.collection.push(data)
      }
    }
  }

  dequeue(){
    return this.collection.shift()
  }

  print() {
    return this.collection
  }

  peek(){
    this.collection[this.length-1]
  }

}

const myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue(['Sachin',3])
myPriorityQueue.enqueue(['Manisha',2])
myPriorityQueue.enqueue(['Sanjeev',1])
myPriorityQueue.enqueue(['Shashank',4])
console.log(myPriorityQueue.print())
myPriorityQueue.dequeue()
console.log(myPriorityQueue.print())
myPriorityQueue.dequeue()
myPriorityQueue.dequeue()
console.log(myPriorityQueue.print())
