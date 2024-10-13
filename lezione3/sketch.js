let canvasXMax= 200;
let canvasYMax= 200;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);
}

function draw() {
  textSize(15);
  let string_toprint="Contenuto mouseX= " 
  +mouseX; "\ny=" +mouseY;
  strokeWeight(1);
  line(0,mouseY,canvasXMax,mouseX); //o mouseY
  //feedback tasto mouse sinistro
  //disegnare linea gialla se schiacciamo mouse 
  //p5 --> true, se mouse è schiacciato 
  //altrimenti variabile è false -> variabile di tipo buleano
  if(mouseIsPressed == true) {
    //LEFT, RIGHT, CENTRAL... -> ricreiamo background
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloriamo di giallo
    stroke("pink");
  }else {
    stroke("black");
  } //altrimenti di nero
  mouseIsPressed;
}
