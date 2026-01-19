const person={
  firstName:'Sujay',
  lastName:'Kumar'
}

function print(question,age){
  return `${this.firstName} ${this.lastName} ${question} ${age}`
}

Function.prototype.mybind= function(thisArg,...arg){
     let originalfn = this;
  
  
  return function(){
   
    let context = thisArg;
    context.fn = originalfn;
    let result = context.fn(...arg);
    return result
    
  }
}

const bindexample = print.mybind(person,"How are u","22");
console.log(bindexample())
