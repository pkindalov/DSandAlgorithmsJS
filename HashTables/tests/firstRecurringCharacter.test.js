const { expect, test } = require('@jest/globals');
const firstRecurringCharacter = require('../firstRecurringCharacterExercise');

test('[2,5,1,2,3,5,1,2,4] should return 2', () => {
    expect(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])).toBe(2);
});

test('[2,1,1,2,3,5,1,2,4] should return 1', () => {
    expect(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])).toBe(1);
});

test('[2,3,4,5] should return undefined', () => {
    expect(firstRecurringCharacter([2,3,4,5])).toBe(undefined);
});

test('[2, 5, 5, 2, 3, 5, 1, 2, 4] should return 5', () => {
    expect(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])).toBe(5);
});

test('[] should return undefined', () => {
    expect(firstRecurringCharacter([])).toBe(undefined);
});

test('[1] should return undefined', () => {
    expect(firstRecurringCharacter([])).toBe(undefined);
});