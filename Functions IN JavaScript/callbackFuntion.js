const calculate = (a,b,operation) =>{
    return operation(a,b);
}

//method 1

const addition = calculate(4,9,function(num1,num2){
    return num1+num2;
});

console.log(addition);

//method 2

const subtraction = (a,b) => a-b;
const subResult = calculate(9,7,subtraction);


console.log(subResult);


//method 3

function multiply(a,b){
    return a*b;
}
const mlResult = calculate(39,2,multiply);
console.log(mlResult);


const a = [3,2,4,1,-9,7,2,3,4];

const first = (num) => {
    return num<0;
}
// const result = a.findIndex(first);
console.log(a.findIndex(first));
// console.log(result);

a.forEach((num) =>{
    console.log("array num: ",num);
})