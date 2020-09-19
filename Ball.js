class Paper {
    constructor() {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(500,500, 20, options);
        this.radius=20;
        
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("yellow");
        fill("blue");
        ellipse(pos.x,pos.y,20,20);
    }
}