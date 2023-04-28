// let result = (23 * 10 + 23 * 10 + 20 * 10) / 10;
// console.log(result);

// let result2 = (45 * 10 + 45 * 10 + 45 * 10) / 10;
// console.log(result2);

//functions
// function printTheValue(a, b, c=0) { 
//     //default parementer just the pass the value inside the fucntion name 
//     let result = (a * 10 + b * 10 + c * 10) / 10;
//     console.log(result);
// }
// printTheValue(23, 23, 23);
// printTheValue(5, 5,2);

// let myufnc = function printTheValue(a = 0, b = 0, c = 0) {
//     //default parementer just the pass the value inside the fucntion name 
//     let result = (a * 10 + b * 10 + c * 10) / 10;
//     console.log(result);

//     // return String(result);
// }
// let ans = myufnc(45, 45, 10);
// console.log(ans);


// const myFunc = function (a = 0, b = 0, c = 0) {
//     let result = (a * 10 + b * 10 + c * 10) / 10;
//     return result;
// };

// function intro(name = "sample", channel = "youtube") {
//     console.log(`Hii my name is ${name}. Please subscribe to my youtube channel ASAP, what are you waiting for? MY channel name is ${channel}`);
//     console.log(`My Income is $${myFunc(1, 2, 2)}`);
// }
// intro("Shushant", "king");


function totalArray(arrr = []) {
    let total = 0;
    for (let i = 0; i < arrr.length; i++) {
        total += arrr[i];
    }
    return total;
}
const arrr = [1, 2, 3, 4, 5];
console.log(totalArray(arrr));

// totalArray(arrr);
console.log("hii");



let arr = [1, 2, 3, 4, 4];
let ans = 0;
for (var i in arr) {
    ans += arr[i];
}
console.log(ans);