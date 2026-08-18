let body = document.querySelector("body");

let random = document.querySelector(".random");

let apply = document.querySelector(".apply");
let colorInput = document.querySelector("input");

let span = document.querySelector("span");

body.style.backgroundColor = "rgb(209,204,198)";

const hexColors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#FFC0CB",
  "#A52A2A",
  "#008000",
  "#808000",
  "#800000",
  "#008080",
  "#C0C0C0",
  "#808080",
  "#FFD700",
  "#4B0082",
  "#EE82EE",
  "#F5DEB3",
  "#DC143C",
  "#40E0D0",
  "#FF6347",
  "#7FFFD4",
  "#D2691E",
  "#FF1493",
  "#1E90FF",
  "#32CD32",
  "#FF4500",
  "#DA70D6",
  "#00CED1",
  "#B22222",
  "#6495ED",
  "#9932CC",
  "#3CB371",
  "#FF8C00",
  "#20B2AA",
  "#BA55D3",
  "#66CDAA",
  "#F08080",
  "#4682B4",
  "#DDA0DD",
  "#9ACD32",
  "#FA8072",
  "#2E8B57",
  "#8A2BE2",
  "#FF7F50",
  "#5F9EA0",
  "#E9967A",
  "#7B68EE",
];

const rgbColors = [
  "rgb(255, 99, 71)",
  "rgb(135, 206, 235)",
  "rgb(255, 215, 0)",
  "rgb(50, 205, 50)",
  "rgb(138, 43, 226)",
  "rgb(255, 105, 180)",
  "rgb(70, 130, 180)",
  "rgb(255, 140, 0)",
  "rgb(46, 139, 87)",
  "rgb(218, 112, 214)",
  "rgb(64, 224, 208)",
  "rgb(210, 105, 30)",
  "rgb(255, 192, 203)",
  "rgb(72, 61, 139)",
  "rgb(255, 228, 181)",
  "rgb(176, 224, 230)",
  "rgb(189, 183, 107)",
  "rgb(199, 21, 133)",
  "rgb(0, 191, 255)",
  "rgb(255, 127, 80)",
  "rgb(154, 205, 50)",
  "rgb(186, 85, 211)",
  "rgb(244, 164, 96)",
  "rgb(95, 158, 160)",
  "rgb(255, 182, 193)",
  "rgb(100, 149, 237)",
  "rgb(255, 160, 122)",
  "rgb(123, 104, 238)",
  "rgb(32, 178, 170)",
  "rgb(238, 130, 238)",
  "rgb(189, 252, 201)",
  "rgb(255, 99, 71)",
  "rgb(127, 255, 212)",
  "rgb(221, 160, 221)",
  "rgb(255, 218, 185)",
  "rgb(176, 196, 222)",
  "rgb(255, 20, 147)",
  "rgb(0, 206, 209)",
  "rgb(255, 69, 0)",
  "rgb(144, 238, 144)",
  "rgb(255, 105, 180)",
  "rgb(106, 90, 205)",
  "rgb(240, 128, 128)",
  "rgb(70, 130, 180)",
  "rgb(255, 228, 196)",
  "rgb(0, 139, 139)",
  "rgb(218, 165, 32)",
  "rgb(112, 128, 144)",
  "rgb(255, 192, 203)",
  "rgb(152, 251, 152)",
];

const hslColors = [
  "hsl(15, 100%, 50%)",
  "hsl(45, 100%, 50%)",
  "hsl(75, 70%, 45%)",
  "hsl(105, 60%, 45%)",
  "hsl(135, 70%, 40%)",
  "hsl(165, 70%, 45%)",
  "hsl(195, 80%, 50%)",
  "hsl(225, 80%, 55%)",
  "hsl(255, 70%, 55%)",
  "hsl(285, 65%, 55%)",
  "hsl(315, 75%, 55%)",
  "hsl(345, 80%, 55%)",
  "hsl(20, 90%, 60%)",
  "hsl(50, 90%, 60%)",
  "hsl(80, 65%, 55%)",
  "hsl(110, 65%, 55%)",
  "hsl(140, 60%, 55%)",
  "hsl(170, 65%, 55%)",
  "hsl(200, 75%, 60%)",
  "hsl(230, 75%, 65%)",
  "hsl(260, 65%, 65%)",
  "hsl(290, 60%, 65%)",
  "hsl(320, 70%, 65%)",
  "hsl(350, 75%, 65%)",
  "hsl(10, 80%, 45%)",
  "hsl(40, 80%, 45%)",
  "hsl(70, 60%, 40%)",
  "hsl(100, 55%, 40%)",
  "hsl(130, 55%, 40%)",
  "hsl(160, 60%, 40%)",
  "hsl(190, 70%, 40%)",
  "hsl(220, 70%, 45%)",
  "hsl(250, 60%, 45%)",
  "hsl(280, 55%, 45%)",
  "hsl(310, 65%, 45%)",
  "hsl(340, 70%, 45%)",
  "hsl(25, 85%, 70%)",
  "hsl(55, 85%, 70%)",
  "hsl(85, 65%, 70%)",
  "hsl(115, 60%, 70%)",
  "hsl(145, 55%, 70%)",
  "hsl(175, 60%, 70%)",
  "hsl(205, 75%, 70%)",
  "hsl(235, 70%, 70%)",
  "hsl(265, 60%, 70%)",
  "hsl(295, 55%, 70%)",
  "hsl(325, 65%, 70%)",
  "hsl(355, 70%, 70%)",
  "hsl(35, 75%, 55%)",
  "hsl(125, 45%, 35%)",
];

const namedColors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "yellow",
  "brown",
  "cyan",
  "magenta",
  "lime",
  "navy",
  "teal",
  "maroon",
  "olive",
  "coral",
  "tomato",
  "gold",
  "indigo",
  "violet",
  "crimson",
  "salmon",
  "khaki",
  "plum",
  "orchid",
  "turquoise",
  "chocolate",
  "beige",
  "lavender",
  "ivory",
  "tan",
  "silver",
  "gray",
  "aqua",
  "azure",
  "peru",
  "sienna",
  "wheat",
  "skyblue",
  "royalblue",
  "steelblue",
  "seagreen",
  "darkorange",
  "deeppink",
  "darkviolet",
  "slateblue",
  "firebrick",
  "hotpink",
  "mediumseagreen",
  "darkcyan",
];

let colorArray = [hexColors,rgbColors,hslColors,namedColors]
let getColor = () => {

  let randomColorArray = colorArray[Math.floor(Math.random()* colorArray.length)]

  let color = randomColorArray[Math.floor(Math.random() * randomColorArray.length)]
  // return (
  //   "#" +
  //   Math.floor(Math.random() * 16777216)
  //     .toString(16)
  //     .padStart(6, "0")
  // );
  return color;
};

let setBackground = (color) => {
  body.style.backgroundColor = color;
  span.innerText = color;
  colorInput.value = "";
};

const handleRandom = () => {
  const color = getColor();
  setBackground(color);
};

function isValidColor(color) {
  const temp = document.createElement("div");
  temp.style.backgroundColor = color;

  return temp.style.backgroundColor !== "";
}

const handleApply = () => {
  const color = colorInput.value.trim().toLowerCase();

  if (!isValidColor(color)) {
    alert("Invalid color");
    return;
  }
  setBackground(color);
};

colorInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleApply();
  }
});

colorInput.addEventListener("input", () => {
  apply.disabled = !colorInput.value.trim();
});

random.addEventListener("click", handleRandom);
apply.addEventListener("click", handleApply);
