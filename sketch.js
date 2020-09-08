var fixedRect, movingRect;
var go1,go2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  var go1=createSprite(200,100,50,50);
  go1.shapeColor="green";
  var go2=createSprite(100,100,50,50);
  go2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  go1.x=World.mouseX;
  go1.y=World.mouseY;
  if (istouching(go1,go2)){
    go1.shapeColor="red";
    go2.shapeColor="red";
  }
  else{
    go1.shapeColor="green";
    go2.shapeColor="green";
  }

 bounceOff(movingRect,fixedRect);
 
  drawSprites();
}
