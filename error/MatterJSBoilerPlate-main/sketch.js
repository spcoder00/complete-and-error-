var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options = {
 isStatic:false
 restitution: 0.3
 friction:0
 density:1.2

}

	Engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(World,ball);
	Engine.run(Engine);
	ground =new Ground(200,390,400,20);
	right = new Ground(390,200,20,400);
	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



