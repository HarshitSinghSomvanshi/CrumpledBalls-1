
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var rect1,rect2,rect3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper();
   ground = new Ground();
   //create a dustbin.
   rect1 = new Dustbin(1100,620,20,100);
   rect2 = new Dustbin(1150,660,100,20);
   rect3 = new Dustbin(1200,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  //drawSprites();
 paper.display();
 ground.display();
 rect1.display();
 rect2.display();
 rect3.display();

 keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:1.8,y:-2.8});
	}
}

