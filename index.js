// // var str1 = "abc";
// // var str2 = "bcd";
// // var arr1 = [];
// // var arr2 = [];
// // var flag = 1;
// // function makeAnagram(a, b) {
// //   var l1 = a.length;
// //   var l2 = b.length;
// //   if (l1 === l2) {
// //     const upperStr1 = a.toUpperCase();
// //     const upperStr2 = b.toUpperCase();
// //     for (let i = 0; i < upperStr2.length; i++) {
// //       arr1[i] = upperStr2[i];
// //     }

// //     for (let i = 0; i < upperStr1.length; i++) {
// //       arr2[i] = upperStr1[i];
// //     }

// //     arr1.sort();
// //     arr2.sort();
// //     console.log(arr2, "arr2");
// //     console.log(arr1, "arr1");

// //     for (let i = 0; i < arr1.length; i++) {
// //       for (let j = 0; j < arr2.length; j++) {
// //         if (arr1[i] !== arr2[j]) {
// //           flag = 0;
// //           break;
// //         } else {
// //           i = i + 1;
// //         }
// //       }
// //     }
// //   }
// //   return flag;
// // }

// // let a = makeAnagram(str1, str2);
// // console.log(a);
// // if (a === 0) {
// //   console.log("Na");
// // }
// // if (a === 1) {
// //   console.log("A");
// // }

// // var arr = [3, 2, 1, 5];
// // function misssingElement(arr, n) {
// //   console.log(arr, "arr");
// //   console.log(n, "n");
// //   let count = [];
// //   arr.sort();
// //   for (let i = 0; i < n; i++) {
// //     count[i] = 0;
// //   }
// //   console.log(count);
// //   for (let i = 0; i < count.length; i++) {
// //     count[arr[i]] = count[arr[i]] + 1;
// //   }
// //   console.log(count);

// //   for (let i = 0; i < count.length; i++) {
// //     if (count[i] == 0) {
// //       return count;
// //     }
// //   }
// // }
// // let n = arr.length;

// // console.log(misssingElement(arr, n));

// // class User {
// //   name;
// //   age;
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   setName(name) {
// //     this.name = name;
// //   }
// //   setAge(age) {
// //     this.age = age;
// //   }
// //   getName() {
// //     return this.name;
// //   }
// //   getAge() {
// //     return this.age;
// //   }
// // }
// // class Emaployee extends User {
// //   employeeId;
// //   salary;
// //   constructor(name, age, employeeId, salary) {
// //     super(name, age);
// //     this.employeeId = employeeId;
// //     this.salary = salary;
// //   }
// // }
// // let emp1 = new Emaployee("sujay", "26", "121", "1k");
// // console.log(emp1.getName());
// // emp1.setName("Anand");
// // console.log(emp1.getName());

// // let x = "John";
// // let y = new String("John");
// // console.log(typeof x, "x");
// // console.log(typeof y, "y");
// // console.log(x == y);
// // let str = "Apple, Banana, Kiwi";
// // let part = str.slice(7, 13);
// // console.log(part, "part");
// // let str3 = "Apple, Banana, Kiwi";
// // let part1 = str.slice(-12, -6);
// // console.log(part1);
// // let part2 = str.slice(7);
// // console.log(part2);
// // let index = str.indexOf("Banana");
// // console.log(index, "index");

// // let str4 = "please";
// // console.log(str4.lastIndexOf("locate"), "lastIndexOf");
// // console.log(str4.charAt());
// // let arr3 = str4.charAt("0", "str4.length");
// // console.log(arr3);
// // let arr5 = str4.toString();
// // console.log(typeof arr5, "arr5");
// // let arr6 = [];
// // for (let i = 0; i < str4.length; i++) {
// //   arr6[i] = str4.charAt(i);
// // }
// // console.log(arr6, "arr6");
// // let var4 = 0.2 + 0.3;
// // console.log(var4, "var4");
// // let number = 100 / "20";
// // console.log(isNaN(number));

// // let num1 = Number.NaN;
// // console.log(num1);
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2, 0, "Lemon", "Kiwi");
// // console.log(fruits);
// // const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1);
// // console.log(citrus);
// // const cars = [
// //   { type: "Volvo", year: 2016 },
// //   { type: "Saab", year: 2001 },
// //   { type: "BMW", year: 2010 },
// // ];

// // cars.sort();
// // console.log(cars.reverse());
// // cars.sort(function (a, b) {
// //   return a.year - b.year;
// // });
// // console.log(cars);

// // let str5 = "i.like.this.program.very.much";
// // let arrstr = str5.split(".");
// // console.log(arrstr);
// // let str6 = "";
// // for (let i = arrstr.length - 1; i > 0; i--) {
// //   str6 += arrstr[i] + ".";
// // }
// // console.log(str6);

// // let s = "Bawds jog, flick quartz, vex nymph";
// // console.log(s.toLowerCase());
// // let str8 = "";
// // for (let i = 0; i < s.length; i++) {
// //   if (s[i] >= "a" && s[i] <= "z") {
// //     str8 += s[i];
// //   }
// // }
// // var arrstr2 = [];
// // for (let i = 0; i < str8.length; i++) {
// //   arrstr2[i] = str8.charAt(i);
// // }
// // arrstr2.sort();
// // let arrstr3 = [];
// // var k = 0;
// // console.log(arrstr2);
// // let j = 0;
// // for (let i = 0; i < arrstr2.length; i++) {
// //   if (arrstr2[i] != arrstr2[i + 1]) {
// //     arrstr3[k++] = arrstr2[i];
// //   }
// // }
// // var l = arrstr3.length;
// // let substr1 = arrstr3[0];
// // let substr2 = arrstr3[l - 1];
// // console.log(substr1, substr2);
// // console.log(l);
// // if (l == "26" && substr1 == "a" && substr2 == "z") {
// //   console.log("1");
// // } else {
// //   console.log("0");
// // }
// // console.log(arrstr3);
// // console.log("##############################################")

// // l

// // let str1 = "dsfsssffggcsccsacascAswdqwdwdqwdcasassQ   w";
// // function checkPangram(str) {
// //   code here
// //   str.toLowerCase();
// //   let arrstr1 = [];
// //   let k = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] >= "a" && str[i] <= "z") {
// //       arrstr1[k++] = str[i];
// //     }
// //   }
// //   arrstr1.sort();
// //   var arr = [];
// //   var j = 0;
// //   for (let i = 0; i < arrstr1.length; i++) {
// //     if (arrstr1[i] != arrstr1[i + 1]) {
// //       arr[j++] = arrstr1[i];
// //     }
// //   }
// //   console.log(arr);
// //   if (arr.length == "26") {
// //     console.log("1");
// //   } else {
// //     console.log("0");
// // }
// // }

// // let a = checkPangram(str1);
// // console.log(a);

// // function multiply(x, y) {
// //   return x * y;
// // }
// // function printSquare(x) {
// //   var s = (x, x);
// //   console.log(s);
// // }
// // printSquare(5);

// // function findMissingNumber(arr) {
// //   arr.sort();
// //   let count = [];
// //   let l = arr[arr.length - 1];
// //   l = l + 1;
// //   console.log(l);
// //   for (let i = 0; i < l; i++) {
// //     count[i] = 0;
// //   }

// //   for (let i = 0; i < l; i++) {
// //     count[arr[i]] = count[arr[i]] + 1;
// //   }

// //   for (let i = 0; i < count.length; i++) {
// //     if (count[i] == 0) {
// //       console.log("missing element from array ", i, count[i]);
// //     } else {
// //       console.log("non missing element", i, count[i]);
// //     }
// //   }
// //   console.log(count);
// //   console.log(arr);
// // }
// // let arr = [2, 1, 5, 4];
// //  findMissingNumber(arr);

// // function reverseArray(arr) {
// //   let revArray = [];
// //   let k = 0;
// //   for (let i = arr.length - 1; i > 0; i--) {
// //     revArray[k++] = arr[i];
// //   }
// //   return revArray;
// // }

// // function findMaxMin(arr) {
// //   let min = arr[0];
// //   let max = arr[0];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (min >= arr[i]) {
// //       min = arr[i];
// //     }
// //   }
// //   for (let i = 0; i < arr.length; i++) {
// //     if (max <= arr[i]) {
// //       max = arr[i];
// //     }
// //   }
// //   let arrMinMAx = [];
// //   arrMinMAx[0] = min;
// //   arrMinMAx[1] = max;
// //   console.log(arrMinMAx);
// // }

// // const numbers = [4, 2, 5, 1, 3];
// // numbers.sort(function (a, b) {
// //   return a - b;
// // });
// // console.log(numbers);

// // var arr = [3, 2, 1, 56, 1000, 167];
// // let n = arr.length;
// // let rev = reverseArray(arr, n);
// // console.log(rev);

// // function count(arr, n, k) {
// //   arr.sort((a, b) => a - b);
// //   let count = [];
// //   let l = arr.length + 1;
// //   for (let i = 0; i < l; i++) {
// //     count[i] = 0;
// //   }
// //   for (let i = 0; i < n; i++) {
// //     count[arr[i]] = count[arr[i]] + 1;
// //   }

// //   for (let i = 0; i < count.length; i++) {
// //     if (count[i] > 0) {
// //       console.log(count[i]);
// //     }
// //   }
// // }
// // let arr = [1, 2, 3, 4, 3, 4];
// // let n = arr.length;
// // k = 3;
// // count(arr, n, k);

// // const calcTempAmplitudeBug = function (t1, t2) {
// //   const temps = t1.concat(t2);
// //   console.log(temps);

// //   let max = 0;
// //   let min = 0;

// //   for (let i = 0; i < temps.length; i++) {
// //     const curTemp = temps[i];
// //     if (typeof curTemp !== "number") continue;

// //     if (curTemp > max) max = curTemp;
// //     if (curTemp < min) min = curTemp;
// //   }
// //   console.log(max, min);
// //   return max - min;
// // };
// // const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// // console.log(amplitudeBug);

// // const restaurant = {
// //   name: "Classico Italiano",
// //   location: "Via Angelo Tavanti 23, Firenze, Italy",
// //   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// //   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// //   mainMenu: ["Pizza", "Pasta", "Risotto"],

// //   ES6 enhanced object literals
// //   openingHours,

// //   order(starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
// //     console.log(
// //       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// //     );
// //   },

// //   orderPasta(ing1, ing2, ing3) {
// //     console.log(
// //       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
// //     );
// //   },

// //   orderPizza(mainIngredient, ...otherIngredients) {
// //     console.log(mainIngredient);
// //     console.log(otherIngredients);
// //   },
// // };
// // const copyRes = { ...restaurant };
// // const copyStaterMenu = { ...restaurant.starterMenu };
// // console.log(copyStaterMenu, "copyStaterMenu");
// // console.log(copyRes, "cop");
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu, "menu");

// // const copyMainMenu = { ...restaurant.mainMenu };
// // console.log(copyMainMenu, "copyMainMenu");
// // const stater = { ...restaurant.starterMenu };
// // console.log(stater, "sta");
// // const str = "Jonas";
// // const letters = [...str, " ", "S."];
// // console.log(letters);
// // console.log(...str, "str");
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Ingredient 2?"),
// //   prompt("Ingredient 3"),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// // restaurant.orderPasta(...ingredients);
// // console.log(restaurant, "res");
// // console.log(restaurant.orderPasta);
// // console.log("###################################");

// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// // console.log(newRestaurant);

// // const restaurantCopy = { ...restaurant };
// // restaurantCopy.name = "Ristorante Roma";
// // console.log(restaurantCopy.name);
// // console.log(restaurant.name);

// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others, "others");

// // const [pizza, , risotto, ...otherFood] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, otherFood, "otherFood");
// // console.log(otherFood, "other");

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// //   console.log(sum);
// // };

// // add(2, 3);
// // add(5, 3, 7, 2);
// // add(8, 2, 5, 3, 2, 1, 4);

// // const x = [23, 5, 7];
// // add(...x);

// // const sum = function (...number) {
// //   let add = 0;
// //   for (let i = 0; i < number.length; i++) {
// //     add += number[i];
// //   }
// //   console.log(add, "add");
// // };

// // sum(3, 4, 5);

// // console.log(3 || "sujay");
// // console.log("sujay" || 3);
// // console.log(undefined || null);
// // console.log(null || undefined);
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // const { menu1 = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu1, starters, "menu1 starters");
// // const [primary, sec] = restaurant.categories;
// // console.log(primary, "primary");
// // console.log(sec, "sec");

// // console.log(restaurant.categories, "c");

// // function occu(arr, n, k) {
// //   function sort(a, b) {
// //     return a - b;
// //   }
// //   arr.sort((a, b) => {
// //     return a - b;
// //   });
// //   console.log(arr);
// //   let count = [];
// //   for (let i = 0; i < n; i++) {
// //     count[i] = 0;
// //   }
// //   for (let i = 0; i < n; i++) {
// //     count[arr[i]] = count[arr[i]] + 1;
// //   }
// //   for (let i = 0; i < count.length; i++) {
// //     if (count[i] == k) {
// //       console.log(i);
// //     }
// //   }
// //   console.log(count.sort((a, b) => a - b));
// // }
// // let arr = [0, 2, 1, 0, 2, 1];
// // let n = arr.length;
// // k = 2;
// // occu(arr, n, k);

// // const rest1 = {
// //   name: "Capri",
// //   numGuests: 20,
// //   numGuests: 0,
// // };

// // const rest2 = {
// //   name: "La Piazza",
// //   owner: "Giovanni Rossi",
// // };

// // OR assignment operator
// // console.log(rest1.numGuests);
// // rest1.numGuests = rest1.numGuests || 10;
// // console.log(rest1.numGuests, "num1");
// // console.log(rest2.numGuests);
// // rest2.numGuests = rest2.numGuests || 10;

// // console.log(rest2.numGuests, "rest2num");
// // rest1.numGuests ||= 10;
// // console.log(rest1.numGuests, "rest1.num");
// // rest2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// // rest1.numGuests = rest1.numGuests ?? 10;
// // console.log(rest1.numGuests, "rest1.numGuests");
// // rest2.numGuests = rest2.numGuests ?? 10;
// // console.log(rest2.numGuests, "rest2");
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// // rest1.owner &&= "<ANONYMOUS>";
// // rest2.owner &&= "<ANONYMOUS>";

// // console.log(rest1);
// // console.log(rest2);

// // ///////////////////////////////////
// // The Nullish Coalescing Operator
// // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// // ///////////////////////////////////
// // Short Circuiting (&& and ||)

// // console.log("---- OR ----");
// // Use ANY data type, return ANY data type, short-circuiting
// // console.log(3 || "Jonas");
// // console.log("" || "Jonas");
// // console.log(true || 0);
// // console.log(undefined || null);

// // console.log(undefined || 0 || "" || "Hello" || 23 || null);

// // restaurant.numGuests = 0;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);

// // console.log("---- AND ----");
// // console.log(0 && "Jonas");
// // console.log(7 && "Jonas");

// // console.log("Hello" && 23 && null && "jonas");

// // const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// // const openingHours = {
// //   [weekdays[3]]: {
// //     open: 12,
// //     close: 22,
// //   },
// //   [weekdays[4]]: {
// //     open: 11,
// //     close: 23,
// //   },
// //   [weekdays[0]]: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };
// // console.log(openingHours, "openingHours");
// // const restaurant = {
// //   name: "Classico Italiano",
// //   location: "Via Angelo Tavanti 23, Firenze, Italy",
// //   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// //   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// //   mainMenu: ["Pizza", "Pasta", "Risotto", " "],

// //   ES6 enhanced object literals
// //   openingHours,

// //   order(starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
// //     console.log(
// //       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// //     );
// //   },

// //   orderPasta(ing1, ing2, ing3) {
// //     console.log(
// //       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
// //     );
// //   },

// //   orderPizza(mainIngredient, ...otherIngredients) {
// //     console.log(mainIngredient);
// //     console.log(otherIngredients);
// //   },
// // };

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for (const items of menu) {
// //   console.log(items, "items");
// // }

// // for (const items of menu.entries()) {
// //   console.log(items);
// // }

// // if (restaurant.openingHours && restaurant.openingHours.mon) {
// //   console.log(restaurant.openingHours.mon.open, "open");
// // }
// // console.log(restaurant.openingHours.thu, "thu");
// // console.log(restaurant.openingHours?.thu?.open);

// // console.log(restaurant.order?.(0, 1) ?? "method does not exit");
// // console.log(restaurant.order?.(0, 1) ?? "method dose not exit");
// // console.log(restaurant.order, "order");

// // const users = [
// //   {
// //     name: "sujay",
// //     email: "sujay.nitrr@gmail.com",
// //   },
// // ];
// // console.log(users[0]?.name ?? "User array empty", "users");

// // const properties = Object.keys(openingHours);
// // console.log(properties, "properties");
// // console.log(properties.length, "length");

// // const s1 = new Set();
// // s1.add("a");
// // s1.add("b");
// // s1.add("a");
// // s1.delete("a");
// // console.log(s1.has("b"));
// // s1.forEach(function (a) {
// //   console.log(a, "a");
// // });
// // console.log(s1.keys());
// // console.log(s1);

// // const question = new Map([
// //   ["question", "What is the best programming language in the world?"],
// //   [1, "C"],
// //   [2, "Java"],
// //   [3, "JavaScript"],
// //   ["correct", 3],
// //   [true, "Correct 🎉"],
// //   [false, "Try again!"],
// // ]);
// // console.log(question);
// // for (const [key, value] of question) {
// //   console.log(key, "key");
// //   console.log(value, "values");
// // }

// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // Fix capitalization in name
// // const passenger = "jOnAS"; // Jonas
// // const passengerLower = passenger.toLowerCase();
// // const passengerCorrect =
// //   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// // console.log(passengerCorrect);

// // Comparing emails
// // const email = "hello@jonas.io";
// // const loginEmail = "  Hello@Jonas.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // const normalizedEmail = loginEmail.toLowerCase().trim();
// // console.log(normalizedEmail);
// // console.log(email === normalizedEmail);

// // replacing
// // const priceGB = "288,97£";
// // const priceUS = priceGB.replace("£", "$").replace(",", ".");
// // console.log(priceUS);

// // const announcement =
// //   "All passengers come to boarding door 23. Boarding door 23!";

// // console.log(announcement.replace("door", "gate"));
// // console.log(announcement.replaceAll('door', 'gate'));
// // console.log(announcement.replace(/door/g, "gate"));

// // if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
// //   console.log("Part of the NEW ARirbus family");
// // }

// // Practice exercise
// // const checkBaggage = function (items) {
// //   const baggage = items.toLowerCase();

// //   if (baggage.includes("knife") || baggage.includes("gun")) {
// //     console.log("You are NOT allowed on board", "gun");
// //   } else {
// //     console.log("Welcome aboard!");
// //   }
// // };

// // checkBaggage("I have a laptop, some Food and a pocket Knife");
// // checkBaggage("Socks and camera");
// // checkBaggage("Got some snacks and a gun for protection");

// // const airline = "TAP Air Portugal";
// // const plane = "A320";

// // console.log(plane[0]);
// // console.log(plane[1]);
// // console.log(plane[2]);
// // console.log("B737"[0]);

// // console.log(airline.length);
// // console.log("B737".length);

// // console.log(airline.indexOf("r"));
// // console.log(airline.lastIndexOf("r"));
// // console.log(airline.indexOf("portugal"));

// // console.log(airline.slice(4));
// // console.log(airline.slice(4, 7));

// // console.log(airline.slice(0, airline.indexOf(" ")));
// // console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// // console.log(airline.slice(-2));
// // console.log(airline.slice(1, -1));

// // const checkMiddleSeat = function (seat) {
// //   B and E are middle seats
// //   const s = seat.slice(-1);
// //   if (s === "B" || s === "E") console.log("You got the middle seat 😬");
// //   else console.log("You got lucky 😎");
// // };

// // checkMiddleSeat("11B");
// // checkMiddleSeat("23C");
// // checkMiddleSeat("3E");

// // console.log(new String("jonas"));
// // console.log(typeof new String("jonas"));

// // console.log(typeof new String("jonas").slice(1));

// // function ana(str1, str2) {
// //   let arrstr1 = [];
// //   let arrstr2 = [];
// //   for (let i = 0; i < str1.length; i++) {
// //     arrstr1[i] = str1.charAt(i);
// //   }
// //   for (let i = 0; i < str2.length; i++) {
// //     arrstr2[i] = str2.charAt(i);
// //   }
// //   arrstr1.sort((a, b) => a - b);

// //   arrstr2.sort((a, b) => a - b);
// //   console.log(arrstr1);
// //   console.log(arrstr2);
// //   arrstr2.sort((a, b) => a - b);
// //   if (arrstr1.length == arrstr2.length) {
// //     console.log("1");
// //     let count = 0;
// //     for (let i = 0; i < arrstr1.length; i++) {
// //       for (let j = 0; j < arrstr2.length; j++) {
// //         if (arrstr1[i] == arrstr2[j]) {
// //           count++;
// //         }
// //       }
// //     }
// //     console.log(count, "count");
// //   } else {
// //     console.log("0");
// //   }
// // }
// // ana("uovwhqfaemqodyksjj", "swwhzsiowocjfyadvj");
// //call by value and refence
// // const flight = "LH234";
// // const jonas = {
// //   name: "Jonas Schmedtmann",
// //   passport: 24739479284,
// // };

// // const checkIn = function (flightNum, passenger) {
// //   console.log(passenger, "passenger");
// //   flightNum = "LH999";
// //   passenger.name = "Mr. " + passenger.name;

// //   if (passenger.passport === 24739479284) {
// //     alert("Checked in");
// //   } else {
// //     alert("Wrong passport!");
// //   }
// // };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // const oneWord = function (str) {
// //   return str.replace(/ /g, "").toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...others] = str.split(" ");
// //   return [first.toUpperCase(), ...others].join(" ");
// // };

// // // Higher-order function
// // const transformer = function (str, fn) {
// //   console.log(`Original string: ${str}`);
// //   console.log(`Transformed string: ${fn(str)}`);

// //   console.log(`Transformed by: ${fn.name}`);
// // };

// // let a = transformer("JavaScript is the best!", upperFirstWord);

// // let b = transformer("JavaScript is the best!", oneWord);

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// // const greeterHey = greet("Hey");
// // //console.log(greeterHey, "greeterHey");
// // greeterHey("Jonas");
// // greeterHey("Steven");

// // greet("Hello")("Jonas");

// // const lufthansa = {
// //   airline: "Lufthansa",
// //   iataCode: "LH",
// //   bookings: [],
// //   // book: function() {}
// //   book(flightNum, name) {
// //     console.log(
// //       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
// //     );
// //     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// //   },
// // };

// // lufthansa.book(239, "Jonas Schmedtmann");
// // lufthansa.book(635, "John Smith");

// // const eurowings = {
// //   airline: "Eurowings",
// //   iataCode: "EW",
// //   bookings: [],
// // };
// // const spicejeet = {
// //   airline: "spicejeet",
// //   iataCode: "EM",
// //   bookings: [],
// // };

// // const book = lufthansa.book;

// // book.call(eurowings, 23, "Sarah Williams");
// // console.log(eurowings);

// // book.call(lufthansa, 239, "Mary Cooper");
// // console.log(lufthansa);

// // const indigo = {
// //   airline: "indigo",
// //   iataCode: "ED",
// //   bookings: [],
// // };

// // //console.log(book.call(spicejeet, "234", "sujay"));
// // let a = lufthansa.book.call(spicejeet, 2344, "Anand");
// // console.log(a, "a");

// // //console.log(lufthansa.book.call(indigo, 245, "Suman"));
// // const swiss = {
// //   airline: "Swiss Air Lines",
// //   iataCode: "LX",
// //   bookings: [],
// // };
// // const flightData = [583, "soni"];
// // book.apply(swiss, flightData);
// // const bookindigo = book.bind(indigo);
// // bookindigo(234, "Radha");
// // console.log(indigo, "indigo");
// // console.log(bookindigo, "bookindigo");

// // let f;

// // const g = function () {
// //   const a = 23;
// //   f = function () {
// //     console.log(a * 2);
// //   };
// // };

// // const h = function () {
// //   const b = 777;
// //   f = function () {
// //     console.log(b * 2);
// //   };
// // };

// // g();
// // f();
// // console.dir(f);

// var arr = [2, 3, 4, 5];
// const arr1 = arr.map((a) => a * 2);
// console.log(arr1);
// const arr2 = arr.filter((x) => x > 2);
// console.log(arr2);
// arr.reduce((acc, cur) => acc + cur, 0);
// const balance = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// const arr3 = arr.find((arr) => arr > 0);

// console.log(arr3);

// // // Emprty arrays + fill method
// // const x = new Array(7);
// // console.log(x);
// // // console.log(x.map(() => 5));
// // x.fill(1, 3, 5);
// // x.fill(1);
// // console.log(x);

// // arr.fill(23, 2, 6);
// // console.log(arr);

// // console.log(Math.round(23.3));
// // console.log(Math.round(23.9));

// // console.log(Math.ceil(23.3));
// // console.log(Math.ceil(23.9));

// // console.log(Math.floor(23.3));
// // console.log(Math.floor("23.9"));

// // console.log(Math.trunc(23.3));

// // console.log(Math.trunc(-23.3));
// // console.log(Math.floor(-23.3));
// // console.log((2.7).toFixed(0));
// // console.log((2.7).toFixed(3));
// // console.log((2.345).toFixed(2));
// // console.log(+(2.345).toFixed(2));
// // const diameter = 287_460_000_000;
// // console.log(diameter);
// // const num = 3884764.23;
// // const options = {
// //   style: "currency",
// //   unit: "celsius",
// //   currency: "EUR",
// //   // useGrouping: false,
// // };
// // console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
// // console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
// // console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));

// // console.log(Intl, "intl");

// // const Person = function (firstName, birthYear) {
// //   // Instance properties
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;

// //   // Never to this!
// //   // this.calcAge = function () {
// //   //   console.log(2037 - this.birthYear);
// //   // };
// // };

// // const jonas = new Person("Jonas", 1991);
// // console.log(jonas);

// // // 1. New {} is created
// // // 2. function is called, this = {}
// // // 3. {} linked to prototype
// // // 4. function automatically return {}

// // const matilda = new Person("Matilda", 2017);
// // const jack = new Person("Jack", 1975);

// // console.log(jonas instanceof Person);

// //Consuming Promises
// //Chaining Promises
// //Handling Rejected Promises
// //Throwing Errors Manually

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // const getCountryData = function (country) {
// //   // Country 1
// //   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
// //     .then((response) => {
// //       console.log(response);

// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = "dfsdfdef";

// //       if (!neighbour) return;

// //       // Country 2
// //       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
// //     })
// //     .then((response) => {
// //       if (!response.ok)
// //         throw new Error(`Country not found (${response.status})`);

// //       return response.json();
// //     })
// //     .then((data) => renderCountry(data, "neighbour"))
// //     .catch((err) => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // const getCountryData = function (country) {
// //   // Country 1
// //   getJSON(
// //     `https://restcountries.eu/rest/v2/name/${country}`,
// //     "Country not found"
// //   )
// //     .then((data) => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];

// //       if (!neighbour) throw new Error("No neighbour found!");

// //       // Country 2
// //       return getJSON(
// //         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
// //         "Country not found"
// //       );
// //     })

// //     .then((data) => renderCountry(data, "neighbour"))
// //     .catch((err) => {
// //       console.error(`${err} 💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // btn.addEventListener("click", function () {
// //   getCountryData("portugal");
// // });

// //getCountryData("australia");
// //Consuming Promises
// const getData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       return response.json;
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };
// getData("australia");
// getData("India");

// //chaining promise
// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       const neighbour = "dfsdfdef";

//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getDta = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`country not found(${response.status})`);
//       }
//       return response.json();
//     })
//     .then((data) => {});
// };

function memo() {
  var cache = {};
  return function (num) {
    if (num in cache) {
      debugger;
      console.log("cached value");
      return cache[num];
    } else {
      console.log("normal call");
      cache[num] = num + 256;
      return cache[num];
    }
  };
}

function sumOfThreeElements(...elements) {
  console.log(elements.length, "elements.length");
  return new Promise((resolve, reject) => {
    if (elements.length > 3) {
      reject("Only three elements or less are allowed");
    } else {
      let sum = 0;
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
      resolve("Sum has been calculated: " + sum);
    }
  });
}
let arr = [1, 2, 3, 4, 5, 6, 7];

var a = sumOfThreeElements("sacamscnakskslc");
console.log(a);

var mem = memo();
mem(20);
mem(20);
mem(20);
console.log(mem);
const newSet = new Set([4, 5, 6, 7]);
console.log(newSet);
//const newSet2 = new WeakSet([3, 4, 5]);
let obj1 = { message: "Hello world" };
let obj2 = { name: "Sujay" };
let obj3 = { userName: "welcome user" };
let obj4 = { address: "surat" };

const newSet3 = new WeakSet([obj1]);
newSet3.add(obj4);
console.log(newSet3, "newset3");
newSet3.add(obj2);
newSet3.add(obj3);
console.log(newSet3.has(obj1), "check obj1");
console.log(newSet3.has(obj2), "check obj2");
console.log(newSet3.has(obj3), "check obj3");
console.log(newSet3.delete(obj1));
console.log(newSet3.has(obj1), "again check obj1");
console.log(newSet3);
console.log(newSet3.has(obj1));
