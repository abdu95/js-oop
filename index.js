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

//first letter should be uppercase
//looks like class, but in JS, we dont have class
//now, no need for object/proeprties
//we use 'this' to set the properties of this object
//reference to object that is executing this piece of code

const another = new Circle(1);
//new Circle - new operator to call Circle function
//when we use new operator:
//new operator creates new object - {}
//it will set 'this' to point to that object
//by default this, points to global object (window/global)

//when we use new operator to call a function, 3 things happen
//1. new operator creates new object - {}
//2. it will set 'this' to point to that object
//3.it will return that object from the function (Circle)

//even though we are not writing explicitly 'return this'
//it happens automatically, when we use new operator



//2 ways of creating an object: Factory Function and Constructor