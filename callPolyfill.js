const person={
    firstName:"Sujay",
    lastName:"Kumar",
   
}
function printName(questions,age){
    return `FirstName:${this.firstName}  LastName:${this.lastName} ${questions} ${age}`
}

//think about plofill
//step1: plofill should be function
//step 2: where we have to override in prototype=. inside function
//step 3: it's returing a result

Function.prototype.myCall= function(obj,...arug){
    
    if(typeof this !== 'function'){
        throw new TypeError("soem thing went wrong")
    }
    
    obj= obj ?obj :globalThis
    
    let context = obj;
    console.log(context.fn)
    context.fn= this;
    let result = context.fn(...arug)
    delete context.fn
    
    return result
}


console.log(printName.myCall(person,"How are u","22"))



