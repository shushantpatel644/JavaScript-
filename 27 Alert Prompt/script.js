// alert("hello your script works")
// alert("Hii i am shushant patel")
// const prompt = require("prompt-sync")({ sigint: true });
alert("Enter the value of a! ")
let a = prompt("Enter a here")
// document.write(a)
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))

let write = confirm("Do you want to write it to the pafge")
if (write) {
    document.write(a)
}
else {
    document.write("please allow me to write")
}

