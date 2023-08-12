// var inch = 84;
// const feet = inch / 12;
// console.log(feet);

function InchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const myInches = 84;
const myFeet = InchToFeet(myInches)
console.log('My Height', myFeet);

const UrInches = 144;
const UrFeet = InchToFeet(UrInches)
console.log("Your Height", UrFeet);