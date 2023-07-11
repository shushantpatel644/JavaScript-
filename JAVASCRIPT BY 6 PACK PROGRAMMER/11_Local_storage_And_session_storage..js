const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn= document.getElementById("myBtn");

// const btnClick=()=>{
//     // alert("clicked");
//     // alert(input.value); 
//     sessionStorage.setItem("key1",input.value)
// };
// btn.addEventListener("click",btnClick);

// deleteBtn.addEventListener("click",()=>{
//     sessionStorage.clear(); 
//     // console.log(sessionStorage.key(1));
// });

// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"));
// }

const btnClick=()=>{
    // alert("clicked");
    // alert(input.value); 
    localStorage.setItem("key1",
    JSON.stringify({name:"Shushant",surname:"Patel"})
    );
};
btn.addEventListener("click",btnClick);

deleteBtn.addEventListener("click",()=>{
    localStorage.clear(); 
    // console.log(sessionStorage.key(1));
});

if(localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")));
}