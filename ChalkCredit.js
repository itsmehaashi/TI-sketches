
function setup() {
  createCanvas(400, 400);
  let r = 150;
  
}

function draw() {
  r= mouseX;
  background(220,38);
  noStroke();
  fill(0);
  for (let t = 0; t < 360; t= t+2) { 
    d = radians(t);
    let x = width/2+t *sin(d) + random(0,15);
    let y = height/2+t * cos (d) + random(0,15);
   noStroke(); 
  fill(60,80,23);
    triangle( x*3, y*3, 11,12,14,13);
    triangle( x*4, y*4, 11, 12, 13, 14);
    triangle( x*6, y*6, 10, 11, 12, 13);
    triangle( x*8, y*8, 8,9,10,11);
    triangle( x*10, x*10,1,2,3,4);
    triangle( x*3, y*3, 3, 4, 5,6 );
    triangle( x*5, y*5, 11,12,13,14);
    triangle( x*11, x*11, 12,13,14,15);
    
}
}