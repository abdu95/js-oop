//this references that new object
function Circle(radius) {
  let color = "red";
  //is this a part of Circle object?
  //No. we haven't set it as a property of that object: this.color = color;
  //when we get out of this function, this variable gets out of scope and dies
  //with this technique, we can hide certain members from outside

  this.radius = radius;

  //defaultLocation is implementation detail, we dont want it to be accessible from outside
  //this.default >> let default
  let defaultLocation = { x: 0, y: 0 };

  //turn into private method: this.compute >> let compute
  let computeOptimumLocation = function(factor) {
    //...
  };

  this.draw = function() {

    //this function will no longer be the method of 'this' new object
    //this.compute >> compute
    //it works because in JS there is 'closure'
    //we have function (Circle) and another function (draw) which is inside of that function

    computeOptimumLocation(0.1);

    let x, y;
    //x, y available only inside draw function >> their scope is limited to this function
    //contrast of scope >> closure
    //closure determines what variables are accessible to an inner function 
    //draw can access all the local variables (x, y) as well as the variables defined in its parent function (compute, default)   


    //scope is temporary >> var x, y dies and recreated in each call
    //closure stays there

    //to access private members of Circle object
    defaultLocation.x = 5;

    //to access members of the new Circle object
    this.radius = 20; 

    console.log("draw");
  };
}

const circle = new Circle(10);
//if we access members of circle object >> circle. >> only draw and radius
circle.
circle.draw();
