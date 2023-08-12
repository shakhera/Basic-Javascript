

function OddSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 1) {
            console.log(numbers[i]); // print odd numbers
            sum += numbers[i];
        }

    }
    console.log('Sum of Odd numbers ', sum);
}
var ary = [5, 7, 8, 10, 45, 30];
const num = OddSum(ary);
