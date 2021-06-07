var person
var standingImg
var stepImg
var shootImg
var jumpImg

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  standingImg = loadImage("standingsprite.jpg")

  shootImg = loadAnimation("guninhand.jpg","guninhand2.jpg","guninhand3.jpg",)

  stepImg = loadAnimation("flash1.jpg","flash2.jpg","flash3.jpg")
  
  jumpImg = loadImage("jumpsprite.jpg")
}

function setup() {

  createCanvas(400, 400);

  person = createSprite(50,350,20,15);
  person.addImage("standing",standingImg);
  person.scale= 2;

}

function draw() {

  background(0);
  
  if(gameState === PLAY){
  
  if(keyIsDown(RIGHT_ARROW)){
  
      person.changeAnimation("a",stepImg)
   
  }
  
  if(keyWentUp(RIGHT_ARROW)){
      
      person.changeImage("b",standingImg);
      
  }
  
  if(keyDown("S")){
  
      person.changeAnimation("m",shootImg)
      
  }
  
  if(keyWentUp("S")){
              
      person.changeImage("c",standingImg);
      
  }
  
  if(keyDown(UP_ARROW)){
  
      person.changeAnimation("g",jumpImg)
      person.velocityY = -5
       
  }
  
  if(keyWentUp(UP_ARROW)){
              
      person.changeImage("moved",standingImg);

      
  }

  person.velocityY = person.velocityY + 0.5

  } else if(gameState === END){

    person.changeImage("stop",standingImg)



  }











drawSprites();

}