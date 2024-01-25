//What:-  funtion is a block of code that fulfil a specific task
// Why :- reusability .. bulkey code se bach jate ha
run();

function run(){
console.log("running");
}

// call funtion or invoke karna  
// hosting is the process of moving funtion declaration to the top of file. and this is an automatically

// Named funtion assignment
let stand = function walk(){
    console.log('walking');
};
stand();

// Anonymous funtion assignment
let stand2 = function(){
    console.log('walking two');
};
stand2();


// here hoting is not allowed
let jump = stand ;
jump();

