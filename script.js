
function rollDice() {


  const randomNumber = Math.ceil(Math.random() * 6)  ;

  const diceImageElement = document.getElementById("dice-image");
  diceImageElement.src = "./img/"+ randomNumber + ".png"; 
}