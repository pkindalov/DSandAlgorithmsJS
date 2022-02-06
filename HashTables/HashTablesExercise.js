
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash;
	}

	_getData(index) {
		let data = [];
		this.data.forEach(shelf => {
			//collision check to get collision data.
			if (shelf && shelf.length > 1) {
				shelf.forEach(collisionData => {
					data.push(collisionData[index]);
				});
			} else {
				data.push(shelf[0][index]);
			}
		});
		return data;
	}

	set(key, value) {
		const addressIndex = this._hash(key);
		if (!this.data[addressIndex]) {
			this.data[addressIndex] = [];
		}
		this.data[addressIndex].push([key, value]);
		return this.data;
	}
	get(key) {
		const addressIndex = this._hash(key);
		const currentAdrressData = this.data[addressIndex];
		if (!currentAdrressData) return undefined;
		for (let i = 0; i < currentAdrressData.length; i++) {
			if (currentAdrressData[i][0] === key)
				return currentAdrressData[i][1];
		}
	}
	keys() {
		if (!this.data.length) return undefined;
		const keysIndex = 0;
		return this._getData(keysIndex);
	}
	values() {
		if (!this.data.length) return undefined;
		const keysIndex = 1;
		return this._getData(keysIndex);
	}
}

const myHashTable = new HashTable(4);
myHashTable.set('grapes', 10000)
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));
myHashTable.set('oranges', 2);
myHashTable.set('bananas', 14);
// myHashTable.keys();
console.log(myHashTable.keys());
console.log(myHashTable.values());