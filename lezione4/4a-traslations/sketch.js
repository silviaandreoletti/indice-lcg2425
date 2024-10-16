function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  translate(mouseX, mouseY);
  translate(100,100);
  rect(50, 50, 100, 50);
  // --> 50+100, 50+100
  fill("purple");
  rect(0,0,200,30);
  strokeWeight(5);
  point(0,0);
  point(50,50)
  strokeWeight(5);
  point(50,50);
}
