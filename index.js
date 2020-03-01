function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  //one solution
  this.getDefaultLocation = function() {
    return defaultLocation;
  };

  this.draw = function() {
    console.log("draw");
  };

  //solution: define property
  //1st arg: Object that we want to add a new property to  >> this >> a new Circle object
  //2nd arg: name of property
  //3rd arg: obj >> key-value pair: get/set special keyword in JS

  //when we access circle.defaultLocation, get function will be called 
  //now if we access circle object in the console, we can see new property >> defaultLocation (... >> Invoke property getter), computed property
  //we also can see 'get': getter is a function that is used to read the property

  //we can also add setter function (with Validation)
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value){
        if(!value.x || !value.y)
            throw new Error('Invalid location');
        defaultLocation = value;
    }
  });
}

const circle = new Circle(10);
//we are calling this as a method
//it would be nicer if we could access this property like: circle.defaultLocation; >> to read, not to set: circle.getDefaultLocation = 5
circle.getDefaultLocation();
//test of setter validation 
circle.defaultLocation = 5;
circle.draw();
