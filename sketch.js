const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var chain1;
var trainSound 
var crashSound
var flag = 0;

var rock;
var train1,train2,train3,train4,train5,train6;
var sling1,sling2,sling3,sling4,sling5;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  rock = new Rock(1000,100,200,100);

  train1 = new Train(100,100,50,50);
  train2 = new Train(175,100,50,50);
  train3 = new Train(250,100,50,50);
  train4 = new Train(325,100,50,50);
  train5 = new Train(400,100,50,50);
  train6 = new Train(475,100,50,50);

  sling1 = new SlingShot(train1.body,train2.body);
  sling2 = new SlingShot(train2.body,train3.body);
  sling3 = new SlingShot(train3.body,train4.body);
  sling4 = new SlingShot(train4.body,train5.body);
  sling5 = new SlingShot(train5.body,train6.body);

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  
  ground.show();
  rock.show();
  
  train1.show();
  train2.show();
  train3.show();
  train4.show();
  train5.show();
  train6.show();

  sling1.show();
  sling2.show();
  sling3.show();
  sling4.show();
  sling5.show();

 
  }



  
