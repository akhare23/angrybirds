class Box{
    constructor(x,y,width,height){

        var options = {
            restitution:0.5,
            friction:2
        }
 
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("green")
        stroke("yellow");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

}