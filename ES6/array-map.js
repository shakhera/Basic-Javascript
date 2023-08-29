const array = [1, 3, 5, 7, 9];

const even = array.map(ary => ary + 1);
console.log(even);

const evenArray = [];
for (let i = 0; i < array.length; i++) {
    const element = array[i] + 1;
    evenArray.push(element);
}
console.log(evenArray);
