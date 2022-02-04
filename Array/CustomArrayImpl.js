class CustomArrayImpl {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		if (!this.isThereAnyData()) this.errTrower('There no data to get');
		if (!this.isIndexValid(index)) this.errTrower('Invalid index. Expect integer number.');
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this;
	}

	pop() {
		if (!this.isThereAnyData())
			this.errTrower('There is no data. Cannot get last element from nothing. Firstly add elements');
		const lastElement = this.data[this.length - 1];
		this.removeElement(this.length - 1);
		this.length--;
		return lastElement;
	}

	deleteAt(index) {
		if (!this.isThereAnyData()) this.errTrower('The structure is empty. There is nothing to delete');
		if (!this.isIndexValid(index)) this.errTrower('Invalid index. Expect integer number.');
		const element = this.data[index];
		this.shiftElements(index);
		this.removeElement(this.length - 1);
		this.length--;
		return element;
	}

	//helper private class methods
	errTrower(msg) {
		throw new Error(msg);
	}

	isIndexValid(index) {
		return Number.isInteger(index) && index >= 0 && this.data[index];
	}
	isThereAnyData() {
		return this.length > 0;
	}
	removeElement(index) {
		if (!this.data[index]) throw new Error('There is no element at this index');
		delete this.data[index];
		return true;
	}
	shiftElements(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
	}
}

function getInstanceOfArray() {
	return new CustomArrayImpl();
}

module.exports = getInstanceOfArray;
