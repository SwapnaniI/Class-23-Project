class Box{
    constructor(x,y,width,height){
      var box_options={
      restitution:0.8
      }

      this.body=Bodies.rectangle(x,y,width,height,box_options);
      this.width = width;
      this.height = height;
      World.add(myWorld,this.body);
    }
    display(){
      var pos=this.body.position
      var angle = this.body.angle;
      push();
      fill("white");
      translate(pos.x,pos.y)
      rotate(angle);      
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop();
    }
}