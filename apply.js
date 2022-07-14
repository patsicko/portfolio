

let container=document.querySelector(".container");
let button=container.firstElementChild.nextElementSibling;


let form=document.querySelector(".form");
let input=document.querySelectorAll("input");
let fname=input[0];
let lname=input[1];
let email=input[2];
let password=input[3];
let education=document.getElementById("education");

let photo=document.getElementById("photo");
let submit=document.getElementById("submit");
let congs=document.querySelector(".congs");


function apply(){

button.addEventListener("click",e=>{

  form.classList.toggle("apply");
  console.log(form);
  
  })
}
apply();
console.log(submit);

submit.addEventListener("click",e=>{
    form.classList.toggle("submitted");
    console.log(fname.value+" "+lname.value);
    congs.classList.toggle("visible");

    if(fname.value && lname.value && email.value && password.value){
        congs.textContent=` Congratulations ${fname.value} ${lname.value}!!!
         your application is successfully received. You will obtain a feedback within 48 hours.`;
        console.log(`${fname.id}:${fname.value} ${lname.id}:${lname.value} ${email.id}:${email.value} ${password.id}:${password.value} ${education.id}:${education.value}`)
        
    }
  else{
    congs.textContent=`Please, fill all the fields correctly!!`

    setTimeout(()=>{
   message();
    },5500)
   
  }
  

    
})

function message(){
  congs.classList.add("repeat");
   
  congs.textContent=`Please, fill all the fields correctly!!`+" "+" "+`Refresh and click on Apply button to obtain the form again.`
}