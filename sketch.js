var box;
function setup() {
  createCanvas(1200,1200);
  box=createSprite(200,200,50,50)
  text("dale a espacioo a la flecha derecha de tu compu para cambiar el color del fondo", 7, 196);
}

function draw() 
{
 
  background("red");
  
 if (keyDown("space")) {
 background("yellow")
}
if (keyDown("right")) {
background("white") 
}

drawSprites();

}
