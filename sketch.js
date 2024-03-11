function setup() {
    createCanvas(500, 500);
    background("red")
    
  } 
    
    function draw() {
    
    stroke("yellow")
    fill("blue")
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 50, 50);
    } 
  }