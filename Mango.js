class Mango {
    constructor(x, y, r){
        var options = {
            isStatic:true,
            restitution:0,
            friction:0.5,
        
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
    }
    display(){
        var mangoPos = this.body.position

        push()
        translate(mangoPos.x, mangoPos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255, 0, 255);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}