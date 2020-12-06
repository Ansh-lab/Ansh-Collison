var mr, fr



function setup() {
  createCanvas(800,400);
  mr= createSprite(600,300,90,50)
  fr= createSprite(400,200,50,50)
mr.shapeColor = "red"
fr.shapeColor = "blue"

}

function draw() {
  background("black");
  mr.x= World.mouseX  
  mr.y= World.mouseY
if (mr.x-fr.x<fr.width/2 +mr.width/2
  &&fr.x-mr.x<fr.width/2 +mr.width/2
  && mr.y-fr.y<fr.height/2 +mr.height/2
  &&fr.y-mr.y<fr.height/2 +mr.height/2) {
    mr.shapeColor = "purple"
    fr.shapeColor = "purple"
}
else{
  mr.shapeColor = "red"
  fr.shapeColor = "blue"


}


  drawSprites();
}