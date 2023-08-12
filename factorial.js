// const num = 4;
// let temp = 1;
// for (let i = 1; i <= num; i++) {
//     temp *= i;
// }
// console.log(temp)


//// IN Function
// function factorial(numbers) {
//     let temp = 1;
//     for (let i = 1; i <= numbers; i++) {
//         temp *= i;
//     }
//     console.log("factorial of a number is : ", temp)
// }
// const num = 4;
// factorial(num);

// const number = factorial(3);


//// factorial using while loop
function factorial(numbers) {
    let temp = 1;
    let i = 1;
    while (i <= numbers) {
        temp *= i;
        i++;
    }
    console.log("factorial of a number is : ", temp)
}
const num = 4;
factorial(num);

//const number = factorial(3);