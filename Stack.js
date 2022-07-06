function Stack(){
    this.collection = {};
    this.length = 0;
    this.push = function(data) {
        if(!this.length) null
        this.collection[++this.length] = data
    }
    this.pop = function(){
        delete this.collection[this.length--]
    }
    this.peep = function(){
        return this.collection[this.length]
    }
}

let myStack = new Stack();
myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
console.log(myStack.peep())
myStack.pop()
myStack.pop()
myStack.pop()
console.log(myStack.peep())

