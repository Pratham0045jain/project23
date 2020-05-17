class Triangle {
    constructor(x, y, sides, radius) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.0,
          //'isStatic': true,

      }
      this.body = Bodies.polygon(x, y, sides, radius, [options]);
      this.radius = radius;
      this.sides = sides;

      
      World.add(world, this.body);
      console.log(this.body);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      var vertex = this.body.vertices;

      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("red");
      triangle(vertex[0].x,vertex[0].y,vertex[1].x,vertex[1].y,vertex[2].x,vertex[2].y);
      //pop();
    }
  };