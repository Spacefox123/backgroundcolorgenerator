var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomize");

changeBackgroundColor();
randomButton.style.background = setCurrentGradient();

function generateRandomRGB() {
	var val1 = Math.floor(Math.random()*16777215).toString(16)
	return "#" + val1 
}

function setCurrentGradient() {
	if(color1.value !== undefined && color2.value !== undefined) {
		return "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	} else {
		return "linear-gradient(to right, " + color1 + ", " + color2 + ")";
	}
}

function changeBackgroundColor() {
	randomButton.style.background = setCurrentGradient();
	body.style.background = setCurrentGradient();
	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	color1 = generateRandomRGB()
	color2 = generateRandomRGB()
	changeBackgroundColor()
	color1 = document.querySelector(".color1");
	color2 = document.querySelector(".color2");
}

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);

randomButton.addEventListener("click", setRandomColors)
