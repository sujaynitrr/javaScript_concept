/*
    Hoisting is a concept in javascript which enables us to extract values of variables and functions
    even before initializing/assigning value without getting error
    And this is happening due to the 1st phase of the global execution context

    example:

        getName(); //  Javascript
        console.log(x); // undefined
        var x = 7;
        function getName() {
        console.log(" Javascript");
        }




*/

/*
    undefined and not defined
    Undefined:

    1. when we declare any variable not not assign value in this case javascript engine assign value i.e undefined
    because of 1st phase

    Not defined:
    
    when we don't declare variable but trying to access it in this case we will get not defined error

    example:
    console.log(x); // undefined
        var x = 25;
        console.log(x); // 25
        console.log(a);




*/

/*
    Scope , Scope chain  and Lexical Environment

    Scope:
    1. scope is the accessibility of variable, function and  objects in some particular part of code
    during runtime

    2. scope determine the visibility of variable and other resource in area of your code.

    There are two type of scope
    1. Global scope 
    2. Local scope

    Global Scope:

    Variable which not define local scope but we will that variable value that is known as global scope

    example:

        const name="Sujay";

        function greet(){
            console.log(name)
        }
        greet();

     Local scope:
     
     Variable which define in side function and trying to access outside function in this case we will get
     reference type error. That is known as local scope.

     function greet(){
        const name="javaScript";
        console.log(name)
     }

     greet();

     /scope chain

     when a variable used in javascript javascript engine first try to find at variable in current scope
      if variable didn't get find in the current scope then it will look into outer scope .
      if still didn't get in outer scope then for global scope. it variable is there it will print.
      otherwise give error, that is known as scope chain.

      example:

        function greet(){
            console.log(x)
        }

        greet();


      Lexical Environment = local memory + lexical env of its parent. 
      Hence, Lexical Environment is the local memory along with the lexical environment of its parent.
      Whenever an Execution Context is created, a Lexical environment(LE) is also created and is referenced in the local
      Execution Context(in memory space).  





*/
