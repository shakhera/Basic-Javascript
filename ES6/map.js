const array = [1, 10, 20, 30, 40, 50];

function getDoubles(array) {
    console.log(array)
    const newArray = [];
    for (const ary of array) {
        const double = doubleIt(ary)
        newArray.push(double);
    }
    return newArray
}
// // regular function
// function doubleIt(ary) {
//     return ary * 2;
// }

//// arrow function
const doubleIt = a => a * 2;

const makeDouble = array.map(doubleIt);
const makeDoubleMap = array.map(num => num * 2);

const result = getDoubles(array);
console.log(result);
console.log(makeDouble);
console.log(makeDoubleMap)

const fiveStar = [1, 2, 3, 4, 5, 6].map(m => m * 5);
console.log(fiveStar);
