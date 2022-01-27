/*const botonClick = document.querySelector('#boton-click');
const input = document.querySelector('input-botones');

botonClick.addEventListener('click', ()=>{
  input.value = '';
});

for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
  }

const colores = [
    'red',
    'gray',
]*/
/*
let toggle = document.getElementById('toggle');

toggle.onclick = function (){
    toggle.classList.toggle(active);
};*/
const body = document.querySelector('body');
const toggleButton = document.querySelector("#toggle");
const switchMode = document.querySelector(".switch_mode");
toggleButton.addEventListener("click", darkMode);
function darkMode() {
    switchMode.classList.toggle("active");
    body.classList.toggle("active");
    toggleButton.classList.toggle("active");
}
