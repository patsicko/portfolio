let homepage=document.getElementById("homepage");
console.log(homepage);
let color=window.getComputedStyle(homepage,null).getPropertyValue("background-color");
console.log(color);
homepage.addEventListener("click",e=>{
    homepage.style.backgroundColor="green";
})
