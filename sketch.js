function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(10);  
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  

  stroke(255,100,150);
  noFill();
  strokeWeight(8);

  let end = map(sc, 0, 60, 0, 360);
  arc(0,0,300,300,0,end,OPEN);
  push();
  rotate(end);
  stroke(255,100,150);
  line(0,0,120,0);
  pop();
  
  stroke("yellow");
  let end2 = map(mn, 0, 59, 00, 360);
  arc(0,0,280,280,0,end2,OPEN);
  push();
  rotate(end2);
  stroke("yellow");
  line(0,0,100,0);
  pop();

  stroke("blue");
  let end3 = map(hr%12, 0, 12, 0, 360);
  arc(0,0,260,260,0,end3,OPEN);
  push();
  rotate(end3);
  stroke("blue");
  line(0,0,80,0);
  pop();


  drawSprites();
}