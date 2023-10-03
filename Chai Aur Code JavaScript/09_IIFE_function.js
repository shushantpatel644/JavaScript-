// immedoately invoked function expression

// 1st for function
// 2nd for execution
// () ()

(function chai(){
    // named iifee
    console.log(`DB CONNECTED`)
})();

// global scope ke polution se problem hoti hai.. var ya declaration ke polution ko hatne ke liye iife ka use kiya

((name) =>{
    console.log(`DB CONNECTED TWO${name}`);
})("shushnat")