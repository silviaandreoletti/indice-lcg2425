let angle=5;
function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
  strokeWeight(1);
  fill("orange");
  rotate(angle*0.1);//velocità di rotazione - uso fattore di riduzione della scala del'angolo
  rect(50, 50, 100, 50);
  pop();

  // --> 50+100, 50+100
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50);
  //per cambiare anchor point
  //traslare - tutte trasformazioni p5 sono additive
  push();
  translate(200,200); //centro della palla
  rotate(angle);
  fill("orange");
  circle(0,0,100);
  line(0,-50,0,50);
  pop();
  angle = angle + 2;
}
