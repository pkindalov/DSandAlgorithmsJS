class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
			this.length++;
			return this;
		}
		const holdingPointer = this.last;
		this.last.next = newNode;
		this.last = newNode;
	}
	dequeue() {}
	//isEmpty;
}

const myQueue = new Queue();

//Joy
//Matt
//Pavel
//Samir
