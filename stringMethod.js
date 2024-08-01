// const str ="Hello, How are you";

//Q1. convert string into 1 array;

// const strArray = str.split();
// console.log(strArray)
// output =>['Hello, How are you']



// const strArray= [str];
// console.log(strArray,"strArray");
// output ==>['Hello, How are you']

// const strArray =[...str];
// console.log(strArray,"strArray")
// output => ['H', 'e', 'l', 'l', 'o', ',', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']

// const strArray = str.split('');
// console.log(strArray,"strArray")
// output ==> ['H', 'e', 'l', 'l', 'o', ',', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u']

// const strArray = str.split(" ");
// console.log(strArray,"strArray");
// output => ['Hello,', 'How', 'are', 'you'] 

//Q2. Replace in string

// const output = str.replace("Hello","Hey");
// console.log(output)

//Q3. Find subString in string

// const subString =str.substring(6,10);
// console.log(subString)
// output ==>  How

//Q4. Delete Last character in string

// const subString = str.substring(0,str.length-1);
// console.log(subString,"subString");
// output => Hello, How are yo 

//Q5. Remove first character form string;

// const subString = str.substring(1,str.length);
// console.log(subString)
// output ==> ello, How are you

//Q6. Reverse 

// const rev = str.split(" ").reverse().join(" ");
// console.log(rev,"rev");
// output ==> you are How Hello


//Q7. Remove duplicate form string

// javaScript Map object
//1. javaScript Map object hold key-value pairs and preserve the original insertion order
//2. Ist supports any value , including object and primitive.

//example
// let map1 = new Map([
//     [1 , 10], [2 , 20] ,
//     [3, 30],[4, 40]
//     ])

//     console.log(map1,"map1");
//     output ==> Map(4) {1 => 10, 2 => 20, 3 => 30, 4 => 40}

//Sets

// 1. Sets in JavaScript are collections of unique values, meaning no duplicates are allowed
//2. Sets support operation like adding, deleting, and checking

//3. Syntax
//const  updatedvalue=new Set([]);

// const  str ="geeksforgeeks";
// let array=[];
// for(let i=0;i<str.length;i++){
//     array.push(str.charAt(i))
// }
// const removeDuplicate = new Set(array);
// str1="";
// removeDuplicate.forEach((value)=>{
//     str1+=value;
// })

//Q8. Reverse a word in sentence

//const sentence ="geeks quiz practice code";

// const str= sentence.split("").reverse().join("");
// console.log(str)

// const str1 = sentence.split(" ");
// let str3="";
// for(let i=str1.length-1;i>=0;i--){
//     str3+=str1[i]+" "
    
// }
// console.log(str3)
// console.log(str1.reverse(),"str1")
// let str2=""

// for(let i=0;i<str1.length;i++){
//     str2+= str1[i]+" "
// }
// console.log(str2)



  
