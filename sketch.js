const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(600, 695, 1200, 10);
    tree = new Tree(900, 380, 400, 700);
    boy = new Boy(250, 550, 300, 500);
    stone = new Stone(165, 450, 55);
    mango1 = new Mango(910, 100, 50);
    mango2 = new Mango(950, 300, 55);
    mango3 = new Mango(850, 220, 65);
    mango4 = new Mango(990, 200, 40);
    mango5 = new Mango(780, 238, 45);
    mango6 = new Mango(924, 186, 55);
    mango7 = new Mango(805, 315, 42);
    mango8 = new Mango(866, 296, 55);
    mango9 = new Mango(840, 149, 51);
    mango10 = new Mango(988, 252, 45);
    mango11 = new Mango(1025, 302, 60);
	slingshot = new SlingShot(stone.body,{x:160, y:429});
	Engine.run(engine);
  
}


function draw() {
	background(208);
    
    ground.display();
    tree.display();
    boy.display();
    stone.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    
    slingshot.display();
    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);
    detectCollision(stone, mango6);
    detectCollision(stone, mango7);
    detectCollision(stone, mango8);
    detectCollision(stone, mango9);
    detectCollision(stone, mango10);
    detectCollision(stone, mango11);

    text(mouseX+ ","+mouseY,mouseX,mouseY);
}

function keyPressed(){
    if(keyCode === 32){
        Body.setPosition(stone.body, {x:160, y:429});
        slingshot.attach(stone.body);

    }
}

function mouseDragged(){
    Body.setPostion(stone.body, {x:mouseX, y:mouseY});

}

function mouseReleased(){
    slingshot.fly();

}

function detectCollision(stoneObj, mangoObj){

    var stonePos = stoneObj.body.position;
    var mangoPos = mangoObj.body.position;

    var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
    if(distance <= stoneObj.r + mangoObj.r){
        Body.setStatic(mangoObj.body, false);
    }
}

