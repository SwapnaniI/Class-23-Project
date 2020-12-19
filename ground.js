class Ground{
    constructor(x,y,width,height){
        var rest={
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,rest);
      this.width = width;
      this.height = height;      
      World.add(world,this.body);
    }


display(){
      var pos=this.body.position    
      fill("red");            
      rectMode(CENTER)
      rect(pos.x,pos.y,this.width,this.height)  
      //console.log(this.body.position.y)    
    }
}
 