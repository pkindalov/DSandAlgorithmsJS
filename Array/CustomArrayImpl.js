class CustomArrayImpl {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		try {
			if (!this.isIndexValid(index)) this.errTrower('Invalid index. Expect integer number.');
			return this.data[index];
		} catch (ex) {
			console.log(ex.message);
		}
	}

	push(item) {
		try {
			this.data[this.length] = item;
			this.length++;
			return this;
		} catch (ex) {
			console.log(ex.message);
		}
	}

	pop() {
		try {
			if (!this.isThereAnyData())
				this.errTrower('There is no data. Cannot get last element from nothing. Firstly add elements');
			const lastElement = this.data[this.length - 1];
			this.removeElement(this.length - 1);
			this.length--;
			return lastElement;
		} catch (ex) {
			console.log(ex.message);
		}
	}

	deleteAt(index) {
		try {
			if (!this.isThereAnyData()) this.errTrower('The structure is empty. There is nothing to delete');
			if (!this.isIndexValid(index)) this.errTrower('Invalid index. Expect integer number.');
			const element = this.data[index];
			this.shiftElements(index);
			this.removeElement(this.length - 1);
			this.length--;
			return element;
		} catch (ex) {
			console.log(ex.message);
		}
	}

	//helper private class methods
	errTrower(msg) {
		throw new Error(msg);
	}

	isIndexValid(index) {
		return Number.isInteger(index) && index >= 0;
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
	return new CustomArrayImpl;
}
module.exports = getInstanceOfArray;
// const arr = new CustomArrayImpl();
// arr.push('hi');
// arr.push('second element');
// arr.push('3 element');
// arr.push('4 element');

// console.log(arr);
// arr.deleteAt(0);
// arr.pop();
// arr.pop();
// console.log(arr);
// arr.pop();
// arr.get(-1);
