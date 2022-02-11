class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newItem = {
            value: value,
            next: null,
            prev: null
        }
        this.tail.next = newItem;
        newItem.prev = this.tail;
        this.tail = newItem;
        this.length++;
        return this;
    }

    prepend(value) {
        const newItem = {
            value: value,
            next: null,
            prev: null
        }

        newItem.next = this.head;
        this.head.prev = newItem;
        this.head = newItem;
        this.length++;
        return this;
    }
    print() {
        let currentItem = this.head;
        let items = [];
        while(currentItem !== null) {
            items.push(currentItem.value);
            currentItem = currentItem.next;
        }
        return items;
    }
    size() {
        return this.length;
    }
    insert(index, value) {
        if(index === 0) {
            this.prepend(value);
            this.length++;
            return this.print();
        }
        if (index >= this.length) return this.append(value);
        const newItem = {
            value: value,
            next: null,
            prev: null
        }
        const prevItem = this.traverseToIndex(index - 1);
        const nextItem = prevItem.next;
        prevItem.next = newItem;
        newItem.prev = prevItem;
        newItem.next = nextItem;
        nextItem.prev = newItem;
        // newItem.next = nextItem;
        // newItem.prev = prevItem;
        // nextItem.prev = newItem;
        // prevItem.next = newItem;
        this.length++;
        return this.print();
    }

    remove(index) {
        if(index === 0){
            const secondItem = this.head.next;
            secondItem.prev = null;
            this.head = secondItem;
            this.length--;
            return this.print();
        }
        let prevItem = this.traverseToIndex(index-1);
        let removingItem = prevItem.next;
        let nextItem = removingItem.next;

        prevItem.next = nextItem;
        if(nextItem !== null) nextItem.prev = prevItem;
        removingItem = null;

        //backup
        // let prevItem = this.traverseToIndex(index-1);
        // let currentItem = prevItem.next;
        // prevItem.next = currentItem.next;
        // currentItem = null;
        this.length--;
        return this.print();
        

    }

    traverseToIndex(index) {
        let currentItem = this.head;
        let counter = 0;
        while(counter !== index) {
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

const list = new DoublyLinkedList(10);
list.append(2);
list.append(12);
list.append(20);
list.prepend(1);
console.log(list.print());
list.insert(2, 150);
console.log(list.print());
list.insert(1, 25);
console.log(list.print());
list.remove(1);
console.log(list.print());
list.remove(2);
console.log(list.print());
list.remove(list.size() - 1);
console.log(list.print());


//1, 10, 2, 12,20
// // console.log(list.size());
// list.insert(list.size(), 99);
// console.log(list.print());
// console.log(list.remove(1));
// console.log(list.remove(2));
// console.log(list.remove(0));
