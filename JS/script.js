const menue = document.querySelector(".hamburger");
const nav = document.querySelector(".toggle-nav");

menue.addEventListener('click', ()=>{
    nav.classList.toggle("show");
})

const buttons = document.querySelectorAll("button");

buttons.addEventListener('click', ()=>{
    alert("Dummy Page");
})