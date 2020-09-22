class Log{
    constructor(x,y,height,angle){
        var options = {
            restitution:0.5,
            friction:2
            
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        this.height = height;
        this.width = 20;

        World.add(world,this.body);
        Matter.Body.setAngle(this.body, angle)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("brown");
        stroke("blue");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}