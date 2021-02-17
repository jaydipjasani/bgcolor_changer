const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");;
const body = document.getElementById("main");
const heading3 = document.querySelector("h3");

function gradient() {
    body.style.background = "linear-gradient(to right ," + color1.value + ", " + color2.value + ")";
    heading3.textContent = body.style.background;
}

color1.addEventListener("input",gradient);

color2.addEventListener("input",gradient);

