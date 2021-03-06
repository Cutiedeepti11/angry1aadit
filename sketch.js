const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,2000,40)
    box1 = new Box(600,550,50,50);
    box2 = new Box(800,550,50,50);
 
    pig1= new Pig(700,550)
    log1 =new Log(700,400,300,PI/2);
    box3= new Box(600,350,50,50);
    box4= new Box(800,350,50,50);
    pig2= new Pig(700,350)
    log2 =new Log(700,300,300,PI/2);
    box5 =new Box(700,250,50,50)
    log3 =new Log(700,200,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
  
}