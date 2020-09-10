var bullet,wall;
var speed,thickness;
var weight

function setup() {
  createCanvas(1600,1600);
  thickness = random(22,83)
  bullet = createSprite(55, 200, 50, 5);
  wall = createSprite(1500,200,thickness,height/2)
  speed = random(223,321)
   weight = random(30,52)
  bullet.shapecolor = color(255);
  wall.shapeColor=color(230,230,230);
  bullet.velocityX = speed;
}

function draw() {
  background(0);
  

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage= 0.5 * weight* speed * speed/(thickness*thickness*thickness);
    console.log(damage);
    if(damage>10)
    {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor = color(0,255,0);
    }


  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall) 
{ 
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x; 
  if (bulletRightEdge>=wallLeftEdge) 
  { 
    return true
   } 
   return false; 
  }