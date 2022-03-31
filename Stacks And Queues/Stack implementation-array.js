class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		return this.array[this.array.length - 1];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop() {
		this.array.pop();
		return this;
	}
	isEmpty() {
        return this.array.length === 0;
    }
}

const myStack = new Stack();
//   myStack.peek();
myStack.push('google');
myStack.push('udemy');
//   myStack.push('discord');
myStack.pop();
myStack.pop();
console.log(myStack.peek());
//   myStack.pop();
//  console.log(myStack.pop());

//Discord
//Udemy
//google
