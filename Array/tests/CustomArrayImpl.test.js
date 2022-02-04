const { expect, test } = require('@jest/globals');
const getInstanceOfArray = require('../CustomArrayImpl');
const myarr = getInstanceOfArray();
console.log(myarr);

test('if myarr hold an object', () => {
    expect(myarr).toBeInstanceOf(Object);
});

test('newly created array to have zero elements', () => {
    expect(myarr.length).toEqual(0);
});

test('to not have any data in newly created instance', () => {
    expect(Object.keys(myarr.data)).toEqual([]);
});