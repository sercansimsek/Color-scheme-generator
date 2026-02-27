const baseURL = "https://www.thecolorapi.com";

let colorPalette = [];

fetch(`${baseURL}/scheme?hex=24B1E0`)
	.then((response) => response.json())
	.then((data) => {
		colorPalette.push(data.colors);
	});


  console.log(colorPalette);
  