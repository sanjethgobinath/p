class CRW {
    constructor(x,y,width,height){
        var options = {
            //'restitution':0.8
            'friction':1.0
            
        
         
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(480,620,this.width,this.height);
    }
    
    }