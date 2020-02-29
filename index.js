function Circle(radius) {
  this.radius = radius;
  this.defaultLocation = { x: 0, y: 0 };
  this.computerOptimumLocation = function() {
    //...
  };

  this.draw = function() {
    this.computerOptimumLocation();
    console.log("draw");
  };
}

const circle = new Circle(10);
//problem with 'this' inside 'this'
//circle. >> shows all: radius, draw, defaultLocation, computerOptimumLocation
//not all members should be accessible to me, as the consumer (client) of the object
//e.g. what happens if I set default location to false: it messes up everything
circle.defaultLocation = false;

//OR maybe compute() method should only be called inside draw() method

circle.computerOptimumLocation();
//maybe this will put object in a bad state and ...

circle.draw();
//can cause to weird error at runtime

// >> Abstraction
// Hide the details (complexity) and Show the essentials

// Hide defaultLocation and compute() method
// these are implementation details, these are complexity of object
// Hide them from the consumers of this object
// Show only essentials >> radius and draw()

//DVD metaphor: inside & outside
