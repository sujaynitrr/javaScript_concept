//  We can create object in javascript using two different methodologies
//  1. Literal Form and 2. Constructed Form


// Literal Form 
// let obj = {
//     key1: value1,
//     key2: value2,
//     ...
// };

// let obj = {
//     name: "Sujay",
//     mob: "9060285433",
//     print: function() {
//         return this.mob + this.name;
//     }
// };
// console.log(obj.print())
// let obj2={
//     GameName:"Ludo",
//     type:"indoor game",
//     display: function(){

//     }
// }

//Constructed Form
//syntax
// function obj(value1, value2, ...) {
//     this.key1 = value1;
//     this.key2 = value2;
//     ...
// }

//eg
//  function person(name,age){
//     this.name= name;
//     this.age = age;
//     this.greet= function(){
//         console.log(name,age,"name","age");
//     }

// }

// creating instance of object
// const obj1 = new person("Sujay","28");
// obj1.greet()


// what is the difference between literal form and constructed form

// Main difference is that when we create object use literal in this case take care of kay and value that more connivent

// object has kay and value properties(value)

//properties can be ==> primitive Data type or Object or even function
//


// let obj={
//     intValue:5,
//     stringValue:"Sujay",
//     objectValue: new Date(),
//     innerObjectValue: {
//         location:"Patna"
//     },
//     print: function(){
//         console.log("Hello object concept");
//     }

// }

// console.log(obj.intValue);
// console.log(obj.objectValue);
// console.log(obj.innerObjectValue.location);

//*******we can define global variable and method use in side object*****

//eg:
//  function print(){
//     console.log("Welcome in javaScript world")
//  }

//  let obj={
//     name:"Sujay",
//     greet:print
//  }

//  obj.greet();

//********* how to add method in object after creation *********/
// let bike={
//     name:"Activa",
//     maxSeed:"120km/h",
//     fuelType:"petrol",
//     start:function(){
//         return "Let's start"
//     }

// }
// const res=bike.start();
// console.log(res)

// //Adding stop method in object
// bike.stop= function(){
//     console.log("Let's stop it");
// }
// bike.stop();

//*******Here created object carType1 but trying to create new object(carType2) similar like carType1******************/

// const carType1={
//     name:"HondaCity",
//     speed:"140 km/h",
//     fuelType:"Diesel",
//     print: function(){
//         console.log(this.name+this.speed+this.fuelType);
//     }
// }
// //***** We can change the value because carType2 in not same object it is similar like carType1 (storing proto type of carType1)******/

// const carType2 = Object.create(carType1)
// carType2.name="BMW ";
// carType2.speed="200 km/h ";
// carType2.fuelType=" petrol";

// carType2.print()

//********How create object in ES6***** */
//  class Vehicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.maker =  maker;
//     this.engine = engine;
//   }
// }

// let car1 = new Vehicle('GT', 'BMW', '1998cc');

// console.log(car1.name);  

//*********JSON => javascript object notation***** */
// json have kay value pair
// let jsonData={
//     "key1":"value1"
// }

//***********Getting kay and value from object**********/

// let jsonData={
//     "key1":"value",
//     "key2":"value2",
//     "key3":'value3'
// };

// for( a in jsonData ){
//     console.log(jsonData[a],a,"a")
// }

//**********Convert JSON text to a JavaScript object**********/

// const jsonString = '{"name": "John", "age": 30}';


// const jsonObject = JSON.parse(jsonString)
// console.log(typeof(jsonObject),"json");
// console.log(jsonObject.name)


// ***********************/*/

// in javascript, when we create object in javascript all object 


// const car={
//     name:"Swift",
//     model:"2023",
//     price:"2.7 lakhs"
// }
// const obj5 =Object.assign({},car);
// console.log(obj5,"obj5");
// const obj2 =Object.keys(car);
// Object.
// console.log(car.name)

// console.log(obj2,"obj2")

//Q1 Write a JavaScript program to list the properties of a JavaScript object

// const student={
//     name:"Sujay Kumar",
//     college:"NIT Raipur",
//     rollNumber:"17223068"
// }

// const StudentList= Object.values(Student);
// console.log(StudentList ,"Student")

//Q2 Delete rollNumber from above Object and display before and after 
// console.log(student);
// delete student.rollNumber;
// console.log(student)

// Q3 Write a JavaScript program to get the length of a JavaScript object.
// we can  check length of Object in two ways
//1.
//Here getting  key of Object
// const key = Object.keys(student);
// console.log(key,"key");
// const value=Object.values(student);
// console.log(value,"value");
// count length of object
// const lengthOfObject = Object.keys(student).length;
// console.log(lengthOfObject,"lengthOfObject")
// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

//    const item =library.map((item)=>{
//     return item?.readingStatus
//    });
//    console.log(item,"item");

// const students = [
//   { id: 1, name: "A", marks: 60 },

//   { id: 2, name: "B", marks: 65 },

//   { id: 3, name: "C", marks: 58 },

//   { id: 4, name: "D", marks: 55 },
// ];
// let number = 1234;
// console.log(typeof(1234))

// let obj={
//     a:1,
//     b:2
// }
//  for(i in obj){
//     console.log(i,obj[i]);
//  }

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];

//***********Assign method of javascript **************/

// This method is used to copy the values and properties from one or more source of objects to a target Object

// let obj1={
//     a:1,
//     b:2
// }

// const obj2= Object.assign({},obj1);
// console.log(obj2,"obj2");

//****************create Method of javascript Object******************/

 // This method is use to create a new object with the specified prototype object and properties.
// const obj1={
//     name:"Sujay",
//     Mob:9060285433
// }

// const obj2= Object.create(obj1);
// obj2.name="Ram";
// obj2.Mob=887293733;
// console.log(obj1,"obj1");
// console.log(obj2,"obj2");

//**************defineProperty() method of javascript object*****************/
//Defines a new property directly on an object and returns the object.
//This method defines new or modifies existing properties directly on an object, returning the object.
// const object1={};
// Object.defineProperty(object1,'property1',{
//     name:"BMW",
//     speed:"120 km/h"
// });
// console.log(object1,"object1");
// object1.property1=false;
// console.log(object1,"object1");

//************defineProperties method in javascript***************//
//This method accept two arguments
//1 created object and second one property and it will return a updated object

//Object.defineProperties(object1,prop)

// const object1 = {};

// Object.defineProperties(object1, {
//   property1: {
//     value: 42,
//     writable: true,
//   },
//   property2: {},
// });

// console.log(object1.property1);

//******************entries method******************** *//

//Returns an array of a given object's own enumerable string-keyed property key-value pairs.

// const object={
//     firstName:"Sujay",
//     lastName:"Kumar",
//     age:"28 years",
//     qualification: "MCA"
// }

// const l=Object.entries(object);
// for(const [key,value] of Object.entries(object)){
//     console.log(`${key}`,`${value}`);
// }
//****************** freeze method in javascript****************** */
// A frozen object can no longer be changed
//Returns the same object that was passed in

// const obj={
//     firstName:"Sujay",
//     lastName:"Kumar"
// }

// const obj2= Object.freeze(obj);
// obj.lastName="yadav";
// console.log(obj,"obj");

//***************************fromEntries method************************************* */
// This method accept nested array and return a object with key value pair;

// const number=[[1,2],[3,4],[5,6]];
// const obj= Object.fromEntries(number);
// console.log(obj,"obj");

//********************getOwnPropertyDescriptor()****************** */

const user={
    firstName:"Sujay",
    lastName:"Kumar"
};

const isFirstName = Object.getOwnPropertyDescriptor(user,'firstName');
console.log()









   
   



