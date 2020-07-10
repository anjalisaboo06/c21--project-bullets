var bullet, bullet2, bullet3;
var wall, wall2, wall3;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,1600);
  
  speed = random(20, 30);
  weight = random(30, 52);
  thickness = random(22, 83);

  //bullets
 bullet = createSprite(200,150, 20, 10);
 bullet.shapeColor = "white";
 bullet.velocityX = speed;

 bullet2 = createSprite(200, 350, 20, 10);
 bullet2.shapeColor = "white";
 bullet2.velocityX = speed;

 bullet3 = createSprite(200, 550, 20, 10);
 bullet3.shapeColor = "white";
 bullet3.velocityX = speed;



 //wall

wall = createSprite(1200, 150, 40, 150);
wall.shapeColor = "turquoise";

wall2 = createSprite(1200, 350, 40, 150);
wall2.shapeColor = "turquoise";

wall3 = createSprite(1200, 550, 40, 150);
wall3.shapeColor = "turquoise";


 de = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
 console.log(de);
//400, 1500

}

function draw() {
  background(0 , 0 , 0); 
 
bullets(bullet, wall);
bullets(bullet2, wall2);
bullets(bullet3, wall3);

if(bullets(bullet, wall))
  {
  	bullet.velocityX=0;
  	var de=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	
	if(de>10)
	{
		bullet.shapeColor=color(255,0,0);
    bullet2.shapeColor=color(255,0,0);
    bullet3.shapeColor=color(255,0,0);
	}

	

	if(de<10)
	{
    bullet.shapeColor=color(0,255,0);
    bullet2.shapeColor=color(0,255,0);
    bullet3.shapeColor=color(0,255,0);
	}
	
  }


  drawSprites();
}

function bullets(object1, object2){

  if(-object1.x+object2.x < object1.width+object2.width){
    object1.velocityX = 0;
   

      
        return  true;  

      }
      
     
  return false;
 
   
  }
  




