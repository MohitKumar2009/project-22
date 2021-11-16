const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {
    isStatic: true
  } 
  
  //create player base body
  player = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, player);
  //create player body
  playerBase = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, playerBase);


}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
 
  image(playerimage,300,310, 100,100);
  //show the playerbase image using image() function
  image(baseimage,250,400,250,100)
  
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


}
