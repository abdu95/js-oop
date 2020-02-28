//value types: Number, String, Boolean, Symbol, undefined, null
//reference types: Object, Function, Array

let x = 10;
let y = x;

x = 20;

//x & y are two independent variables
// x = 20 && y = 10

//when we work with primitives, the value is saved inside of the variable
//when we copy that variable (let y = x), the value stored in the variable is copied into the new variable (y)
//they are completely independent of each other

let a = { value: 10 };
let b = a;

a.value = 20;

//a.value = 20 && b.value =20

//when we use an object, that object is not stored in the variable (a)
//that object is stored in the memory, and the address of that memory location is stored inside that variable

//when we copy a to b, its the address(reference) that is copied
//both a & b pointing to the same object in the memory 
//when we modify that object using a OR b, the changes is immediately visible to other variable

//Primitives are copied by their value
//Objects are copied by their reference
