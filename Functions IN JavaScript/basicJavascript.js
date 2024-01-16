// const a= 2;
// const b = 12;

// const add = a+ b;
// console.log(add);

// const c= 12;
// const d = 92;

// const addTwo = c+ d;
// console.log(addTwo);


// const e= 2;
// const f = 92;

// const addThree = e+ f;
// console.log(addThree);



// const a= 2;
// const b = 12;
// sum(a,b);

// const c= 12;
// const d = 92;
// sum(c,d)

// const e= 2;
// const f = 92;

// sum(e,f)

// function sum(x,y){
//     const sum = x+y;
//     console.log("the result is :",sum);
//     // console.log("the result is :",sumSub);
// }
// console.log("The subtraction **** operation is performaing here... !!! ")
// const j=12;
// const k = 23;
// sumSub(j,k);

// function sumSub(o,p){
//     const sumSub = o-p;
//     // console.log("the result is :",sum);
//     console.log("the result is :",sumSub);
// }


function adSquare(a,b){
    const sa = square(a);
    const sb = square(b);
    function square(num){
        return num * num;
    }
    return sa+sb;
}
console.log(adSquare(2,3));