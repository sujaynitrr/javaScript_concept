// console.log(counter);
// let counter = 1;

// let x = 20;
// let y = 10;
// let result = add(x, y);
// console.log(result, "result");
// function add(num1, num2) {
//   return num1 + num2;
// }

// function greet(name, callback) {
//   console.log(name);
//   callback();
// }

// function callme() {
//   console.log("I am call back function");
// }

// greet("sujay", callme);

// greet();
// setTimeout(() => {
//   console.log("Callback");
// }, 1000);

// function greet() {
//   console.log("Welcome in javaScript world");
// }

// function print() {
//   console.log(arguments, "arguments");
// }

//1.Don't have arguments Object

// const print = () => {
//   console.log(arguments, "arguments");
// };

// print("Hello", 400, false);

// const obj = {
//   name: "Sujay",
//   age: 28,
//   print: function () {
//     console.log(this);
//   },
// };

// obj.print();

//Arrow function don't have own this binding

// const obj1 = {
//   name: "Sujay",
//   age: 28,
//   print: () => {
//     console.log(this);
//   },
// };

// obj1.print();

//Apply call bind

// const obj1 = {
//   firstName: "Sujay",
//   lastName: "Kumar",
//   Print: function () {
//     console.log(this.firstName + this.lastName);
//   },
// };

// obj1.Print();

// let obj2 = {
//   firstName: "Kumar",
//   lastName: "Sujay",
// };

// obj1.Print.call(obj2);

// const students = [
//   { id: 1, name: "A", marks: 60 },

//   { id: 2, name: "B", marks: 65 },

//   { id: 3, name: "C", marks: 58 },

//   { id: 4, name: "D", marks: 55 },
// ];

// const updatedArray = students.reduce((acc, curr) => {
//   let array=[];
//   if (acc != 4) {
//     return acc;
//   }
// });
// console.log(updatedArray, "updatedArray");
// students.map((stu)=>{

//   retur
// })
// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);
