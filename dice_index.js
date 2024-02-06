var dicePoint1 = Math.floor(Math.random()*6) + 1;
var dicePoint2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "images/dice" + dicePoint1 + ".png";
var randomDiceImage2 = "images/dice" + dicePoint2 + ".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",randomDiceImage1);
image2.setAttribute("src",randomDiceImage2);

if(dicePoint1===dicePoint2){
  document.querySelector("h1").innerText = "Draw!";
}else if(dicePoint1 > dicePoint2){
  document.querySelector("h1").innerText = "Player 1 wins!";
}else if(dicePoint1 < dicePoint2){
  document.querySelector("h1").innerText = "Player 2 wins!";
}
