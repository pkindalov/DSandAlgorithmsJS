const { expect, test } = require('@jest/globals');
const getInstance = require('../LinkedList');
let list;
let firstItem = 10;

test('the instance must by of type object', () => {
    list = getInstance(firstItem);
    expect(list).toBeInstanceOf(Object);
});

test('size of the hash tabsle must be 1', () => {
    list = getInstance(firstItem);
    expect(list.size()).toBe(1);
});

test('check if length increased after adding another element', () => {
    list = getInstance(firstItem);
    list.append(3);
    expect(list.size()).toBe(2);
    list.append('45');
    list.append('23');
    expect(list.size()).toBe(4);
});

test('check if new items are added correctly', () => {
    list = getInstance(firstItem);
    list.append(2);
    list.append(3);
    const elements = [10, 2, 3];
    elements.forEach(num => expect(list.print()).toContain(num));
});

test('check if length update correcly when append elements', () => {
    list = getInstance(firstItem);
    const elements = [1, 4, 5, 6];
    elements.forEach(num => list.append(num));
    expect(list.size()).toBe(5);
});

test('check if the added element will be prepend correctly', () => {
    list = getInstance(firstItem);
    list.prepend(14);
    expect(list.print()).toEqual(expect.arrayContaining([14, 10]));
});

test('check if length update correctly when prepend elements', () => {
    list = getInstance(firstItem);
    const elements = ['orange', 'portocal', 'strawberry'];
    elements.forEach(fruit => list.prepend(fruit));
    expect(list.size()).toBe(4);
});

test('check if prepend more elements', () => {
    list = getInstance(firstItem);
    const items = [2 , 3,  4];
    items.forEach(num => list.prepend(num));
    expect(list.print()).toEqual(expect.arrayContaining([4, 3, 2, 10]));
});

test('check if insert put the element at the beginning(head)', () => {
    list = getInstance(firstItem);
    const items = [2 , 3,  4];
    items.forEach(num => list.append(num));
    list.insert(0, 99);
    expect(list.print()).toEqual(expect.arrayContaining([99, 10, 2, 3, 4]));
});

test('check if insert put the element in the middle correctly', () => {
    list = getInstance(firstItem);
    const items = [2, 3, 4];
    items.forEach(num => list.append(num));
    list.insert(2, 99);
    expect(list.print()).toEqual(expect.arrayContaining([10, 2, 99, 3, 4]));
});

test('check if insert put correctly element in the end(tail)', () => {
    list = getInstance(firstItem);
    const items = [2, 3, 4, 5, 6];
    items.forEach(num => list.append(num));
    list.insert(list.size() - 1, 99);
    expect(list.print()).toEqual(expect.arrayContaining([10, 2, 3, 4, 5, 6, 99]));
});

test('check if remove delete the first element(head) correctly', () => {
    list = getInstance(firstItem);
    const items = [2, 3, 4, 5, 6];
    items.forEach(num => list.append(num));
    list.remove(0);
    expect(list.print()).toEqual(expect.arrayContaining([2, 3, 4, 5, 6]));
});

test('test if remove delete correctly the last element', () => {
    list = getInstance(firstItem);
    const items = [2, 3, 4, 5, 6];
    items.forEach(num => list.append(num));
    list.remove(list.size() - 1);
    expect(list.print()).toEqual(expect.arrayContaining([10, 2, 3, 4, 5]));
});

test('test if remove delete correctly element in the middle', () => {
    list = getInstance(firstItem);
    const items = [2, 3, 4, 5, 6];
    items.forEach(num => list.append(num));
    list.remove(2);
    expect(list.print()).toEqual(expect.arrayContaining([10, 2, 4, 5, 6]));
});