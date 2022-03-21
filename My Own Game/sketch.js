const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

var bg,skewerR,skewerC,fire;
var angle1 = 60;


function preload(){
  bg = loadImage("assets/bg.jpg");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 20, 20);
  blowerMouth = new BlowerMouth(width / 2 + 70,600, 350, 20);
  button = createButton("Click to Blow");
  button.position(width / 8, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

  var rotator_options={
    
    isStatic:true
  };

  rotator1 = Bodies.rectangle(width / 2 + 70,120,150,20,rotator_options);
    World.add(world,rotator1);

    rectMode(CENTER);
    ellipseMode(RADIUS);

       
   
}

function draw() {
  background(bg);
  Engine.update(engine);

  ball.show();
  blowerMouth.show();

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

collisionSkewer()

  
}

function blow() {

  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.02});

  
}

function collisionSkewer(){
  var collision = Matter.SAT.collides(ball,rotator1);
  if(collision.collided){
    console.log("GAME OVER")
  } 
   
}

