// Apply eventListner

// 1st way
// document.addEventListener('click',function(){
//     console.log(' I have clicked on the document');
// });


//2nd way
// function eventFuntion(){
//     console.log(' I have clicked on the document');
// }
// document.addEventListener('click',eventFuntion);


// remove eventListner


// const content = document.querySelector('#wrapper');

// content.addEventListener('click',function(event){
//     console.log(event);
// })

//the default action // prevent default

let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('maza aaya, accha laga');
});


