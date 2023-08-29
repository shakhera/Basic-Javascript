const arry = [1, 9, 17, 22];

const result = arry.reduce((previous, current) => previous + current, 0);
console.log(result);

let sum = 0;
for (let i = 0; i < arry.length; i++) {
    sum = sum + arry[i];
}
console.log(sum)
