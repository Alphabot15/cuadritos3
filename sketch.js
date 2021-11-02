const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine;
var ball,rect2;
var Canvas;
function setup() {

Canvas=createCanvas(800,800);
engine=Engine.create();
world=engine.world;
var fisic={
restitution:1.5
}
ball=Bodies.circle(400,400,20,fisic)
World.add(world,ball)
var fisicDown={
isStatic:true
}
rect2=Bodies.rectangle(400,600,800,20,fisicDown)
World.add(world,rect2)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER)
  rect(rect2.position.x,rect2.position.y,800,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}