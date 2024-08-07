/**
 
  1. in javascript, A callback function is a function that passed into another function as an argument to be 
  execute later.

  2. callback functions are commonly used for asynchronous operations, such as handling api calling

 */
/*

    Browser has some extra power means some Apis

    Web Apis:

    1. setTimeOut
    2. Dom Api
    3. fetch()
    4. localStorage
    5. console
    6. location

    Browser gives access to js callstack to use this powers

*/

/*
    call stack => A call stack is a mechanism for an interpreter  to keep track of its place in a script that calls multiple functions
    callback queue ==>  callback queue 
    event loop ==> event loop is just like watcher keeper  it is motoring both of them callstack as well as callback queue

*/
/*
    Higher order function:

    1. Higher order functions are regular functions that take other function as arguments or return functions
    as their result.

    example:

    function x(){
        console.log("Hi");
    }

    function y(x){
        x();
    }
    y();
*/