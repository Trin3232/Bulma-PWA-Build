let colors = [
  "#ffdd57",
  "#ffc857",
  "#e1ff57",
  "#6cff57",
  "#57fff4",
  "#5786ff",
  "#ee2e37"
];

let changeBackground = function() {
  let div = document.getElementsByClassName("hero is-fullheight");
  if (div.length > 0) {
    div[0].style["background-color"] =
      colors[Math.floor(Math.random() * colors.length - 1)];
  }
};

changeBackground();
