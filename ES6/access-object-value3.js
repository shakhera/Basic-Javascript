let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}

// How will you display
// a) programming er coddogosti
// b) VW
// c) Bangladesh
const coddogosti = instructor.additionalData.books[1];
console.log(coddogosti);
const VW = instructor.additionalData.moreDetails.hometown.state;
console.log(VW);
const Bangladesh = instructor.additionalData.moreDetails.countriesLivedIn[0];
console.log(Bangladesh);