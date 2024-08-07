/*
    let, const and var

    /let and const

    1. let and cost both are part od ECMAScript;
    2. let and const both are restrict to access of variable before initiation
    3. when we declare  using let and const it get space different part of memory  that is known 
    as script.
    4. It also known as block level variable
    5. let variable reassign value but can't be declare again.
    6. const variable is neither declare and resign
    7. These variables are hoisted but stay in the temporal dead zone until the initialization.

    /var
    1. var is not part of ECMAScript
    2. we can access that variable before deceleration and initialization. Didn't get any error.
    3. During the memory creation phase in side GCE assign undefined an take space in inside global memory.
    4. it known as global variable.
    5. These variables are hoisted.


*/


/*
    Temporal Dead Zone
    1. Time since when the let variable was hoisted until it is initialized some value.
*/

/*
    /Block

    1. Multiple line of statement combine in group in side curly brace ({}) that is known as Block.

    example:
        {
            var a= 10;
            let b=20;
            const c=50;
        }
*/

/*
    /closure

    1. javScript has a lexical scope environment 
    2.  A closure is a function that has access to its outer function scope even after the function has returned
    3.example 
    function x() { 
            var a = 7; 
            function y() { 
            console.log(a); 
            } 
            return y; 
            } 
            var z = x(); 
            console.log(z);
    }
*/