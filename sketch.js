let c = 0;
let n = 0;
function setup() {
  createCanvas(1280, 720);	
  colorMode(HSB,255);
  noFill();
}

function draw() {
  
	background(0);
    c += 0.2;
  let x = width/2;
  let y = height/2;
  
  for(let i=0;i<100;i++){
    let p = pow(0.92,i);
    let r = 3 * noise((i+c)*0.03)*TAU;
    x += cos(r)*8; 
    y += sin(r)*8; 
    stroke((n+i*2)%255,y,x);
    strokeWeight(10*p);
    rect(x,y,p*1168,p*834,40);
    n += 0.01;
  }
}
