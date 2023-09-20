// array

const myArr = [0,1,8,3,4,5,6];
// const myHero = ["Shaktiman","naagraj"];
// const myArr2 = new Array(1,2,3,4);
// console.log(myArr[3]);


//Array methods

// myArr.push(7);
// myArr.push(8);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(1));
// console.log(myArr.indexOf(8));
// console.log(myArr);


// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);
// console.log(newArr);
 

//slice , splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);
 const myn2 = myArr.splice(1,3);
console.log("C",myArr);
console.log(myn2);