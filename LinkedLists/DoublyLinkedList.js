class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
        this.prev = null;
	}
}
class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newItem = new Node(value);
		this.tail.next = newItem;
		newItem.prev = this.tail;
		this.tail = newItem;
		this.length++;
		return this;
	}

	prepend(value) {
		const newItem = new Node(value);
		newItem.next = this.head;
		this.head.prev = newItem;
		this.head = newItem;
		this.length++;
		return this;
	}
	print() {
		let currentItem = this.head;
		let items = [];
		while (currentItem !== null) {
			items.push(currentItem.value);
			currentItem = currentItem.next;
		}
		return items;
	}
	size() {
		return this.length;
	}
	insert(index, value) {
		if (index === 0) {
			this.prepend(value);
			this.length++;
			return this.print();
		}
		if (index >= this.length) return this.append(value);
		const newItem = new Node(value);
		const prevItem = this.traverseToIndex(index - 1);
		const nextItem = prevItem.next;
		prevItem.next = newItem;
		newItem.prev = prevItem;
		newItem.next = nextItem;
		nextItem.prev = newItem;
		this.length++;
		return this.print();
	}

	remove(index) {
		if (index === 0) {
			const secondItem = this.head.next;
			secondItem.prev = null;
			this.head = secondItem;
			this.length--;
			return this.print();
		}
		let prevItem = this.traverseToIndex(index - 1);
		let removingItem = prevItem.next;
		let nextItem = removingItem.next;

		prevItem.next = nextItem;
		if (nextItem !== null) nextItem.prev = prevItem;
		removingItem = null;
		this.length--;
		return this.print();
	}

	traverseToIndex(index) {
		let currentItem = this.head;
		let counter = 0;
		while (counter !== index) {
			currentItem = currentItem.next;
			counter++;
		}
		return currentItem;
	}
}

function getInstance(count) {
	return new DoublyLinkedList(count);
}

module.exports = getInstance;
