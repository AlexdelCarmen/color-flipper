const simpleColors = [
  "black",
  "silver",
  "gray",
  "white",
  "purple",
  "maroon",
  "navy",
  "red",
  "purplegreen",
  "green",
  "olive",
  "orange",
  "lime",
  "teal",
  "olivedrab",
  "aqua",
  "fuchsia",
];

let colorStatus = "simple";

let newColor

function flipColor() {
  let color;
  if (colorStatus === "simple") {
    let i = Math.floor(Math.random() * (simpleColors.length - 0 + 1));
    color = simpleColors[i];
    colorSpan.style.textTransform = 'capitalize';
    return color;
  } else {
    let i = Math.floor(Math.random() * 16777215);
    color = "#" + i.toString(16).padStart(6, "0");
    colorSpan.style.textTransform = 'uppercase';
    return color;
  }
}


const colorSpan = document.getElementById("color");

const simpleButton = document.getElementById("simple");
const hexButton = document.getElementById("hex");

simpleButton.addEventListener("click", () => {
  colorStatus = "simple";
});

hexButton.addEventListener("click", () => {
  colorStatus = "hex";
});

const flipColorButton = document.getElementById("flip");

flipColorButton.addEventListener("click", () => {
    newColor = flipColor();
    colorSpan.textContent = newColor;
    document.body.style.backgroundColor = newColor; 
});
