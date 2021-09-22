const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var btn1 ;
var btn2 ;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('push.png'); 
  btn1.position(220,30); 
  btn1.size(50,50); 
  btn1.mouseClicked(hf); 
  
  btn2 = createImg('push.png'); 
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vf);

  ground1=new ground(200,390,400,20);
  left = new ground(10,200,20,400);
  up   = new ground(200,10,400,20);
  right =new ground(390,200,20,400);

  var ballo = {
    restitution:0.95
  }

  ball = Bodies.circle(200,100,20,ballo);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

  ground1.display();
  left.display();
  right.display();
  up.display();
}

function hf(){
 Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vf(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
 }
