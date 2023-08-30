let data = {
    data:

        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

// How will you display
// a) habluder adda
// b) Beginner
const habludeAdda = data.data[0].bookDetails.name;
console.log(habludeAdda);
const beginner = data.data[1].bookCategory;
console.log(beginner);