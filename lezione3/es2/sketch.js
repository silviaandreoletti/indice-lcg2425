let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  //minimo, massimo, default, step
  slider = createSlider(0, 250, 0, 1);
  slider.position(0, canvasYMax-60);
  slider.size(200); //lunghezza visualizzazione
}
function draw() {
  let sldierVal=slider.value();
  background("navy");
  //con quale frequenza di aggiorna disegno
  frameRate(7); //generale (luna e stelle)
  //disegno moon
  colorMode(RGB);
  fill(255, 255, 0, 100);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);

  //Metodo aggiornamento 1
  /*
  moonXpos= moonXpos+1
  //se luna esce dai bordi 
  if (moonXpos>canvasXMax) { //luna esce da foglio
    //posso anche usare sottrazione moonXpos > moonXpos -200;
    moonXpos=0;
  }
  */

  //Metodo aggiornamento 2
  //variabile che continua ad aggiungere 1 per ogni frame disegnato
  moonXpos= (frameCount*5 +700) % canvasXMax; //*5 manipolo luna rispetto stelle
  //operatore di modulo - mi consente di avere divisibilità e confini
  //1 % 400 -> 1 / 400 = 0, resto = 1
  //2 % 400 -> 2 / 400 = 0, resto = 2

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill(sldierVal);
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }

  x_casa=0;
  //rollover --> agiamo se passiamo sopra
  //if passiamo sopra --> facciamo cose
  //siamo dentro le x e y della casa?
  //combino condizioni con operatori logici &&, ||
  //c1 && c2 -> entrambe condizioni vere
  //c1 || c2 -> almeno una condizione vera
  
  let left_corner = y-house_height;
  let sliderValue = slider.value;
  if((mouseX > x_casa)&&
  (mouseX<house_width)&&
  (mouseY>y-house_height)
  &&(mouseY<y)){
    fill(173,216,230);
    rect(x_casa, y-house_height , house_width, house_height);
  }else{
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height); 
  }

  //voglio disegnare stelle random
  let xStar=0;
  let yStar=0;
  //voglio generare 5 stelle 
  //devo ripetere un'azione --> for (ripetizione)
  //for(init; condizione; update)
  for(let numero_stelle=0; numero_stelle < 5; numero_stelle++){
    stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 255)); //colore random
    strokeWeight(random(0, 50)); //spessore random
    point(xStar,yStar);
    //funzione random per generare casualmente
    xStar= random(0, canvasXMax);
    yStar= random(0, canvasYMax / 2); //dò limite minimo, limite massimo 
  }

  /*if(frameCount==50){
    noLoop();
  }
  */


  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(frameCount, 0, 50);
}
