class Paper{
    constructor(x, y ,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);




    }
    display() {
        var paperPos = this.body.position;
        
        fill("yellow");

        //circle(this.body.position.x, this.body.position.y, this.r);
        push();
        translate(paperPos.x,paperPos.y);
        //imageMode(CENTER)
        fill(255);
        image(this.image,100,100, 400, 500);
        //ellipseMode(RADIUS);
        //ellipse(0, 0, this.r);
        pop();
        
        
    }
}