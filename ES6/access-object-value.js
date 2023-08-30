const student = {
    name: 'shakhera',
    age: 24,
}
console.log(student.age);

let data = {
    location: [
        {
            latitude: '34.5,37.8',
            longitude: '98.7,58.7',
            city: 'Hyderabed',
            country: 'India',
        }
    ]
};
const result = data.location[0].city;
console.log(result);

const user =
{
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}
//challenging
//1. colsole the value of email
//2. ...................address
//3. ...................city
//4. ...................lat
//5. ...................company name
console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);

