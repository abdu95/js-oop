let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);

//value 11
//when we call increase(obj) and pass obj, this object is passed by its reference
//obj local parameter will point to the same object that we defined as variable 

//we have two variables pointing to the same object 
//any changes we make to the object will be visible to the other variable 