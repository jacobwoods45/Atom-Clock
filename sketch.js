

  let angle =0;
function setup() {
  createCanvas(1920, 1080, WEBGL);
  frameRate(30);
}

function draw() {


let hr =hour();
let mn = minute();
let s = second();
let ms = millis();
let d = day();


let milliWidth=(ms*.02);





  background(255);
  rectMode(CENTER);
  noStroke();
  fill(255, 0, 102);
  

  
  rotateX(angle);
  rotateY(angle*.02);
  rotateZ(angle);
 

  torus(200+(s*5), 10);
 
  fill(255, 102, 102);



  rotateX(angle);
  rotateY(angle*.02);
  rotateZ(angle);
 
  
  torus(200+(mn*5), 10);


  rotateX(angle);
  rotateY(angle*.02);
  rotateZ(angle);
 
  
  torus(200+(mn*5), 10);

  fill(255, 80, 80);
  rotateX(angle);
  rotateY(angle*.02);
  rotateZ(angle);
 
  
  torus(200+(hr*5), 10);

///////////////////////////
  
 
  fill(0, 204, 153);
  rotateX(angle);
  rotateY(angle*.02);
  rotateZ(angle);
 
  
  torus(600+(d*5), 10);


  fill(50,ms, 120);
  box(50);
 
 
 

 
  //text(hr + : ':' + mn + ':' +s + ':' +ms, 10, 200);
  

  angle+= 0.01;
}