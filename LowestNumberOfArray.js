// const array = [3, 5, 7, 2, 9, 15, 17];

// function toLowestNum(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         const ary = array[i];
//         if (ary < min[i]) {
//             min = ary;
//         }
//     }
//     return min;
//     //console.log(min);
// }
// const number = toLowestNum(array);
// console.log(number);


const array = [3, 5, 7, 2, 9, 15, 17];
let min = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
    }

}
console.log(min);



