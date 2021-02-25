//Creating variables.

//Vars. for Bg.
var WaterBg , SharkBg ;
var background1_img , background2_img ;

//Vars. for Tortoise.
var tortoise, tortoiseAngry , tortoiseScared ;
var tortoise_img , angryT_img , tortoiseScared_img ;

//Var. for Points
var score = 0 , Score , score0 , score1 , score2 , score3 , score4 , score5 , score6 , score7 , score8 , score9 , score10;
var Score_img , score0_img , score1_img , score2_img , score3_img , score4_img , score5_img , score6_img , score7_img , score8_img , score9_img ,score10_img ;

//Vars. for Aquatic Animals
var greetShark , crab1 , crab2 , sharksGroup1 , sharksGroup2 , sharksGroup3  , pointsGroup1 , pointsGroup2;
var greetShark_img , crab1_img , crab2_img , points_Img;

//Vars. for text levels.
var level1 , level2 , level3 , level4 , Level4 , level5;
var level1_img , level2_img , level3_img , level4_img , Level4_img , level5_img;

//Vars. for Texts.
var story , Story , rules , goal , myName , Title , Space , Welcome , nB , startSound  , Hello;
var story1_img , story2_img , title_img , welcome_img , rules_img , goal_img , myName_img , startSound_img ,  space_img , n_img , hello_img;
var welcomeSound , WelcomeSound ;

//Vars. for Invisible Platform.
var invisibleGround1 , invisibleGround2  , invisibleP1 , invisibleP2  ;

//Vars. for Sounds.
var welcome_Sound , game_Sound  ;

//Var for gameState.
var gameState = 0 ;

function preload(){
   
  //Loading Images
  //Bg Images
  background1_img = loadImage("images/backgrounds/Bg1.webp");
  background2_img = loadImage("images/backgrounds/Bg2.png");

  //Tortoise Images
  tortoise_img = loadImage("images/animals/playT.png");
  angryT_img = loadImage("images/animals/revenge.png");

  //Shark Images
  greetShark_img = loadImage("images/animals/Greet.png");

  //Level Images
  level1_img = loadImage("images/levels/Level1.png");
  level2_img = loadImage("images/levels/Level2.png");
  level3_img = loadImage("images/levels/Level3.png");
  level4_img = loadImage("images/levels/Level4by1.png");
  Level4_img = loadImage("images/levels/Level4by2.png");
  level5_img = loadImage("images/levels/Level5.png");

  //Level's Text Images
  Score_img = loadImage("images/levels/Score.png");
  score0_img = loadImage("images/levels/score0.png");
  score1_img = loadImage("images/levels/score1.png");
  score2_img = loadImage("images/levels/score2.png");
  score3_img = loadImage("images/levels/score3.png");
  score4_img = loadImage("images/levels/score4.png");
  score5_img = loadImage("images/levels/score5.png");
  score6_img = loadImage("images/levels/score6.png");
  score7_img = loadImage("images/levels/score7.png");
  score8_img = loadImage("images/levels/score8.png");
  score9_img = loadImage("images/levels/score9.png");
  score10_img = loadImage("images/levels/score10.png");


  //Texts & Text's Images
  hello_img = loadImage("images/others/hello.png")
  title_img = loadImage("images/texts/Title.png");
  space_img = loadImage("images/texts/Space.png");
  n_img = loadImage("images/texts/N.png");
  welcome_img = loadImage("images/others/Welcome.png");
  rules_img = loadImage("images/texts/Rules.png");
  goal_img = loadImage("images/texts/Goal.png");
  myName_img = loadImage("images/texts/Creater.png");
  story1_img = loadImage("images/texts/Story1.png");
  story2_img = loadImage("images/animals/Story2.png");
  WelcomeSound = loadImage("images/others/welcomeSound.png");
  startSound_img = loadImage("images/texts/startSound.png");
  tortoiseScared_img = loadImage("images/animals/scaredT.png");
  crab1_img  = loadImage("images/animals/Crab.png");
  crab2_img = loadImage("images/animals/Crab2.png");

  //Loading Sound
  game_Sound = loadSound("sounds/Game.mp3");
  welcome_Sound = loadSound("sounds/Welcome.mp3");

}

function setup() {

  //CreatingCanvas
  createCanvas(displayWidth, displayHeight);

  //Backgrounds
  WaterBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  WaterBg.addImage(background2_img);
  WaterBg.scale = 1.45;
  WaterBg.visible = false;

  SharkBg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  SharkBg.addImage(background1_img);
  SharkBg.scale = 1.6;
  SharkBg.visible = false;

  //Score

  Score = createSprite(displayWidth/1.22 , displayHeight/20);
  Score.addImage(Score_img);
  Score.visible = true;

  score0 = createSprite(displayWidth/1.1 , displayHeight/20);
  score0.addImage(score0_img);
  score0.visible = false;

  score1 = createSprite(displayWidth/1.1 , displayHeight/20);
  score1.addImage(score1_img);
  score1.visible = false;

  score2 = createSprite(displayWidth/1.1 , displayHeight/20);
  score2.addImage(score2_img);
  score2.visible = false;

  score3 = createSprite(displayWidth/1.1 , displayHeight/20);
  score3.addImage(score3_img);
  score3.visible = false;

  score4 = createSprite(displayWidth/1.1 , displayHeight/20);
  score4.addImage(score4_img);
  score4.visible = false;

  score5 = createSprite(displayWidth/1.1 , displayHeight/20);
  score5.addImage(score5_img);
  score5.visible = false;

  score6 = createSprite(displayWidth/1.1 , displayHeight/20);
  score6.addImage(score6_img);
  score6.visible = false;

  score7 = createSprite(displayWidth/1.1 , displayHeight/20);
  score7.addImage(score7_img);
  score7.visible = false;

  score8 = createSprite(displayWidth/1.1 , displayHeight/20);
  score8.addImage(score8_img);
  score8.visible = false;

  score9 = createSprite(displayWidth/1.1 , displayHeight/20);
  score9.addImage(score9_img);
  score9.visible = false;

  score10 = createSprite(displayWidth/1.1 , displayHeight/20);
  score10.addImage(score10_img);
  score10.visible = false;

  //Crabs
  crab1 = createSprite(displayWidth/1.3 , displayHeight/1.1 , 10 , 10);
  crab1.addImage(crab1_img);
  crab1.visible = false;
  crab1.velocityX = -3;
  crab1.scale = 0.2;
  
  crab2 = createSprite(displayWidth/2 , displayHeight/1.1 , 10 , 10);
  crab2.addImage(crab2_img);
  crab2.visible = false;
  crab2.velocityX = -2;
  crab2.scale = 0.2;

  //Sharks
  greetShark = createSprite(displayWidth/2 , displayHeight/2 ,10,10)
  greetShark.addImage(greetShark_img);
  greetShark.visible = false; 

  //Groups
  sharksGroup1 = createGroup();
  sharksGroup1.visible = false;

  sharksGroup2 = createGroup();
  sharksGroup1.visible = false;

  sharksGroup3 = createGroup();
  sharksGroup1.visible = false;

  pointsGroup1 = createGroup();
  pointsGroup1.visible = false;

  pointsGroup2 = createGroup();
  pointsGroup2.visible = false;

  //Levels
  level1 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level1.addImage(level1_img);
  level1.scale = 2;
  level1.visible = false;

  level2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level2.addImage(level2_img);
  level2.scale = 2;
  level2.visible = false;

  level3 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level3.addImage(level3_img);
  level3.scale = 2;
  level3.visible = false;

  level4 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level4.addImage(level4_img);
  level4.scale = 2;
  level4.visible = false;

  Level4 = createSprite(displayWidth/2,displayHeight/1.7,displayWidth,displayHeight);
  Level4.addImage(Level4_img);
  Level4.scale = 0.5;
  Level4.visible = false;

  level5 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  level5.addImage(level5_img);
  level5.scale = 1;
  level5.visible = false;

  //Tortoise
  tortoise = createSprite(displayWidth/2, displayHeight/2 , 10,10);
  tortoise.addImage(tortoise_img);
  tortoise.scale = 0.15;
  tortoise.visible = false;

  tortoiseAngry = createSprite(displayWidth/2, displayHeight/2 , 10,10);
  tortoiseAngry.addImage(angryT_img);
  tortoiseAngry.visible = false;

  tortoiseScared = createSprite(displayWidth/2,displayHeight/1.3,displayWidth,displayHeight);
  tortoiseScared.addImage(tortoiseScared_img);
  tortoiseScared.scale = 0.2;
  tortoiseScared.visible = false

  // invisible platforms
  invisibleGround1 = createSprite(displayWidth/2 , 300 ,2000 , 5 );
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(displayWidth/2 , displayHeight/1.1 ,2000 , 5 );
  invisibleGround2.visible = false;

  invisibleP1 = createSprite(displayWidth/1.1 , displayHeight/1.1 , 5 , 100);
  invisibleP1.visible = false;

  invisibleP2 = createSprite( displayWidth/7 , displayHeight/1.1 , 5 , 100);
  invisibleP2.visible = false;

  //Welcoming
  Welcome = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  Welcome.addImage(welcome_img);
  Welcome.scale = 0.5;
  Welcome.visible = false;

  welcomeSound = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  welcomeSound.addImage(WelcomeSound);
  welcomeSound.scale = 0.2;
  welcomeSound.visible = false;

  startSound = createSprite(displayWidth/2,displayHeight/1.8,displayWidth,displayHeight);
  startSound.addImage(startSound_img);
  startSound.scale = 1.45;
  startSound.visible = false;

  //Hello 
  Hello = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  Hello.addImage(hello_img);
  Hello.scale = 1;
  Hello.visible = false;

  //Title
  Title = createSprite(displayWidth/2,displayHeight/15,displayWidth,displayHeight);
  Title.addImage(title_img);
  Title.scale = 1.45;
  Title.visible = true;

  //Space
  Space = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  Space.addImage(space_img);
  Space.scale = 1.45;
  Space.visible = false;

  // N button
  nB = createSprite(displayWidth/2,displayHeight/1.1,displayWidth,displayHeight);
  nB.addImage(n_img);
  nB.scale = 1.45;
  nB.visible = false;

  //Rules
  rules = createSprite(displayWidth/2,displayHeight/3,displayWidth,displayHeight);
  rules.addImage(rules_img);
  rules.scale = 1.45;
  rules.visible = false;

  //Goal
  goal = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  goal.addImage(goal_img);
  goal.scale = 1.45;
  goal.visible = false;

  //My Name
  myName = createSprite(displayWidth/2,displayHeight/1.2,displayWidth,displayHeight);
  myName.addImage(myName_img);
  myName.scale = 0.9;
  myName.visible = false;

  //Story
  story = createSprite(displayWidth/2,displayHeight/1.5,displayWidth,displayHeight);
  story.addImage(story1_img);
  story.scale = 1.1;
  story.visible = false;
  Story = createSprite(displayWidth/2,displayHeight/2.5,displayWidth,displayHeight);
  Story.addImage(story2_img);
  Story.scale = 0.3;
  Story.visible = false;

}

function draw() {
  background("pink");

  //Coliding the tortoise
  tortoise.collide(invisibleGround1);
  tortoise.collide(invisibleGround2);

  //Colliding the Sharks
  sharksGroup1.bounceOff(invisibleGround1);
  sharksGroup1.bounceOff(invisibleGround2);

  sharksGroup2.bounceOff(invisibleGround1);
  sharksGroup2.bounceOff(invisibleGround2);

  sharksGroup3.bounceOff(invisibleGround1);
  sharksGroup3.bounceOff(invisibleGround2);

  //Colliding the Crabs
  crab1.bounceOff(invisibleP1);
  crab1.bounceOff(invisibleP2);
  crab2.bounceOff(invisibleP1);
  crab2.bounceOff(invisibleP2);

  console.log(gameState);
  console.log(score);

  if(score === 0){
    score0.visible = true;
    score1.visible = false;
    score2.visible = false;
    score3.visible = false;
    score4.visible = false;
    score5.visible = false;
    score6.visible = false;
    score7.visible = false;
    score8.visible = false;
    score9.visible = false;
    score10.visible = false;
  }
   else if(score === 1){
     score0.visible = false;
     score1.visible = true;
  } 
   else if(score === 2){
    score1.visible = false;
    score2.visible = true;
   }
   else if(score === 3){
    score2.visible = false;
    score3.visible = true;
   }
   else if(score === 4){
    score3.visible = false;
    score4.visible = true;
   }
   else if(score === 5){
    score4.visible = false;
    score5.visible = true;
   }
   else if(score === 6){
    score5.visible = false;
    score6.visible = true;
   }
   else if(score === 7){
    score6.visible = false;
    score7.visible = true;
   }
   else if(score === 8){
    score7.visible = false;
    score8.visible = true;
   }
   else if(score === 9){
    score8.visible = false;
    score9.visible = true;
   }
   else if(score === 10){
    score9.visible = false;
    score10.visible = true;
   }


  if(gameState === 0){

    startSound.visible = true;
    SharkBg.visible = true;
    welcomeSound.visible = true;
    Score.visible = false;
    score0.visible = false;

    if(gameState === 0 && mousePressedOver(welcomeSound)) {
      welcome_Sound.play();
      gameState = 1
    }

  }

  if(gameState === 1){
    
    SharkBg.visible = false;
    startSound.visible = false;
    Space.visible = false;
    welcomeSound.visible = false;
    score0.visible = false;

    tortoiseScared.visible = true;
    Welcome.visible = true;
    nB.visible = true;
    greetShark.visible = true;
    WaterBg.visible = true;
   
    if(gameState === 1 && keyDown("n")){
      gameState = 2;
    }

  }

  if(gameState === 2){

     tortoiseScared.visible = false;
     nB.visible = false;
     Welcome.visible = false;
     greetShark.visible = false;
     score0.visible = false;

     WaterBg.visible = true;
     story.visible = true;
     Story.visible = true;
     Space.visible = true;
     Space.y = displayHeight/1.1;
     if(gameState === 2 && keyDown("space")){
      gameState = 3;
    }

  }

  if(gameState === 3){

    Space.visible = false;
    story.visible = false;
    Story.visible = false;
    Welcome.visible = false;
    greetShark.visible = false;
    score0.visible = false;

    rules.visible = true;
    goal.visible = true;
    myName.visible = true;
    Hello.visible = true;
    nB.visible = true;
    
    if(gameState === 3 && keyDown("n")){
      gameState = 4;
    }

  }

  //Level1
  if(gameState === 4){

    rules.visible = false;
    goal.visible = false;
    myName.visible = false;
    Hello.visible = false;
    nB.visible = false;
    score0.visible = false;

    Space.visible = true;
    level1.visible = true;

    if(gameState === 4 && keyDown("space")){
      gameState = 5;
      game_Sound.play();
    }

  }

  if(gameState === 5){

     Space.visible = false;
     level1.visible = false;

     tortoise.visible = true;
     Score.visible = false;
     score.visible = true;
     tortoise.scale = 0.1;
     sharksGroup1.visible = true;
     pointsGroup1.visible = true;
     crab1.visible = true;
     crab2.visible = true;

     welcome_Sound.stop();

     //Movement of Tortoise
     if(keyDown('up')){
      tortoise.y = tortoise.y - 5;
    }
    else if(keyDown("right")){
     tortoise.x = tortoise.x + 5;
    }
    else if(keyDown('down')){
     tortoise.y = tortoise.y + 5;
    }
    else if(keyDown('left')){
     tortoise.x = tortoise.x - 5;
    }

    if(gameState === 5 && sharksGroup1.isTouching(tortoise)){
      //gameState = 
      //score = 0;
      score = 0;
   }

   if(tortoise.isTouching(pointsGroup1)){
     score = score + 1;
     pointsGroup1.destroyEach();
   }

   if(score >= 4){
       gameState = 6;
       score = 0;
   }

}

//Level2
  if(gameState === 6){

     pointsGroup1.visible = false;
     sharksGroup1.visible = false;
     game_Sound.stop();

     level2.visible = true;
     nB.visible = true;

     if(gameState === 6 & keyDown("n")){
       gameState = 7;
       game_Sound.play();
     }

  }

  if(gameState === 7){

     nB.visible = false;
     level2.visible = false;

     tortoise.visible = true;
     tortoise.scale = 0.15;
     pointsGroup1.visible = true;
     sharksGroup2.visible = true;
     crab1.visible = true;
     crab2.visible = true;
     
      //Movement of Tortoise
      if(keyDown('up')){
        tortoise.y = tortoise.y - 4;
      }
      else if(keyDown("right")){
       tortoise.x = tortoise.x + 4;
      }
      else if(keyDown('down')){
       tortoise.y = tortoise.y + 4;
      }
      else if(keyDown('left')){
       tortoise.x = tortoise.x - 4;
      }
     if(gameState === 7 && sharksGroup2.isTouching(tortoise)){
      //gameState = 8;
      //score = 0;
   }
   if(tortoise.isTouching(pointsGroup1)){
     score = score + 1;
     pointsGroup1.destroyEach();
  }

  if(score >= 4){
      gameState = 8;
      score = 0;
   }
 }

 //Level3
  if(gameState === 8){

     pointsGroup1.visible = false;
     sharksGroup2.visible = false;

     game_Sound.stop();
     level3.visible = true;
     Space.visible = true;

     if(gameState === 8 & keyDown("space")){
       gameState = 9;
       game_Sound.play();
     }

  }

  if(gameState === 9){

    Space.visible = false;
    level3.visible = false;

    tortoise.visible = true;
    pointsGroup1.visible = true;
    sharksGroup2.visible = true;
    crab1.visible = true;
    crab2.visible = true;

    crab1.velocityX = -3;
    crab2.velocityX = -2;

      //Movement of Tortoise
      if(keyDown('up')){
        tortoise.y = tortoise.y - 4;
      }
      else if(keyDown("right")){
       tortoise.x = tortoise.x + 4;
      }
      else if(keyDown('down')){
       tortoise.y = tortoise.y + 4;
      }
      else if(keyDown('left')){
       tortoise.x = tortoise.x - 4;
      }

    if(gameState === 9 && sharksGroup2.isTouching(tortoise)){
    //score = 0;  
    //gameState = 10;
   }
   if(tortoise.isTouching(pointsGroup1)){
    score = score + 1;
    pointsGroup1.destroyEach();
  }

  if(score >= 4){
      gameState = 10;
      score = 0;
  }

 }

 //Level4
 if(gameState === 10){

     pointsGroup1.visible = false;
     sharksGroup2.visible = false;

     game_Sound.stop();
     level4.visible = true;
     Level4.visible = true;
     nB.visible = true;

     if(gameState === 10 & keyDown("n")){
       gameState = 11;
       game_Sound.play();
   }

 }

 if(gameState === 11){

  nB.visible = false;
  level4.visible = false;
  Level4.visible = false;
  pointsGroup2.visible = true;

  tortoise.visible = true;
  tortoise.scale = 0.16;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y =tortoise.y - 4;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 4;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 4;
  }
  else if(keyDown('left')){
   tortoise.x= tortoise.x - 4;
  }

  if(gameState === 11 && sharksGroup2.isTouching(tortoise)){
    //gameState = 12;
    //score = 0;
  }
  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }

  if(score >= 4){
      gameState = 12;
      score = 0;
  }

 }

 //Level5
 if(gameState === 12){

  tortoise.visible = false;
  pointsGroup2.visible = false;
  sharksGroup3.visible = false;

  game_Sound.stop();
  level5.visible = true;
  Space.visible = true;

  if(gameState === 12 & keyDown("space")){
    gameState = 13;
    game_Sound.play();
  }
 }

 if(gameState === 13){

  Space.visible = false;
  level5.visible = false;

  pointsGroup2.visible = true;
  tortoise.scale = 0.170;
  tortoise.visible = true;
  sharksGroup3.visible = true;
  crab1.visible = true;
  crab2.visible = true;

  //Movement of Tortoise
  if(keyDown('up')){
    tortoise.y = tortoise.y - 3;
  }
  else if(keyDown("right")){
   tortoise.x = tortoise.x + 3;
  }
  else if(keyDown('down')){
   tortoise.y = tortoise.y + 3;
  }
  else if(keyDown('left')){
   tortoise.x = tortoise.x - 3;
  }

  if(gameState === 13 && sharksGroup2.isTouching(tortoise)){
   //gameState = 13;
   //score = 0;
  }

  if(tortoise.isTouching(pointsGroup2)){
    score = score + 1;
    pointsGroup2.destroyEach();
  }
  if(score >= 4){
      gameState = 14;
      score = 0;
  }
 }

  if(gameState === 14){
    game_Sound.stop();
    Score.visible = false;
    score0.visible = false;
    pointsGroup2.visible = false;
    tortoise.visible = false;
    sharksGroup3.visible = false;
    crab1.visible = false;
    crab2.visible = false;

    


  }
 
  spawnSharks1();
  spawnSharks2();
  spawnSharks3();

  spawnPoints1();
  spawnPoints2();  

  drawSprites(); 
 
}

//Function for Sharks 
function spawnSharks1(){

  if (gameState === 5){
    if(frameCount % 180 === 0){

    var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
     shark1.velocityX = -3;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: shark1.addImage(crab1_img);
               break;
       case 2: shark1.addImage(crab2_img);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     shark1.scale = 0.2;
     shark1.lifetime = 800;
    
    //add each obstacle to the group
     sharksGroup1.add(shark1);

     var shark2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,40);
     shark2.velocityX = 4;

     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: shark2.addImage(crab1_img);
              break;
       case 2: shark2.addImage(crab2_img);
               break;
       default: break;
     }

     //assign scale and lifetime to the obstacle           
     shark2.scale = 0.2;
     shark2.lifetime = 800;
    
     //add each obstacle to the group
     sharksGroup1.add(shark2);

 }
}
}

function spawnSharks2(){

     if (gameState === 7 || gameState === 9 ){

        if( frameCount % 170 === 0){

         var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
         shark1.velocityX = -3.5;
         shark1.velocityY = random(-0.5,0.5);
        
         //generate random obstacles
         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: shark1.addImage(crab1_img);
                   break;
           case 2: shark1.addImage(crab2_img);
                   break;
           default: break;
         }
        
         //assign scale and lifetime to the obstacle           
         shark1.scale = 0.2;
         shark1.lifetime = 800;
        
         //add each obstacle to the group
         sharksGroup2.add(shark1);
    
         var shark2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
         shark2.velocityX = 4.5;
         shark2.velocityY = random(-0.5,0.5);
    
         //generate random obstacles
         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: shark2.addImage(crab1_img);
                  break;
           case 2: shark2.addImage(crab2_img);
                   break;
           default: break;
         }
    
         //assign scale and lifetime to the obstacle           
         shark2.scale = 0.2;
         shark2.lifetime = 800;
        
         //add each obstacle to the group
         sharksGroup2.add(shark2);

     }
    }
  }

  function spawnSharks3(){

    if (gameState === 11 || gameState === 13 ){

      if( frameCount % 180 === 0){

       var shark1 = createSprite(displayWidth + 200,Math.round(random(300,780)),10,10);
       shark1.velocityX = -4;
       shark1.velocityY = random(-1.5,1.5);
      
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark1.addImage(crab1_img);
                 break;
         case 2: shark1.addImage(crab2_img);
                 break;
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       shark1.scale = 0.2;
       shark1.lifetime = 800;
      
       //add each obstacle to the group
       sharksGroup3.add(shark1);
  
       var shark2 = createSprite(displayWidth/displayWidth,Math.round(random(300,780)),10,10);
       shark2.velocityX = 5;
       shark1.velocityY = random(-1.5,1.5);
  
       //generate random obstacles
       var rand = Math.round(random(1,2));
       switch(rand) {
         case 1: shark2.addImage(crab1_img);
                break;
         case 2: shark2.addImage(crab2_img);
                 break;
         default: break;
       }
  
       //assign scale and lifetime to the obstacle           
       shark2.scale = 0.2;
       shark2.lifetime = 800;
      
       //add each obstacle to the group
       sharksGroup3.add(shark2);

   }
  }
}

function spawnPoints1(){

  if (gameState === 5 || gameState === 7 || gameState === 9){

    if( frameCount % 300 === 0){

    var points1 = createSprite(displayWidth + 100,Math.round(random(300,780)),10,10);
     points1.velocityX = -5;
    
     //assign scale and lifetime to the obstacle           
     points1.scale = 1;
     points1.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup1.add(points1);

     var points2 = createSprite(-displayWidth - 100,Math.round(random(300,780)),10,10);
     points2.velocityX = 4;
    
     //assign scale and lifetime to the obstacle           
     points2.scale = 1;
     points2.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup1.add(points2);

    }
  }
}

function spawnPoints2(){

  if (gameState === 11 || gameState === 13){
    
    if( frameCount % 300 === 0){

    var points1 = createSprite(displayWidth + 100,Math.round(random(300,780)),10,10);
     points1.velocityX = -5;
     points1.velocityY = random(-1,1);
    
     //assign scale and lifetime to the obstacle           
     points1.scale = 1;
     points1.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup2.add(points1);

     var points2 = createSprite(-displayWidth - 100,Math.round(random(300,780)),10,10);
     points2.velocityX = 4;
     points2.velocityY = random(-0.5,0.5);
    
     //assign scale and lifetime to the obstacle           
     points2.scale = 1;
     points2.lifetime = 800;
    
    //add each obstacle to the group
     pointsGroup2.add(points2);
    }
  }

}
//Story :- You have just assassinated The Queen of the Ocean very quietly.
// But, the king has been angry on us for her queen’s death and has made a huge price on your head!!
// Now, all the king’s bodyguards have been alerted & looking for you!! and want the price on your head.
//You have to save yourself from the bodyguards and assure your security.
// Let’s see how you uses your skills and escape those deadly sharks!!