var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random(10, 20);
  weight = random(5, 20);
 car = createSprite(200, 200, 50, 50);
  car.shapeColor = "red";
 car.velocityX = speed;
wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = 80, 80, 80;
 de = (0.5*weight*speed*speed)/2250
 
//400, 1500

}

function draw() {
  background(255,255,255); 
  if(-car.x+wall.x < car.width+wall.width){
    car.velocityX = 0;
    if(de>80){
      car.shapeColor = "pink";
    }

   if(de<80){car.shapeColor = "blue";}
   
  }
  
  //if(de < 80){
  //car.shapeColor = "green"
  //}
  //if(de > 80){
    //car.shapeColor = "blue"
  //}

  drawSprites();
}