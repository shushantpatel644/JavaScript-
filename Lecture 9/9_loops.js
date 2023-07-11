//program to add first n natural number
const prompt = require("prompt-sync")({ sigint: true });
let sum = 0;
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
    sum += (i + 1);
}
console.log("Sum of first" + n + "natural number is" + sum)


//find factorial number

// let factorial = 1;
// let n = prompt("enter a number");
// n = Number.parseInt(n);
// for(let i =0; i < n; i++){
//   factorial *= (i+1);
// }
// console.log("factorial of" + n + "is :" + factorial);


let obj = {
    shushant: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
}

for (let b of "Shushant") {
    console.log(b)
}