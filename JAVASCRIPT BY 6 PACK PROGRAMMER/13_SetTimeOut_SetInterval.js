const btn =document.querySelector("button");

const printName = (name,gender) => {
    const income = Math.floor(Math.random()*10000);
    
// let gender = male;

// if(gender){
//     gender="Male";
// }
// else  
// gender="Female";
console.log(`welcome, ${name}. Your Income is $${income}. Gender is ${gender}`);
}
// const customeTimeOut=setTimeout(printName,2000,"Shushant",2000,"male");  
const id=setInterval(printName,2000,"Shushant",2000,"male");  


 btn.addEventListener("click",()=>{
    // clearTimeout(customeTimeOut);
    clearInterval(id);
 })