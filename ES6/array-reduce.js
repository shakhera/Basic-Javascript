//1. find out totalsum of age using 
//2. for loop 
//3. reduce()
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rins', age: 15 },
    { name: 'Suchorita', age: 22 }
];
// using For Loop
let totalAge = 0;
for (let i = 0; i < people.length; i++) {
    totalAge += people[i].age;
}
console.log(totalAge);

//using Reduce()
const totalSum = people.reduce((previous, current) => previous + current.age, 0)

// const totalSum = people[0].age + people[1].age + people[2].age;
console.log(totalSum);
