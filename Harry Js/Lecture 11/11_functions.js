const hello = () => {
    console.log("heey how are you. I am toh fine yaar");
    return ("Hii");
}

function onePlus(x, y) {
    return Math.round(1 + (x + y) / 2);
}

const sum = (p, q) => {
    return p + q;
}

let a = 1;
let b = 4;
let c = 9;
let v = hello();
console.log(v);
console.log("One plus average of a and b is", onePlus(a, b));
console.log("One plus average of b and c is", onePlus(b, c));
console.log("One plus averege of a and c is", onePlus(a, c));
console.log(sum(9, 2))