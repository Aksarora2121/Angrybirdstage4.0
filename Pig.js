class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibilty = 255;


  }
  display (){
    if(this.body.speed<3){
super.display();

    }

    else {
      World.remove(world, this.body);
     push();
      this.Visibilty = this.Visibilty - 5;
    tint(255 , this.visibilty);
    image(this.image , this.position.x , this.postion.y , 50 , 50);

pop();

      
    }




  }

};