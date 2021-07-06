var scubaDiver, scubaDiverImg
var turtle, turtleImg, turtleGroup, crab, crabImg, crabGroup;
var angelfish, angelfishImg, angelfishGroup, whale, whaleImg, whaleGroup;
var underwaterBG;

var score;
var restart;


function preload(){
  underwaterBG = loadImage("Underwater.png");

  scubaDiverImg = loadImage("ScubaDiver.png");
  turtleImg = loadImage("Turtle.png");
  crabImg = loadImage("Crab.png");
  angelfishImg = loadImage("Angel Fish.png");
  whaleImg = loadImage("Whale.png");
}

function setup() {
  createCanvas(850,400);
  
  scubaDiver = createSprite(220,350,20,50);
  scubaDiver.addImage("scuba",scubaDiverImg);
  scubaDiver.scale = 0.5;

  turtleGroup = new Group();
  crabGroup = new Group();
  angelfishGroup = new Group();
  whaleGroup = new Group();

  scubaDiver.setCollider("rectangle",10, -50, 50, 100, 0);
  scubaDiver.debug = false;
  
  score = 0;
  life = 3;
  
}


function draw() {
  background(underwaterBG);
  stroke("white")
  textSize(20);
  fill("white")
  text("Creatures Collected: "+ score, 320,50);
  
  turtles();
  crabs();
  angelfishes();
  whales();

  if (keyDown("up")) {
    scubaDiver.y = scubaDiver.y -2;
  }
  
  if (keyDown("down")) {
    scubaDiver.y = scubaDiver.y +2;
  }


  if (keyDown("right")) {
    scubaDiver.x = scubaDiver.x +2;
  }

  if (keyDown("left")) {
    scubaDiver.x = scubaDiver.x -2;
  }

  if (angelfishGroup.isTouching(scubaDiver)) {
    life= life-1;
    angelfishGroup.destroyEach();
  }

  if (turtleGroup.isTouching(scubaDiver)) {
    score= score+1;
    turtleGroup.destroyEach();
  }

  if (whaleGroup.isTouching(scubaDiver)) {
    score= score+1;
    whaleGroup.destroyEach();
  }

  if (crabGroup.isTouching(scubaDiver)) {
    score= score+1;
    crabGroup.destroyEach();
  }

  if(keyDown("r")) {
    reset();
  }

  if (life<1){
    crabGroup.destroyEach();
    whaleGroup.destroyEach();
    turtleGroup.destroyEach();
    angelfishGroup.destroyEach();
  }
 
  drawSprites();
  fill("white")
  text("Creatures Collected: "+ score, 320,50);
  textSize(17);
  text("Collect underwater creatures; Avoid anglefish", 250,80);
  textSize(20);
  text("Life: "+ life, 80,50);

  if (life<1){
    textSize(50);
    text("You died",320,230);
    textSize(30);
    text("Press R to Restart",300,260);
  }

}

function turtles(){
  if(World.frameCount%84 === 0){
    turtle = createSprite(850,76,100,100);
    turtle.scale = 0.3;
    turtle.addImage("turtle",turtleImg);
    turtle.y = Math.round(random(80,350));
    turtle.velocityX = -5;
    turtle.setLifetime = 50;
    
    turtleGroup.add(turtle);
  }
}
function crabs(){
  if(World.frameCount%70 === 0){
    crab = createSprite(850,0,100,100);
    crab.scale = 0.3;
    crab.addImage("crab",crabImg);
    crab.y = Math.round(random(80,350));
    crab.velocityX = -5;
    crab.setLifetime = 50;
    
    crabGroup.add(crab);
  }
}
function angelfishes(){
  if(World.frameCount%79 === 0){
    angelfish = createSprite(850,120,100,100);
    angelfish.scale = 0.1;
    angelfish.addImage("angelfish",angelfishImg);
    angelfish.y = Math.round(random(80,350));
    angelfish.velocityX = -5;
    angelfish.setLifetime = 50;
    
    angelfishGroup.add(angelfish);
  }
}
function whales(){
  if(World.frameCount%80 === 0){
    whale = createSprite(850,200,100,100);
    whale.scale = 0.1;
    whale.addImage("whale",whaleImg);
    whale.y = Math.round(random(80,350));
    whale.velocityX = -5;
    whale.setLifetime = 50;
    
    whaleGroup.add(whale);
  }
}

function reset(){
  angelfishGroup.destroyEach();
  whaleGroup.destroyEach();
  turtleGroup.destroyEach();
  crabGroup.destroyEach();
  life=3;
  score = 0;
}