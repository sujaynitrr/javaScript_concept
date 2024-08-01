// 1. Memoization is a technique in javascript for speed up application by caching the results of expensive 
// function calls. when we will pass input it will not  go for again calculation. it will return value from cache.


/*
There are two terminology in memoization
1. expensive function call
2.cache

There two thing need for any calculation computer
    1.memory and 2.time
   cache==> just like temporary data store 
*/

/*
    in javascript memoization based on mostly two ideas
    1. closer
    2.higher order function


 */

/*
    Before closure come to lexical scope =>  Lexical scoping defines the scope of a variable by the position of that variable declared in the source code.
    Let  come to closure ==> A closure is a function that preserves the outer scope in its inner scope.
    
    example:
        const name="Sujay"
        function greet(){
            console.log(name)
        }

    Higher order function 

        Higher order functions are function that operate an other function by taking them as argument or 
        returning them.

        example:
        
        function printName(){
            const name="Sujay";
            function greet(){
            console.log(`Hello${name}`);
            }
            return greet;


        }

        const wish = printName();
        wish();





*/

/*

 Now let come to memoization

 example
  Fibonacci Sequence
  1,1,2,3

  Before memoization:

        function fibonacci(n){
            if(n<2){
                return
            }
            return fibonacci(n-1)+fibonacci(n-2)   
        }


    After    memoization:

    function fibonacci(n,cache){
        cache = cache ||[1,1];
        if(cache[n]){
            return cache[n];
        }

        return cache[n] = memoisedFibonacci(n - 1, cache) + memoisedFibonacci(n - 2, cache);
    
    }

*/


