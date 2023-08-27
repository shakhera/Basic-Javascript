function add(a, b, c) {
    return a + b + c;
}
const result = add(10, 20, 30);
console.log(result)

const add1 = function add(a, b, c = 0) {
    return a + b + c;
}
const result1 = add1(10, 20);
console.log(result1)

//arraw function
const add2 = (a, b, c) => a * b * c;
const num = add2(10, 10, 10);
console.log(num)

const add3 = (m, n = 0) => m + n;
const result2 = add3(50);
console.log('result of arw function with default parameter ', result2)