import { playerSets } from "./LevelsNames.js";
import { correctPlayers } from "./LevelsNames.js";

let level = 1;
let levelTracker = document.getElementById("level");
levelTracker.appendChild(document.createTextNode("Level: " + level));
let numGuess = 0;
let guessTracker = document.getElementById("guesses");
guessTracker.appendChild(document.createTextNode("Guesses: " + numGuess));
let correctPlayer = correctPlayers[level-1];
let playerSet = playerSets[level-1];
let player1Img = document.getElementById("player1Image");
let player2Img = document.getElementById("player2Image");
let player3Img = document.getElementById("player3Image");
let player4Img = document.getElementById("player4Image");
let player1Txt = document.getElementById("player1Text");
let player2Txt = document.getElementById("player2Text");
let player3Txt = document.getElementById("player3Text");
let player4Txt = document.getElementById("player4Text");
player1Img.src = playerSet.player1Image;
player2Img.src = playerSet.player2Image;
player3Img.src = playerSet.player3Image;
player4Img.src = playerSet.player4Image;
let text1 = document.createTextNode(playerSet.player1);
let text2 = document.createTextNode(playerSet.player2);
let text3 = document.createTextNode(playerSet.player3);
let text4 = document.createTextNode(playerSet.player4);
player1Txt.appendChild(text1);
player2Txt.appendChild(text2);
player3Txt.appendChild(text3);
player4Txt.appendChild(text4);
let form = document.forms["playerGuess"];
form.addEventListener("submit", checkGuess);

function checkGuess(event) {
  event.preventDefault();
  let guess = form["nameGuess"].value;
  if (guess.toLowerCase() == correctPlayer.toLowerCase()) {
    toastr.success("Success! Next level.")
    form.reset();
    nextLevel();
    return;
  } else {
    toastr.error("Incorrect, try again!");
    form.reset();
    if (numGuess < 4) {
      addTeam(numGuess);
    } else {
      let skip = prompt("Would you like to skip the level? (Y or N)");
      while (skip.toLowerCase() != "y") {
        if (skip.toLowerCase() == "n") {
          break;
        }
        skip = prompt("Please input a valid value. (Y or N)");
      }
      if (skip == "y") {
        toastr.info("The correct answer was: " + correctPlayer)
        nextLevel();
        return;
      }
    }
    guessTracker.removeChild(guessTracker.firstChild);
    numGuess++;
    guessTracker.appendChild(document.createTextNode("Guesses: " + numGuess));
  }
}

function nextLevel() {
  levelTracker.removeChild(levelTracker.firstChild);
  level++;
  levelTracker.appendChild(document.createTextNode("Level: " + level));
  numGuess = 0;
  guessTracker.removeChild(guessTracker.firstChild);
  guessTracker.appendChild(document.createTextNode("Guesses: " + numGuess));
  correctPlayer = correctPlayers[level-1];
  playerSet = playerSets[level-1];
  let player1Img = document.getElementById("player1Image");
  let player2Img = document.getElementById("player2Image");
  let player3Img = document.getElementById("player3Image");
  let player4Img = document.getElementById("player4Image");
  let player1Txt = document.getElementById("player1Text");
  let player2Txt = document.getElementById("player2Text");
  let player3Txt = document.getElementById("player3Text");
  let player4Txt = document.getElementById("player4Text");
  player1Img.src = playerSet.player1Image;
  player2Img.src = playerSet.player2Image;
  player3Img.src = playerSet.player3Image;
  player4Img.src = playerSet.player4Image;
  removeAllText(player1Txt);
  removeAllText(player2Txt);
  removeAllText(player3Txt);
  removeAllText(player4Txt);
  let text1 = document.createTextNode(playerSet.player1);
  let text2 = document.createTextNode(playerSet.player2);
  let text3 = document.createTextNode(playerSet.player3);
  let text4 = document.createTextNode(playerSet.player4);
  player1Txt.appendChild(text1);
  player2Txt.appendChild(text2);
  player3Txt.appendChild(text3);
  player4Txt.appendChild(text4);
}

function addTeam(guessNum) {
  switch (guessNum) {
    case 0:
      let player1Team = document.createTextNode(" - " + playerSet.player1Team);
      player1Txt.appendChild(player1Team);
      break;
    case 1:
      let player2Team = document.createTextNode(" - " + playerSet.player2Team);
      player2Txt.appendChild(player2Team);
      break;
    case 2:
      let player3Team = document.createTextNode(" - " + playerSet.player3Team);
      player3Txt.appendChild(player3Team);
      break;
    case 3:
      let player4Team = document.createTextNode(" - " + playerSet.player4Team);
      player4Txt.appendChild(player4Team);
      break;
  }
}

function removeAllText(element) {
  var nodes = element.childNodes;
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.nodeType == Node.TEXT_NODE) {
      node.parentNode.removeChild(node);
      i--;
    } else if (node.nodeType == Node.ELEMENT_NODE) {
      removeAllText(node);
    }
  }
}
