const { expect, test } = require('@jest/globals');
const getInstance = require('../Stacks Implementation-linked list-1');
let list;

test('the instance must by of type object', () => {
	list = getInstance();
	expect(list).toBeInstanceOf(Object);
});

test('stack must be empty at beginning', () => {
	list = getInstance();
	expect(list.isEmpty()).toBe(true);
});

test('if push add node item', () => {
	list = getInstance();
	list.push(1);
	expect(list.peek()).toBeInstanceOf(Object);
});

test('if length is incremented when add new item', () => {
	list = getInstance();
	list.push(1);
	expect(list.size()).toBe(1);
});

test('if length is incremented correctly adding more items', () => {
	list = getInstance();
	const items = [ 1, 2, 3, 4 ];
	items.forEach((item) => list.push(item));
	expect(list.size()).toBe(4);
});

test('if peek show the top element after adding more items', () => {
	list = getInstance();
	const items = [ 1, 2, 3, 4 ];
	items.forEach((item) => list.push(item));
	const item = list.peek();
	expect(item.value).toBe(4);
});
