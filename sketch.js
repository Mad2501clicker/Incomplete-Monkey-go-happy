
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var survivalTime=0;
    stroke("white");
    textSize = (20);
    fill("white");
  text("Score: "+ score, 500,50);
    
    stroke("black");
    textSize = (20);
    fill("black");
    survialTime = Math.ceil(frameCount/frameRate());
    text("Survival Time:  "+survivalTime, 520,30);
    

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
    if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
      
  obstacleGroup();
  foodGroup();
      
    if(obstacleGroup.isTouching(monkey)){
      gameState = END;
    }
      
    }   
  else if (gameState === END) {
    ground.velocityX = 0;
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    
    monkey.changeAnimation = ("sprite_0.png",monkey_running);
  }
}

function draw() {
  background = 280;
  
  monkey.createSprite = (200,200);
  monkey.addAnimation = (monkey_running);
  monkey.lifetime = -1;
  monkey.collide = ground;
  
  ground.createSprite = (300,100,600,20);
  ground.shapeColor = ("black");
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
  drawSprites();
}

function foodGroup() {
  FoodGroup.createGroup = (banana, bananaImage);
  FoodGroup.addImage = (bananaImage);
  
  FoodGroup.lifetimeEach = -1;
}

function obstacleGroup() {
  obstacleGroup.createGroup = (obstacle, obstacleImage);
  obstacleGroup.addImage = (obstacleImage);
  
  obstacleGroup.lifetimeEach = -1;
}