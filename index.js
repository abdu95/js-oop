//Constructor property

//every object in JS has a property called constructor 
//and that references the function that was used to construct (or to create) that object

//try in console: another.constuctor >> returns Circle definition 
//try in console: circle.constuctor >> returns Object (first letter uppercase >> function, constructor) 

//Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}

const circle = createCircle(1);

//Constructor function
function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const another = new Circle(1);