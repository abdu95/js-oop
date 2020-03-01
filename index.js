function Circle(radius) {
  this.radius = radius;

  //this is private property
  //we cant access it from outside >> circle. >> default not visible
  //we want to display defaultLocation somewhere in our app: not for modifying, just for displaying
  let defaultLocation = { x: 0, y: 0 };

  //one solution
  this.getDefaultLocation = function(){
    return defaultLocation;

  }

  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);
circle.getDefaultLocation();
circle.draw();
