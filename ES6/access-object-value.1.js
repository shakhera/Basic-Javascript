let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {
                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
};
// How will you get the output
// a) abc
// b) xyz

const abc = activities.activity1[0].song_list.song_1;
console.log(abc)
const xyz = activities.activity1[1].song_list.song_2;
console.log(xyz)


// // Access and print out song names
// activities.activity1.forEach(activity => {
//     console.log(`Activity Name: ${activity.name}`);
//     console.log(`Song 1: ${activity.song_list.song_1}`);
//     console.log(`Song 2: ${activity.song_list.song_2}`);
//     console.log('---');
// });
