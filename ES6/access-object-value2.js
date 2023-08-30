let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
// How will you display
// a) Petersburg
// b) Herry
const petersburg = students[2222].address.city;
console.log(petersburg);
const herry = students[3333].name;
console.log(herry);