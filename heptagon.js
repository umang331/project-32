class Hepta{
    constructor(x,y){
    this.x = x;
    this.y = y;
    this.image = loadImage('heptagon.png');
    this.body = Bodies.circle(x,y,20)
    World.add(world,this.body);

}
display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40)
}
}