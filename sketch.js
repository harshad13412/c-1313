var PLAY = 1;
var END = 0;
var gameState = PLAY;

var garden,rabbit;
var gardenImg,rabbitImg;
var carrot,carrotImg;




function preload (){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  carrotImg = loadImage("carrotImg.png");
}

function setup (){
  
  createCanvas(400,400);
  

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



// Moving background
garden=createSprite(200,200,400,400);
garden.addImage(gardenImg);










}






function draw() {
background(0)
rabbit.x=World.mouseX
 garden.lifeTime+1

  garden.depth = rabbit.depth
  rabbit.depth = rabbit.depth +1

  edges= createEdgeSprites();
  

  


spawnCarrot ()





  drawSprites();
}
function spawnCarrot() {

  if (frameCount %50 === 0){
    carrot = createSprite (random(50,350),200,10,10)
   carrot.addImage(carrotImg)
   carrot.scale = 0.1
    carrot.velocityY = +2
    garden.depth = carrot.depth
    carrot.depth  = carrot.depth +1
    carrot.lifeTime  =300
    if(carrot.collide(rabbit)){

      carrot.destroy
    }
 
  }
}



