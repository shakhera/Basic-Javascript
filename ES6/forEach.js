const names = ['shifa khan', 'shakhera khanom', 'saadi khan'];
// console.log(names);

const product = [
    { id: 1, name: 'phone', price: 30000 },
    { id: 2, name: 'laptop', price: 60000 },
    { id: 3, name: 'camera', price: 50000 },
    { id: 4, name: 'power bank', price: 20000 }
]
// console.log(product.name)

const output = product.map(p => p.id);
console.log(output)
product.map(product => console.log(product.name));
const nms = product.map(product => product.name);
console.log(nms)
product.forEach(product => console.log(product.price));
//// map a extra console.log return holeo forEach a hoy na;