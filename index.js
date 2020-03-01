
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  //we converted it to private members: this.compute >> let compute
  //more accurately these are not private members of Circle object because technically they are not inside Circle object
  //they are local variables that we have defined inside of Circle function
  //OOP: private members of the Circle object
  let computeOptimumLocation = function(factor) {
    //...
  };

  this.draw = function() {
    computeOptimumLocation(0.1);

    console.log("draw");
  };
}

const circle = new Circle(10);
circle.draw();
