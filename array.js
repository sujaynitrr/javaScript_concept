
const array1 =[1,2,3,4,5];
const array2=["a","b","c"];
//************Adding element in array******************** */
//push -> it will add element from last of array
//unshift => it will add element in array from start
// array.push(6);
// console.log(array,"array");

// array.unshift(7);
// console.log(array,"array");

//*******************Removing element from Array***************** */
//pop => it will remove element in array from last
// shit()=> it will remove element in array from start
// array.pop();
// console.log(array,"array");
// array.shift();
// console.log(array,"array");

//splice() => it will also remove element form array but in given index
// In this method we are passing two things startIndex and lastIndex
//It's include startIndex and exclude lastIndex

// array.splice(0,3);
// console.log(array,"array")

//******************* Iterating array************************** */
//using for loop
// for(let i=0;i<array.length;i++){
//     console.log(array[i],"arr")
// }

//using forEach loop
// array.forEach((element)=>{
//     console.log(element,"element");
// })


//***********************Array Concatenation************************************ */
// we can combine two array using speared operator and concat() method

// const updatedArray1 = array1.concat(array2);
// console.log(updatedArray1,"updatedArray");

// const newArray =[...array1,...array2];
// console.log(newArray,"newArray");



//**********************Array to string********************************************* */

// const newString = array1.toString();
// const str= newString.split(",");
// console.log(str,"str")
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }


//*********************Check type of Array******************* */
//console.log(typeof(array1),"typeOf");
// we can check two more method is it array or not
//1. isArray() method
//2. instanceOf()

//********************Join Method****************** */
// It will return new string  by concatenating  all element of array
// const name=["Radha","Rani","Rinki"];
// const updatedName = name.join(",");
// console.log(updatedName,"updatedName")


//******************************************************** */
// let arr=[[1,2],[3,4]];
// let newArray=[];
// for(let i=0;i<arr.length;i++){
//     //newArray=newArray.concat(arr[i])
//     newArray= [...newArray,...arr[i]]

    
// }
// console.log(newArray,"newArray");

//*****************Delete element in array*********************** */
// const arr=["a","b","c"];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==="a"){
//         delete arr[i];
//     }
// }
// console.log(arr,"arr");

// const student=[
//     {id:1,name:"a",marks:50},
//     {id:2,name:"a",marks:50},
//     {id:3,name:"a",marks:50},
//     {id:4,name:"a",marks:50}
// ]
// for(let i=0;i<student.length;i++){
//     if(student[i].id ==3){
//         delete student[i];
//     }
// }
// console.log(student,"student");

//***************************concat method in array javascript********************************** */
// concat()=> it is concat two array in one.
// in concat() method we can pass multiple argument;

// let arr1=[1,2,3,4];
// let arr2=[2,3,4,5];
// let arr3=[5,6,7,8,9];
// let arr4 = ["s","d"];

// const newArray = arr1.concat(arr2,arr3,arr4);
// console.log(newArray,"newArray");

//*************************Flat method in array***************************** */

//flat()=> it convert multiple level array into single array 
// flat method take a argument that depth of array. we can pass like 1,2,3 it's indicate label of depth

// let arr=[1,3,[3,4,[5,6,[6,7]]]];
// const newArray = arr.flat(2);
// console.log(newArray,"newArray");



//***********************splice method in javascript ********************************* */
// It is used to Insert and Remove elements in between the Array.
//splice()=> This method accept three things in argument startIndex,LastIndex, Item
//In method delete item as per given index and replace new value with  pervious value;
//Example of deletion
 //const arr=[1,2,3,4,5,6];
// const arr1=arr.splice(1,2);
//output :  [1, 4, 5, 6]
//console.log(arr);
// example for replace item
 //arr.splice(0,2,67,89);
 //console.log(arr,"arr");


 //*********************************slice Method javaScript********************************** *//
 // slice()=> This method accept two things as argument firstIndex and lastIndex but we acn pass one argument also as per our requirement

 //const arr =[3,4,5,6,7,8,9,10];
 // First element
//  const newArr = arr.slice(0,1);
//  console.log(newArr,"newArr");

//Last three element
// const newArr = arr.slice(-3);
// console.log(newArr,"newArr");
//Middle Element

// const newArray= arr.slice(3,6);
// console.log(newArray);

//start index is greater than lastIndex
// const newArr = arr.slice(5,2);
// console.log(newArr,"newArr");

//Negative end index
//  const newArr=arr.slice(3, -2);
//  console.log(newArr,"new");

//only startIndex
// const newArr= arr.slice(5);
// console.log(newArr,"newAr");

// const newArr = arr.slice(-15, -20);
// console.log(newArr)

//******************************map method in javascript********************************** */
//This method iterates over an array and calls the function on every element of an array.
// In array ,any type manipulation we can refer map like update array element, delete array element
// in map () method we will pass as argument callback method in callback() method we will pass element of array ya index of array

// const arr = [3,4,5,6,7];
// const updatedArray = arr.map((item)=>item*2);
// console.log(updatedArray,"updatedArray")

//***************************reduce method in javascript*************************** */
// It is  used to reduce the array into a single value.
//And executes a provided function for each value of the array left to right
//And return value of the function is stored in an accumulator
// const arr = [3,4,5,6,7];

// const sum = arr.reduce((acc,curr)=> {
//     acc+=curr;
//     return acc;

// },0)
// console.log(sum,"sum");

//*************************some method in javascript************************* */

// some() method it takes as argument callback function and return boolean value true or false on given conditions
//some() method will return true any of element condition will satisfied
// const arr =[3,4,5,6];
// const some =arr.some((item)=>item>5);
// console.log(some,"some");


//*****************************every method in javascript ********************************* */
// every() method  take a callback function in argument ant return boolean value based on conditions
//It will return true when all of them element of array will satisfied conditions otherwise return false

// const arr =[3,4,5,6,7];
// const everyElement= arr.every((item)=>item>6);
// console.log(everyElement,"everyElement");


//***************************reverse method in javascript*********************** */
// const arr = [3,4,5,6,7];
// const reverseArray = arr.reverse();
// console.log(reverseArray,"reverseArray");

//****************************Find method in javascript****************************** */
// find() method accept as argument as callback function. If first element of array condition satisfied it will return that element
// const arr =[34,12,23,34,56,78,90];
// const  value = arr.find((item)=> item>50);
// console.log(index,"ine");

//*************************find index in method************************ */
//findIndex() method accept as argument as callback function. If first element of array condition satisfied it will return that index of that element
// const arr =[34,12,23,34,56,78,90];
// const index = arr.findIndex((item)=>item>70);
// console.log(index,"index")

//*************************include method in javascript********************************* */
// include() method we will pass value which one want to search in particular in array;
// It will return boolean value  based on certain conditions. If condition satisfied return true otherwise false;
// const arr = [23,34,56,67];
// const value = arr.includes(23);
// console.log(value,"value")


// const fetchData= (){
//     return Promise((resolve,reject)=>{
//         fetch(url)
//         .then(res=>{
//             if(res){
//                 return res;
//             }
//         })

//     })
// }

//**************************Array Destructuring********************************* */

//Array destructuring is a javascript syntax feature that allow you to unpack value from array into distinct variables.


/*Array destructing is a technique in javascript that allow you to extract elements from an array and assign
them to variable using a pattern of square brackets[]*/


// const arr =["item1","item2","item3"];
//const [item1,item2]= arr;
// console.log(item1)
// console.log(item2);
// const number=[1,2,3,4,5,6,7];

// const [item1,item2,item3]=number;
// console.log(item1);
// console.log(item2);
// console.log(item3);

// const userList=[{id:121,salary:12345},{id:122,salary:12355},{id:123,salary:12365}];
// const [user1,user2,user3] =userList;
// console.log(user1,"user");
// console.log(user2,"user2");
// console.log(user3,"user3");















