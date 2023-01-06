// Seven types of Primitive data Types in javaScript

//primitives in js

// n null
// n Number
// s Symbol
// s String
// b Boolean
// b BigInt
// u undefined

// nn bb ss u 
let a = null; //object
let b = 345; //number
let c = true; // can also be false
let d = BigInt("450") + BigInt("50") //bigint
let e = "Shushnat" //string
let f = Symbol("I am a nice person") //sybmol
let g = undefined
// console.log(a, b, c, d, e, f, g)
// console.log(typeof d)
// console.log(typeof b)
// console.log(typeof a)
// console.log(typeof f)


//objects in js

//object is a non primitive datatype in javascript
//Non primitives data types- objects in js
const item = {
    "Shushant": true,
    "Subh": false,
    "Lovish": 34,
    "Mohan": undefined
}
console.log(item["Mohan"])