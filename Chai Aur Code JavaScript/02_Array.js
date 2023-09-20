const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
 
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


//concatation

// const allHero = marvel_heros.concat(dc_heros);
// console.log(allHero);

//spred operator
// const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);

// const another_array = [1,2,3,[4,5,6],7,[8,2,[3,9]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Shushant"));
console.log(Array.from("Shushant"));
console.log(Array.from({name:"Shushant"})) //intresting

let score1=200;
let score2=300;
let score3=400;

console.log(Array.of(score1,score2,score3));


