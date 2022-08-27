let toggle = document.querySelector(".container");
let text = document.querySelector(".text");
let body = document.querySelector("body");

function Animatedtoogle() {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    if (toggle.classList.contains("active")) {
        text.innerHTML = "ON";
    } else {
        text.innerHTML = "OFF";
    }
}

toggle.removeEventListener("click", Animatedtoogle());
body.removeEventListener("click", Animatedtoogle());
