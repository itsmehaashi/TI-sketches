
function setup() {
  createCanvas(400, 200);
  p=0;
  a=5
}

function draw() {
  background(220,30,56);
  let w=(random(55))
  let h=(random(80))
  
  fill(random(6,56));
  stroke(3);
  rect (p,height/2-h/2,w,h)
  p=p+a;
  if(p>width) 

    { a = -a;}
    if (p<0)
    {a=-a;}
  
  
  
}