const num = [5, 17, 30, 44, 2, 67, 19, 53, 1, 89, 7, 37];
const output = num.filter(n => n > 20);
// console.log(output);
const even = num.filter(n => n % 2 == 0)
// console.log(even);

const product = [
    { id: 1, name: 'phone', price: 30000 },
    { id: 2, name: 'laptop', price: 60000 },
    { id: 3, name: 'camera', price: 50000 },
    { id: 4, name: 'watch', price: 10000 },
    { id: 5, name: 'tablet', price: 35000 }
]
const expensive = product.filter(p => p.price > 30000);
console.log(expensive);
