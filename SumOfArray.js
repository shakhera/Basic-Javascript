// var ary = [1, 2, 3, 4, 5, 5];
// console.log(ary.length);
// var sum = 0;
// for (var i = 0; i < ary.length; i++) {
//     sum += ary[i];
// }
// console.log(sum);



// in function
function getSum(numbers) {
    //console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        //console.log(numbers[i]);
    }
}
const ary = [5, 7, 8, 10, 45, 30];
let sum = 0
const temp = getSum(ary);
console.log(sum);
