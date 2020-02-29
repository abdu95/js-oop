function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);

//sometimes you need to iterate over OR enumberate the properties of an object
//we can do that using 'for in' loop
// key == property

// in every iteration, key will hold the value of one key in this object
//shows all properties: radius, draw
for (let key in circle) {
  console.log(key);
}

//to see values of properties
for (let key in circle) {
  console.log(key + ":  " + circle[key]);
}

//only properties (radius), not the methods (draw): typeof >> to check the type of value in circle[key]
for (let key in circle) {
  if (typeof circle[key] !== "function") 
  console.log(key + ": " + circle[key]);
}

//to get all the keys of the object ()
// Object.keys(circle) >> returns all the keys of the object as an array

const keys = Object.keys(circle);
console.log(keys);

// when you want to know whether the object has given (some) property >> in operator used
if('radius' in circle)
console.log('Circle has a radius');
