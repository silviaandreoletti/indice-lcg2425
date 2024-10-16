let angle=5;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  drawRotateBasketBall(200, 200, 100, angle);
  drawBasketBall(100, 100, 50);
  angle += 0.7;
}

function drawRotateBasketBall(xCenter, yCenter, dBall, angle){
  //misurare trasformazioni rispetto contesto 
  push();
  //codice delle trasformazioni
  translate(xCenter, yCenter);
  rotate(angle);
  drawBasketBall(0, 0, dBall);
  pop();

}

//(parametri) {corpo della funzione} devo disegnare palla
function drawBasketBall(xCenter, yCenter, dBall){
  fill(255,165,0);
  stroke(0);
  strokeWeight(3);
  circle(xCenter, yCenter, dBall);
  line(-50+xCenter,yCenter,50+xCenter,0+yCenter);
  line(-35+xCenter, -35+yCenter, 35+xCenter, 35+yCenter);
  line(-35+xCenter, 35+yCenter, 35+xCenter, -35+yCenter);

}
