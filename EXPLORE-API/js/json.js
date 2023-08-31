const user = {
    id: 1,
    name: 'shifa khan',
    job: 'job less'
}
// console.log(user);
const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    owner: 'shila',
    address: {
        street: 'gangginar par',
        city: 'mymensongh',
        country: 'BD'
    },
    product: ['laptop', 'mouse', 'charger', 'keyboard'],
    revinue: 4500,
    isOpen: true,
    inNew: false
}
console.log(shop);
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const parseStringified = JSON.parse(shopStringified);
console.log(parseStringified);