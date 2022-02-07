const { expect, test } = require('@jest/globals');
const getInstance = require('../HashTable');
let myHashTable;
let count = 10;

test('the instance must by of type object', () => {
    myHashTable = getInstance(count);
    expect(myHashTable).toBeInstanceOf(Object);
});

test('size of the hash tabsle must be 10', () => {
    myHashTable = getInstance(count);
    expect(myHashTable.size()).toBe(10);
});

test('must set orange, and to get it successfully', () => {
    myHashTable = getInstance(count);
    myHashTable.set('orange', 1000);
    expect(myHashTable.has('orange')).toBe(true);
});

test('must get the right value of the key', () => {
    myHashTable = getInstance(5);
    myHashTable.set('orange', 13);
    myHashTable.set('portocal', 16);
    myHashTable.set('banan', 26);
    myHashTable.set('strawberry', 56);
    expect(myHashTable.get('portocal')).toBe(16);
    expect(myHashTable.get('strawberry')).toBe(56);
});

test('getting non-existing key must return undefined', () => {
    myHashTable = getInstance(10);
    myHashTable.set('orange', 5);
    expect(myHashTable.get('portocal')).toBe(undefined);
});

test('getting keys of empty structure must return empty array', () => {
    myHashTable = getInstance(10);
    expect(myHashTable.keys()).toEqual([]);
    expect(myHashTable.keys().length).toBe(0);
});

test('must get all keys', () => {
    myHashTable = getInstance(5);
    myHashTable.set('orange', 13);
    myHashTable.set('portocal', 16);
    myHashTable.set('banan', 26);
    myHashTable.set('strawberry', 56);
    expect(myHashTable.keys()).toContain('orange');
    expect(myHashTable.keys()).toContain('portocal');
    expect(myHashTable.keys()).toContain('banan');
    expect(myHashTable.keys()).toContain('strawberry');
    expect(myHashTable.keys().length).toBe(4);
});

test('must get all values', () => {
    myHashTable = getInstance(5);
    myHashTable.set('orange', 13);
    myHashTable.set('portocal', 16);
    myHashTable.set('banan', 26);
    myHashTable.set('strawberry', 56);
    expect(myHashTable.values()).toContain(13);
    expect(myHashTable.values()).toContain(16);
    expect(myHashTable.values()).toContain(26);
    expect(myHashTable.values()).toContain(56);
    expect(myHashTable.values().length).toBe(4);
});

