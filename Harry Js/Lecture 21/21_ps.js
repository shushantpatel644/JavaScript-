// Chapter 5
// Practice Problem 1
const prompt = require("prompt-sync")({ sigint: true });
// let arr = [1, 2, 3, 4, 5, 6, 67, 56]
// let a = prompt('Enter a number: ')
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)


// Practice Problem 2

// let arr = [1, 2, 32, 4, 5, 6, 67, 56]
// let a;
// do {
//     a = prompt('Enter a number: ')
//     a = Number.parseInt(a)
//     arr.push(a)
// } while (a != 0)
// console.log(arr)

// Practice Problem 4

// let arr = [1, 2, 30, 34, 50, 60, 67, 56]
// let n = arr.filter((x) => {
//     return x % 10 == 0
// })
// console.log(n)

// Practice Problem 5

let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
    return x1 * x2 
})
console.log(n)