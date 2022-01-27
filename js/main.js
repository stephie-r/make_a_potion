
const body = document.querySelector('body');
const toggleButton = document.querySelector("#toggle");
const switchMode = document.querySelector(".switch_mode");
toggleButton.addEventListener("click", darkMode);
function darkMode() { //SWITCH EVENT DARK LIGHT MODE
    switchMode.classList.toggle("active");
    body.classList.toggle("active");
    toggleButton.classList.toggle("active");
}

const buttonCta = document.querySelector("#cta");
const element = document.querySelector("p");
  
buttonCta.addEventListener("click",startClass);
function startClass() {//START CLASS
  element.innerHTML = "Hi and welcome to your first potion class! Shall we get started?"

}