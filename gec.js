/*
    When we write code in javascript and try to eun in this case javascript engine create GEC(Global execution context)
    GEC it divided in to two part
    1. Memory creation 
    2. code execution

    Memory: During memory creation  javascript engin assign space in memory for variable and function but function attach with
    function deification

    example:

    var n =2
    function square(n){
        return n*n;
    }
    const num=square(3)
     during memory creation 
     1. variable n got space in memory and assign with undefined
     and attached with function definition and num also got space in memory with undefined

     2nd phase is code execution phase:
     javascript engine move from top and assign with value i.e 2;
     now come at function invocation part
     again create GCE for function and assign value like memory creation phase
     return value where function invocated and delete from call stack

     /Call stack/

        Javascript manages code execution context creation and deletion with the the help of Call Stack
        Call Stack is a mechanism to keep track of its place in script that calls multiple function.
        Call Stack maintains the order of execution of execution contexts. It is also known as Program Stack, Control Stack,
        Runtime stack, Machine Stack, Execution context stack.


    
*/