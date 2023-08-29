// map, forEach, find, filter, reduce

const num = [1, 2, 3, 4, 5];
const total = num.reduce((pre, curr) => (pre + curr), 0);
console.log(total);

const sum = num.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current;
}, 0);
console.log(sum);