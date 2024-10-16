let button;
let elem;
let dice = 1;
//let numbers = [1, 2, 5, 79];
// x accedere dobbiamo usare indice, 4 elementi 
// numbers[0] --> 1 ...
// elementi = indice - 1
let colors = [ "red", "green", "pink", "blue", "orange", "yellow"];
//elem = 6 --> indice è 5
//colors[0] --> red;
//colors.lenght == 6

function setup() {
  elem = createElement("h2", "Keep rolling");
  elem.position(0, 30);
  createCanvas(400, 400);
  button = createButton("roll the dice");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(2);
  //1 --> rosso, 2 --> verde ecc
  let color = colors[dice-1];
  fill (color);
  textSize(30);
  text("Dice value " + dice, 5, 300);
}

function rollDice(){
  dice = random(1,6);
  //vogliamo solo numeri interi
  dice = floor(dice);
  //dice = ceil (dice);
}