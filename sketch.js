const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var stick1, stick2, stick3, stick4, stick5, stick7; 
var ground;
var top1, top2, top3; 

var engine, world;

function setup() {

  engine = Engine.create(); 
  world = engine.world;
  
  canvas = createCanvas(400,400);

  ground = new Ground(200,400,400,30);

  stick1 = new Stick(345,285,40,250);

  stick2 = new Stick(20,234,20,300);

  stick3 = new Stick(380,234,20,300);

  stick4 = new Stick(55,285,40,250);

  stick5 = new Stick(110,380,60,200);

  stick6 = new Stick(290,380,60,200);

  stick7 = new Stick(200,300,100,170);

  top1 = new Triangle(217,150,3,60);

  top2 = new Triangle(60,30,3,23);

  top3 = new Triangle(350,30,3,23);
  


}

function draw() {
  background(0);  

  Engine.update(engine);

 

  ground.display();

  stick1.display(); 
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();

  top1.display();
  top2.display();
  top3.display();

}