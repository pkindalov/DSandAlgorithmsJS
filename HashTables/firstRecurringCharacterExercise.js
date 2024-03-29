//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    let data = {};
    for (let number of input) {
        if (data[number] === undefined) {
            data[number] = true;
            continue;
        }
        return number;
    }
    return undefined;
}

module.exports = firstRecurringCharacter;

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]));
// console.log(firstRecurringCharacter([2,3,4,5]));
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([0,2,3,0,5,1,3]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2