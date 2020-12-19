

  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  var myEngine,myWorld, ground, obj1, obj2;

  function setup() {
    var canvas = createCanvas(400,400);
    //createSprite(200, 200, 50, 50);
    myEngine = Engine.create();
    myWorld = myEngine.world;
    
    obj1 = new Box(180,100,50,50);
    obj2 = new Box(200,300,50,70);
    ground= new Ground(200,390,400,20);
    console.log(ground.isStatic);
  }

  function draw() {   
    Engine.update(myEngine);
    background(0);
    
    obj1.display();
    obj2.display();
    ground.display();
  }



