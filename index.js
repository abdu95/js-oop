let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number);

// >> 10
//even though we increased number by calling function: number++

//when we call increase and pass number variable, its value is copied into the parameter which is local inside the function
//number inside function is completely independent from other variables (scope)

//when we call console.log(number), we are dealing with number variable (global)