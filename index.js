const container = document.querySelector(".container");

const baseURL = "https://www.thecolorapi.com";

let colorPalette = [];

fetch(`${baseURL}/scheme?hex=24B1E0`)
	.then((response) => response.json())
	.then((data) => {
		colorPalette = data.colors;
		renderColorPalette();
	});

function renderColorPalette() {
	let colorHTML = "";

	colorPalette.map((color) => {
		colorHTML += `
      <li>
					<div class="color" style="background-color: ${color.hex.value};"></div>
					<p class="hex-value">${color.hex.value}</p>
				</li>
      `;
	});

	container.innerHTML = colorHTML;
}
