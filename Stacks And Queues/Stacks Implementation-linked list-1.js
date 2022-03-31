class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}
	push(value) {
		const newNode = new Node(value);
		if(this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
			this.length++;
			return this;
		}
		const holdingPointer = this.top;
		this.top = newNode;
		this.top.next = holdingPointer;
		this.length++;
		return this;
	}
	pop() {
		if (this.top === null || this.top.next === null) {
			return null;
		}
		if(this.top === this.bottom) this.bottom = null;
		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return this;
	}
	isEmpty() {
		return this.length === 0;
	}
  size() {
    return this.length;
  }
}

function getInstance() {
	return new Stack();
}

module.exports = getInstance;

// const myStack = new Stack();
// myStack.push('Discord');
//   myStack.push('Udemy');
//   myStack.push('Google');

// console.log(myStack.peek());
// myStack.pop();
//   console.log(myStack);
// console.log(myStack.peek());

//Discord
//Udemy
//google
