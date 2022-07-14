let homepage=document.getElementById("homepage");
console.log(homepage);
let color=window.getComputedStyle(homepage,null).getPropertyValue("background-color");
console.log(color);
homepage.addEventListener("click",e=>{
    homepage.style.backgroundColor="green";
})


let mode=document.getElementsByClassName("fa-solid")[0];
console.log(mode);
let body=document.getElementsByTagName("body")[0];
console.log(body);

mode.addEventListener("click",e=>{
    body.classList.toggle("mode");
})