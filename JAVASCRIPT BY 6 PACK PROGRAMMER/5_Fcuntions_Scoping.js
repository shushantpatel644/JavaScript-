
//without using function

// let result = (23 * 10+ 23 * 10 + 23 * 10)/10;
// console.log(result);

// let result2= (65 * 10+ 43 * 10 + 45 * 10)/10;
// console.log(result2);

//using function

// function printvalye(){
//     let result = (23 * 10+ 23 * 10 + 23 * 10)/10;
//     console.log(result)
// }
// printvalye();

//other way

// const myFunc = function printvalye(a=0,b=0,c=0){

//     let result = (a* 10+ b * 10 + c * 10)/10;
//     console.log(result)
// }
// myFunc(465,98,78);

// function intro(name){
//     console.log(``)
// }



// sum of total array
function totalarray(arr=[]){
    let total =0;
    for(let i=0;i<arr.length;i++){
    total += arr[i];
    }
    return total;
}
const arr = [1,2,983,4,5,56,7,89];
console.log(totalarray(arr))

// let a = 20;
// {
//     let a=10;
//     console.log(a);
// }
// console.log(a);

// function myArr(a = 0, b = 0, c = 0, d =
//     0) {
//     let rel = a + b + c + d;
//     console.log(rel);
//    }
//    myArr(16, 4);