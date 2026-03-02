const container = document.querySelector(".container");
const colorInput = document.querySelector(".color-input");
const variant = document.querySelector(".variant");
const submitBtn = document.querySelector(".submit-btn");

const baseURL = "https://www.thecolorapi.com";

let colorPalette = [];
const colorModes = [
  "monochrome",
  "monochrome-dark",
  "monochrome-light",
  "analogic",
  "complement",
  "analogic-complement",
  "triad",
  "quad",
];

renderOptions();

function fetchColorPalette() {
  let color = colorInput.value.split("").slice(1, 7).join("");
  let mode = variant.value;

  fetch(`${baseURL}/scheme?hex=${color}&mode=${mode}`)
    .then((response) => response.json())
    .then((data) => {
      colorPalette = data.colors;
      renderColorPalette();
    });
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetchColorPalette();
});

function renderColorPalette() {
  let colorHTML = "";

  colorPalette.map((color) => {
    colorHTML += `
		<li>
			<div class='color' style="background-color: ${color.hex.value};"></div>
			<p class='hex-value' >${color.hex.value} </p>
		</li>
		`;
  });

  container.innerHTML = colorHTML;
}

function renderOptions() {
  let optionHTML = "";

  colorModes.map((mode) => {
    optionHTML += `
			<option value='${mode}'>${mode}</option>
		`;
  });

  variant.innerHTML = optionHTML;
}
