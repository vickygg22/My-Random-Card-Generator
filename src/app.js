/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".cardValue").innerHTML = generateRandomValue();
  function generateRandomValue() {
    let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomValues = Math.floor(Math.random() * values.length);
    return values[randomValues];
  }
  let mainDiv = document.querySelector(".card");
  mainDiv.classList.add(generateRandomSuit());
  function generateRandomSuit() {
    let suits = ["heart", "diamond", "spade", "club"];
    let randomSuits = Math.floor(Math.random() * suits.length);
    return suits[randomSuits];
  }
};
