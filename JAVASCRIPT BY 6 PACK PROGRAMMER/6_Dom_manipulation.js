// const arr = document.body.children;

// //converting it into array 

// const newArr = Array.from(arr);

// for(let i=0;i<newArr.length;++i){
//     console.log(newArr[i]);
// }

// console.log(newArr);
// //
// console.log(arr);


// excess elemnt from html file

// const thisOne = "shusi";

// console.log(document.getElementById("thisOne")); // it will print from html file
// console.log(thisOne);  // 

// const thisOne = document.getElementsByName("email");
// console.log(thisOne[0]);

// ********span********


// const thisOne = document.getElementsByTagName("span");

// thisOne[0].style.backgroundColor="navy";
// thisOne[0].style.color="#fff";
// thisOne[0].style.font="100 1.5rem 'Robot' ";

const myBtn = document.getElementById("myBtn");

myBtn.style.backgroundColor = "blue";
myBtn.style.color="#fff";
myBtn.style.border="none";
myBtn.style.padding = "2vmax 4vmax";
myBtn.style.cursor = "pointer";

// console.log(myBtn.getAttribute("id"));
console.log(myBtn.getAttribute("id"));
//  console.log(thisOne[0]);
const myBtn = document.querySelectorAll("button");

myBtn[1].onclick= deleteHeading;
myBtn.onclick = bringMeHeading;

function bringMeHeading(){
    const h2 = document.createElement("h2");
    h2.innerText='asdf';
    document.body.prepend(h2);
}
function deleteHeading(){
    const h2 = document.querySelector("h2");
    h2.remove();
}


