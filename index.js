function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// .apply is exactly like .call >> we can call the function
//but instead of passing all the args explicitly (1, 2, 3), we pass them in an array
Circle.call({}, 1);
Circle.apply({}, [1,2,3]);

const another = new Circle(1);
