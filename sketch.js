var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ball,obj1,obj2,obj3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 50,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 192, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.77, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	obj1=new Ground(400,650,200,20);
	obj2=new Ground(508,620,20,100);
	obj3=new Ground(292,620,20,100);


	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();

  packageSprite.x= packageBody.position.x;
  packageSprite.y= (packageBody.position.y-8);
  
  helicopterSprite.depth=packageSprite.depth+1
  packageSprite.depth=groundSprite.depth+1

  
  console.log(packageSprite.y)

  obj1.display();
  obj2.display();
  obj3.display();

  drawSprites();
 
}

function keyPressed() {


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	 }

  
}



