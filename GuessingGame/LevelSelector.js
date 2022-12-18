import { correctPlayers, playerSets } from "./GuessingGameNames.js";
let level = 1;

let levelsDiv = document.getElementById("levels");
for (let i = 0; i < correctPlayers.length; i++) {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", "./GuessingGame.html");
  let div = document.createElement("div");
  let divText = document.createTextNode(i + 1);
  div.setAttribute("id", i + 1);
  div.appendChild(divText);
  anchor.appendChild(div);
  levelsDiv.appendChild(div);
}

let levelBoxes = document.querySelectorAll("#levels > *");

for (const levelBox of levelBoxes) {
  levelBox.addEventListener("click", function (event) {
    level = event.target.id;
    sessionStorage.setItem("level", level);
    window.open("./GuessingGame.html", "_self");
  });
}

function randomlist() {
  var randomId = Math.floor(Math.random() * playerSets.length);
  playerSets[randomId];
  return randomId;
}

function generateLevel() {
  var randomLevel = randomlist(level);
  console.log(randomLevel);
  sessionStorage.setItem("level", randomLevel);
  window.open(`./GuessingGame.html/`, "_self");
}

const randomBtn = document.getElementById("btn");
randomBtn.addEventListener("click", generateLevel);
