var frames = 100,
  diam = 0,
  theta = 0;
var N = 0;
function setup() {
  createCanvas(500,500);
  diam = height/2;
  noStroke();
}

function draw() {
  background(0);
  push();
  translate(width/2, height/2);
  rotate(theta);
  stroke(0);
  fill(0,255,0);
  arc(0,0,diam, diam, PI/2,PI+PI/2);

  
  fill(255,0,0);
  arc(10,8,diam, diam, PI+PI/2,TWO_PI+PI/2);
  
      fill(255,204,0);
  arc(0,0,diam, diam, PI,PI+PI/2);
    fill(255);
stroke(255,100,170);
strokeWeight(9);
  arc(0,0,diam, diam, PI+PI/2,TWO_PI+PI/4);
fill(255,100,0);

stroke(0);
strokeWeight(1);
  arc(10,8,diam, diam, TWO_PI+PI/15,TWO_PI+PI/4);
  fill(120,0,230);
  ellipse(0,-diam/7, diam/2, diam/2);

  fill(255);
ellipse(0,-diam/9, diam/4, diam/4);

 fill(255);
 stroke(0);
 strokeWeight(5);
ellipse(0,-diam/9, diam/20, diam/20);
 fill(255);
 stroke(0);
 strokeWeight(5);
ellipse(15,-diam/9, diam/20, diam/20);
noStroke();
 triangle(0,diam/4, diam/2, diam/2);
    translate(2,200);
  rotate(frameCount/8);
  fill(0,255,0);
  star(0, 00, 80, 170, 50); 
  triangle(0,-5,18,150,205,130);
  fill(0,255,0,50);
  stroke(255);
   fill(0);
 
  pop();
  
  function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/5.0;
  fill(0,0,60,90);
  
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius2;
    sy = y + sin(a+halfAngle) * radius1;
    fill(0,0,255,90);
    vertex(sx, sy);

  
  }
  endShape(CLOSE);
}
    textSize(25);
    fill(0);
   textStyle(BOLD);
  text("Outlook not so good", 70,50,50);
      textSize(25);
    fill(0);
  text("Reply hazy, try again", 390,70,50);
   textSize(25);
    fill(0);
  text("It is certain", 40,420,500);
    textSize(25);
    fill(0);
  text("Burritos!", 370,390,50);

   
  
  
  theta += TWO_PI / frames;
  
    }
  
    function mousePressed(){
         

 
loop();
  
}
