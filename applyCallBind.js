/*
    / Call method

    1. it allow to browser functions from one object and invoked them in the context of another.

    2. The call method invokes a function with specified this value and individual arguments passed 
    as separate arguments.


    example:
    const person1={
        name:"Bob",
        sayHello: function(){
            console.log(`Hello ,${this.name}`)
        } 
    }

    const person2 ={
        name:"Ram"
    }

    person1.sayHello.call(person2);


    /apply

    1. similar to call method, Th apply method  is similar like call method it is also use for function 
    borrowing 

    2. In apply method is used to invoke a function with specified this value and arguments provided 
    as an array or an array like object .
    
    example:
    function sum(a, b, c) {
        return a + b + c;
    }

    const numbers = [1, 2, 3];

    / Using apply to pass the array elements as arguments
    const result = sum.apply(null, numbers);
    console.log(result); // Output: 6


    /bind

    1. The bind method doesn't immediately invokes the functions.
    2. Instead , it creates a new function with specified this value and optionally preset 
    arguments
    3. The new function must be called separately.

    example:

        const person = {
            firstName: "John",
            lastName: "Doe",
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        };

       / Creating a new function with 'this' bound to 'person'
        const getFullName = person.fullName.bind(person);

        console.log(getFullName()); // Output: "John Doe"

     
    

*/



/*

    first order, first class  higher order ,json,Object and Maps,pure function,,nan,spread operator and rest operator,Es6 feature,
    throttling
 */
