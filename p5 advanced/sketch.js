let xsize = 400;
let ysize = 400; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //cielo scuro
  background("darkblue");
  //vogliamo disegnare luna
  fill("yellow");
  stroke("white");
  strokeWeight(10);
  circle(300, 90, 100);
  //prima della forma dobbiamo cambiare parametri di fill e stroke 
  fill("green");
  stroke("darkgreen");
  strokeWeight(5);
  rect(0, 200, 400, 200);
  //ordine in p5
  stroke("yellow");
  strokeWeight(20);
  let xStars_prim= 10;
  let yStars_prim= 20;
  point(xStars_prim,yStars_prim);
  let passo= 1;
  //for
  for(let i=0; i<50; i=i+passo) {
    // 0--> y 1 --> w 2 --> y 3 -->w .... 49
    strokeWeight(i*3)
    if(i%2==0){
      //numeri pari
      //corpo di ramo vero
      stroke("yellow");
    }else{
      //numeri dispari
      //altrimenti questo
      stroke("orange");
    }
    point(xStars_prim*i, yStars_prim+i);
  }
  // stella polare
  // point(xStars_primordiale+60,30);
  // //aggiungiamo un'altra stella
  // point(xStars_primordiale,100);
  // point(75,100);
  fill("white");
  stroke(0);
  strokeWeight(0);
  textSize(20);
  text("C'era una volta...",200,350);

  // Impostazioni base per il disegno
  stroke("yellow");
  strokeWeight(20);
  
  let xcasa = 10;
  let ycasa = 20;
  let step = 50; // Distanza tra le casette
  
  for (let i = 0; i < 5; i++) { // Disegna casette
    let x = xcasa + i * passo * 70; // Posizione orizzontale delle casette
    let y = ycasa + 140;           // Posizione verticale delle casette
    
    // Disegna il rettangolo (corpo della casa)
    stroke("brown");
    fill(200, 100, 100); // Colore del corpo della casa
    strokeWeight(3);
    rect(x, y, 50, 50); // Rettangolo della casa (x, y, larghezza, altezza)
    
    // Disegna il tetto
    stroke("orange");
    fill(150, 50, 50); // Colore 
    strokeWeight(3);
    triangle(x - 10, y, x + 25, y - 40, x + 60, y); // Triangolo del tetto (coordinate dei vertici)
  }


  
}

