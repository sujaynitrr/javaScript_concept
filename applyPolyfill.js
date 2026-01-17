const person={
    firstName:"Sujay",
    lastName:"Kumar"
}

function print(questions){
    return `${this.firstName} ${this.lastName} ${questions}`
}

// console.log(print.apply(person,["How are u?"]));

//think about plyfill of apply method

//step1 This is method and it's value;
//step2  we should write protoType in side function

//step 3 accetp two things thisArg and Array

Function.prototype.myApply= function(thisArg,args=[]){
    if(!Array.isArray(args)){
        throw new TypeError("Args is not array")
        
    }
    
    let context = thisArg ? thisArg : globalThis
    context.fn=this;
    let value= context.fn(...args)
    
    
    return value
}

console.log(print.myApply(person,["How are u?"]));
