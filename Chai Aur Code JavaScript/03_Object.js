//object literal
const mysym = Symbol("key1")

const jsUser ={
    name: "Shushant",
    "full name" :"Shushant Patel",
    [mysym]:'"myKey1',
    age : 21,
    location:"Lucknow",
    email:"shushantpatel59@gmail.com",
    isLoggedIn:false,
    lastLoginInDays:["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

jsUser.email="patelshushant695@gmail.com";
// Object.freeze(jsUser);
jsUser.email="abc@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(jsUser.greeting()); //sirf ref aya h exut hua hai..
console.log(jsUser.greetingTwo()); //