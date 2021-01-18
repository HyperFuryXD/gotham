class Drops{
    constructor(x,y){
        options ={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        World.add(world,this.body);

        
    }
    display(){
ellipseMode(CENTER);
    }
    update(){
        if(this.body.position.y<700){
            this.body.position.y = 50;
        }
    }
}
