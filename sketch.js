var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);

  gameobject1=createSprite(400,200,80,50);
  gameobject2=createSprite(200,200,30,80);
  gameobject3=createSprite(300,200,30,80);
  gameobject4=createSprite(400,200,30,80);

  gameobject1.shapeColor="green";
  gameobject2.shapeColor="green";
  gameobject3.shapeColor="green";
  gameobject4.shapeColor="green";

  gameobject1.debug=true;
  gameobject2.debug=true;
  gameobject3.debug=true;
  gameobject4.debug=true;
}

function draw() {
  background(0,0,0);  
  gameobject1.x=World.mouseX;
  gameobject1.y=World.mouseY;

 if(isTouching(gameobject1,gameobject4))
 {
  gameobject1.shapeColor="red";
  gameobject4.shapeColor="red";
  }
  else{
    gameobject1.shapeColor="green";
    gameobject4.shapeColor="green";
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <= object1.width/2+object2.width/2 
    && object2.x- object1.x <=  object1.width/2+object2.width/2 
    && object1.y-object2.y <= object1.height/2+object2.height/2
    && object2.y- object1.y <=  object1.height/2+object2.height/2 ){
      return true;
    }
    else{
      return false;
    }
}