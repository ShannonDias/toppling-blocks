const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine
var ground,box1;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(210,100,50,100);
  box2 = new Box (200,200,50,50)
  ground = new Ground (400,395,800,20)
}

function draw() {
  background(0);
  Engine.update(engine)

  box1.display () 
  box2.display ()
  ground.display ()
  
}