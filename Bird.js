class Bird{
    constructor(x,y){

        var options = {
            restitution: 1.2
           
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("blue");
        stroke("red");
        strokeWeight("4");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}