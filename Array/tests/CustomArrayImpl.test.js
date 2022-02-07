const { expect, test } = require('@jest/globals');
const getInstanceOfArray = require('../CustomArrayImpl');
let myarr;

test('if myarr hold an object', () => {
    myarr = getInstanceOfArray();
    expect(myarr).toBeInstanceOf(Object);
});

test('newly created array to have zero elements', () => {
    myarr = getInstanceOfArray();
    expect(myarr.length).toEqual(0);
});

test('to not have any data in newly created instance', () => {
    myarr = getInstanceOfArray();
    let data = Object.keys(myarr.data);
    expect(data.length).toEqual(0);
});

//test push() method
test('to have element when pushing it', () => {
    let myarr = getInstanceOfArray();
    myarr = getInstanceOfArray();
    myarr.push('one');
    expect(myarr.length).toBeGreaterThan(0);
    expect(myarr.data[0]).toBe('one');
});

test('to get one element from data', () => {
    myarr = getInstanceOfArray();
    myarr.push('one');
    expect(myarr.get(0)).toBe('one');
});

//test get()
test('throw error trying get element on invalid index', () => {
    myarr = getInstanceOfArray();
    expect(() => myarr.get(-3)).toThrow();
});

test('throw error if we try to get element on empty data', () => {
    myarr = getInstanceOfArray();
    expect(() => myarr.get(2)).toThrow();
});

//test pop()
test('test if pop() return the last element', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    myarr.push(3);
    expect(myarr.pop()).toBe(3);
});

test('test removing last element from the structure', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    myarr.push(3);
    myarr.pop();
    expect(myarr.length).toBe(2);
});

test('trying to call pop() on empty data', () => {
    myarr = getInstanceOfArray();
    expect(() => myarr.pop()).toThrow();
});

//deleteAt
test('trying to use method on empty data', () => {
    myarr = getInstanceOfArray();
    expect(() => myarr.deleteAt(0)).toThrow();
});

test('trying to use negative index for deleting item', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    expect(() => myarr.deleteAt(-1)).toThrow();
});

test('trying to use index of non-existent element', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    expect(() => myarr.deleteAt(5)).toThrow();
});

test('must return the deleted item', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    expect(myarr.deleteAt(1)).toBe(2);
});

test('if length decrease after remove item', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    myarr.push(3);
    myarr.push(4);
    myarr.deleteAt(1);
    expect(myarr.length).toBe(3);
});

test('if other element stay after deleting', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    myarr.push(3);
    myarr.push(4);
    myarr.deleteAt(1);
    expect(Object.values(myarr.data)).toEqual(expect.arrayContaining([1, 3, 4]));
});

test('deleting last element', () => {
    myarr = getInstanceOfArray();
    myarr.push(1);
    myarr.push(2);
    myarr.push(3);
    myarr.push(4);
    myarr.deleteAt(3);
    expect(Object.values(myarr.data)).toEqual(expect.arrayContaining([1, 2 , 3]));
});