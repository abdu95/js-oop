function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

// .call is used to call the function
//1 arg: this argument. pass empty {}. 'this' will reference this empty object that we pass.
//2 arg: radius

// Circle.call({}, 1) IS SAME AS  const another = new Circle(1);
Circle.call({}, 1);

//when we use new operator, new operator internally creates empty object and pass that as the first arg to the call() method 
//and this object (empty) will determine the context for 'this' (so this will reference {} )

//if we dont use new, this by default will refer to global object >> window
//// Circle.call(window, 1) IS SAME AS  const another = Circle(1);

const another = new Circle(1);