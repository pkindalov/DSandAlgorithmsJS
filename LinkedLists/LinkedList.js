class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(item) {
        this.head = new Node(item);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newItem = new Node(value);

        this.tail.next = newItem;
        this.tail = newItem;
        this.length++;
        return this;
    }
    prepend(value) {
        const newItem = new Node(value);

        newItem.next = this.head;
        this.head = newItem;
        this.length++;
        return this;
    }
    print() {
        const values = [];
        let currentItem = this.head;
        while (currentItem !== null) {
            values.push(currentItem.value);
            currentItem = currentItem.next;
        }
        return values;
    }
    insert(index, value) {
        const newItem = new Node(value);
        if (index === 0) {
            this.prepend(value);
            return this.print();
        }
        //my try
        // if(index >= this.length) return this.append(value);
        // let prevItem = this.head;
        // let indexCount = 1;
        // let nextItem = prevItem.next;
        // while(nextItem){
        //     if(index === indexCount) {
        //         newItem.next = prevItem.next;
        //         nextItem = newItem;
        //         prevItem.next = newItem;
        //         this.length++;
        //         break;
        //     }
        //     prevItem = nextItem;
        //     nextItem = nextItem.next;
        //     indexCount++;
        // }

        //version from video tutorial
        if (index >= this.length) return this.append(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newItem;
        newItem.next = holdingPointer;
        this.length++;
        return this.print();
    }

    remove(index) {
        if (index === 0) {
            let secondItem = this.head.next;
            this.head = secondItem;
            this.length--;
            return this.print();
        }
        const leader = this.traverseToIndex(index - 1);
        let holdingPointer = leader.next;
        leader.next = holdingPointer.next;
        holdingPointer = null;
        this.length--;
        return this.print();
    }
    size() {
        return this.length;
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentItem = this.head;
        while (counter !== index) {
            currentItem = currentItem.next;
            counter++;
        }
        return currentItem;
    }
    reverse() {
        if (!this.head.next) return this.head;
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
        return this.print();
        
        //my trying - unfortunately too slow because of the while, method traverToIndex which make another
        //loop. This way is approximately 2 times slower than the uncomment code from the tutorial.

        // let index = 0;
        // while(index <= this.length - 1) {
        //     let currentItem = this.traverseToIndex(index);
        //     this.remove(index);
        //     this.prepend(currentItem.value);
        //     index++;
        // }

        return this.print();
    }
}

function getInstance(count) {
    return new LinkedList(count);
}

module.exports = getInstance;

const list = new LinkedList(10);
list.append(5);
list.append(16);
list.prepend(1);
console.log(list.print());
const t1 = console.time();
console.log(list.reverse());
const t2 = console.timeEnd();
// console.log(t2 - t1);
// list.append(11);
// list.append(12);
// list.append(13);
// list.append(14);
// console.log(list.print());
// console.log(list.reverse());