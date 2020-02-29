function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}

const circle = new Circle(10);
//we create Circle object. objects in JS are dynamic:
//after creating, you can add extra properties or delete some properties

//e.g. imagine you are working with User object
//a client wants to send User object to the server
//on the server we get this User object and then we add additional stuff to it, for example:
// user.token = 'asfasdf';

//we can add something extra to existing object
//because we dont have classes, we dont need to define these properties ahead of time >> we can add them whenever we need them
//JS: powerful and easy to use

//adding property on the go
// dot notation
circle.location = { x: 1 };

//bracket notation - good for dynamically access property name
circle["location"] = { x: 1 };

//access position property of a circle
//at the time of writing the code, we dont know the name of the property (location), thats calculated at runtime
const propertyName = "position";
circle[propertyName] = { x: 1 };

//another use case for using bracket notation: property name is  not valid identifiers
const nameOfProperty = "center-position";
//you cant access it via: circle.center-position

//delete property from an existing object
//e.g. get user object from DB and return it to USER, but you dont want to send to the USER some of the properties of the user object
//dynamically delete properties

delete circle.location;
delete circle["location"];
