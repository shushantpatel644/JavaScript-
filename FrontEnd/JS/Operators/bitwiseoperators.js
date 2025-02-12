const a = 10;
const b = 6;
// console.log( a&b);   // bitwise and 

/*
explain:- 

10 in binary :- 1010
6 in binary  :- 0110
                ----
                0010 -> 2
1 and 1 = 1 
1 and 0 = 0 
0 and 0 = 0 
*/

// console.log(a | 4); // bitwise or , single pipe 
/*
explain

10 in binary :- 1010 
4 in binary  :- 0100
                ----
                1110 -> 14 
1 or 1 = 1
0 or 1 = 1
0 or 0 = 0 
*/

console.log(a ^ b); //bitwise xor 
/*
10 in binary :- 1010
6 in binary  :- 0110
                ----
                1100 -> 12

0 xor 0 = 0
1 xor 0 = 1
0 xor 1 = 1
1 xor 1 = 0
*/

console.log( 1 << 3); 

console.log(3>>5);

console.log(9>>1);
console.log(9>>2);


