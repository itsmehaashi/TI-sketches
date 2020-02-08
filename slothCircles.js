let p;
let q;
function setup() {
  createCanvas(400, 400);
 p = new Particle();
  q= new Particle();
  
}

function draw() {
  background(220);
  p.display();
  q.display();
  p.update();
  q.update();

  ellipse(p.posX, p.posY,10);
}
class Particle
{
  constructor(){
    this.posX = (random(1, width));
    this.posY = (random(1, width));
    this.rad = (random(0,50));
    this.velY = random();
    this.velX = random();
  
  }
  display(){
  ellipse (this.posX, this.posY, this.rad);
}
  update()
  {
    this.posX+= this.velX;
    this.posY+= this.velY;
    if (this.posX>400){
      this.velX--;}
    if(this.posY>400){
      this.velY++;}
    if (this.posX>400){
      this.velX++;}
    if (this.posY<0){
      this.velY--;}
    
  }
}


