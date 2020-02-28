let x = {};

//when we use this syntax (object literal), JS engine will translate it to:
//let x = new Object();

//circle object we created and returned from Factory function, 
//because we use object literal syntax (return {} ) internally it was created using Object() constructor function


//In JS, we have few other built-in constructors
//e.g.
//new String(); >> for creating strings OR '', "", ``
//new Boolean(); >> OR true, false -- boolean literals
//new Number(); >> OR 1, 2, 3 ...

//every object has 'constructor' property and that references the function that was used to create that object
