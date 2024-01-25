// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 22, 33, 42, 52, 67, 78, 89, 90]
// let num_even_more = [121, 212, 323, 442, 552, 167, 748, 829, 490]
// console.log(num)
// console.log("Before :", num.length)
// delete num[0]
// console.log("After Deleting the elemts")
// console.log(num)
// console.log("After :", num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray, newArray.length)
// console.log(num, num_more, num_even_more)



//sort method
// let compare = (a, b) => {
//     return a - b
// }
// let num = [551, 22, 3, 0, 1, 144, 55, 66, 8, 229]
// // num.sort(compare)
// num.reverse()
// console.log(num)


//splice and slice
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedvalues = num.splice(2, 4, 1021, 1022, 1023, 1024) 
// console.log(typeof deletedvalues)

// let newNum = num.slice(3)
let newNum = num.slice(3,6)
console.log(newNum)
