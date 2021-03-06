class Log{
    constructor(x,y,height,angle){
        var properties={
            restitution:0.8,
            friction:1.0,
            density:1,
        }
        this.body=Bodies.rectangle(x,y,20,height,properties)
        Matter . Body .setAngle(this.body,angle)
        this.width=20;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue");
        fill ("purple");
        rect(0,0,this.width,this.height);
        pop ()
    }
}