//example of Stack 

// var letters = [];
// var word = 'RacecaR'
// var rword = '';

// for(var i = 0; i < word.length; i++) {
//     letters.push(word[i])
// }
// for(var i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }
// if(rword === word) {
//     console.log(word + " is a Palindrome")
// } else {
//     console.log(word  + " is not Palindrome")
// }

//Implementing the stack

var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count];
        return result;
    }

    this.size = function () {
        return this.count;
    }

    this.peek = function() {
        return this.storage[this.count - 1]
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log('we peek ' + myStack.peek());
console.log('we pop of ' + myStack.pop());
console.log('we peek ' + myStack.peek());
myStack.push("FreeCodeCamp");
console.log('size ' + myStack.size());
console.log('we peek ' + myStack.peek());
console.log('we pop of ' + myStack.pop());
console.log('we peek ' + myStack.peek());