const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("hey Whats your age");
a = Number.parseInt(a); //converting the string to a number
if (a < 0) {
    console.log("This is an invalid age");
}
else if (a < 9) {
    console.log("Your are a kid and you cannot think of driving");
}
else if (a < 18 && a <= 19) {
    alert("Your are a kid and you can think of driving after 18");
}
else {
    console.log("You can now drives as you are above 18");
}

//homw work - Explore switc statments and write a baise program 
console
    .log("You can", (a < 18 ? "not drive" : "drive"));