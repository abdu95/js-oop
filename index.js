// in JS, every function is an object
//Circle function is an object
// Circle. >> shows methods and properties of an object
//Circle.name >> returns the name of the function
//Circle.length >> returns the number of arguments

// every function is an object >> every object has constructor property >> constructor points to the function that is used to create that object
//who created this object (Circle)?
//Circle.constructor >> in console returns: Function()
// Function() {} >> another built in constructor
//when we declare some function using 'function name() {} ', internally JS engine will use this 'Function() {} ' constructor to create this object
//demo >>

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// demo >>

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
`
);

// now we can call Circle1 just like calling Circle function

const circle = new Circle1(1);

console.log(circle);
//returns object with 2 memebers: readius & draw