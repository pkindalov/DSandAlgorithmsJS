
class HashTable {
	constructor(size){
	  this.data = new Array(size);
	}
  
	_hash(key) {
	  let hash = 0;
	  for (let i =0; i < key.length; i++){
		  hash = (hash + key.charCodeAt(i) * i) % this.data.length
	  }
	  return hash;
	}

	set(key, value) {
		const addressIndex = this._hash(key);
		if(!this.data[addressIndex]){
			this.data[addressIndex] = [];
		}
		this.data[addressIndex].push(key, value);
	}
	get(key) {
		const addressIndex = this._hash(key);
		if(!this.data[addressIndex]) return undefined;
		for(let i = 0; i < this.data[addressIndex].length; i++) {
			if(this.data[addressIndex][0] === key)
				return this.data[addressIndex][1];
		}
	}
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  console.log(myHashTable.get('grapes'));
  myHashTable.set('apples', 9)
  console.log(myHashTable.get('apples'));