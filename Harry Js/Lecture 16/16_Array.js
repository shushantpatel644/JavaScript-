let a = [1, 2, 3, 4, 5, "hello", true, "hi"]
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[5])
console.log(a[9]) //will be undefined bcz index 6 does not exist
console.log("the length of a is", a.length)
a[8] = "string" //adding a new value to the array
a[0] = 83 //changing the value of an array
console.log(a) 