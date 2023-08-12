function toReverce(text) {
    let reverse = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reverse = reverse + element;
        console.log(element, reverse);

    }
}
const srt = 'I am a SHIFA';
const reverse = toReverce(srt);



// let string = "I am a good girl";
// const word = string.split(' ');
// //console.log(word);
// const result = [];
// for (let i = word.length - 1; i <= 0; i--) {
//     const elemt = word[i];
//     result.push(elemt);
//     // console.log(result);
// }
// const rever = result.join()
// console.log(rever);
