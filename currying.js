//1. currying in javascript transforms a function with multiple argument into a nested series of function 
// and each taking  single argument.

//2. currying helps you avoid passing the same variable multiple times
//3. It helps you create a higher order function

//4. currying is a technique in javascript where a function is  transformed into sequence of functions,
// each with single argument.

// in other words , a curried function takes multiple arguments one at a time, instead of all at once

//Normal
// function add(a,b,c){
//     return a+b+c
// }

// using currying 

function add(a){
    return function(b){
        return function (c){
            console.log(a+b+c)
        }
    }
}

//calling
add(1)(2)(3)