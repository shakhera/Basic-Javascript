const num = [5, 17, 30, 44, 2, 67, 19, 53, 1, 89, 7, 37];
const even = num.find(n => n % 2 == 0);
console.log(even);
const big = num.find(m => m > 5);
console.log(big);

const products = [
    { id: 1, name: 'phone', price: 55000 },
    { id: 2, name: 'laptop', price: 60000 },
    { id: 3, name: 'camera', price: 50000 },
    { id: 4, name: 'watch', price: 10000 },
    { id: 5, name: 'tablet', price: 35000 }
]
const cheap = products.find(product => product.price < 50000);
console.log(cheap);