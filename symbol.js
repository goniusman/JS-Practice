/// definetion:- it's a primitive data type like string, number, boollean... Once you create a symbol, its value is kept private and for internal use. but it's not a constructor object. that's why we can't declare with new keyword....

//// example one.
const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");
// console.log(symbol1 === symbol2); // false
// console.log(symbol1 == symbol2); // false
// console.log(symbol1);
// console.log(symbol2);
// console.dir(symbol1);// not constructor object

//// example 2 of symbol
// const symbol = Symbol("I am property");
// const obj = {};
// obj.name = "brenden each";
// obj.age = 25;
// obj[Symbol("founder of nodejs")] = "Ryan Dahl";
// obj[symbol] = "Brenden Each";
// console.log(obj);// all shown
// console.log(Object.keys(obj)); /// none shown symbol property

///// example 3 of symbol
// const includes = Symbol("my includes");
// Array.prototype[includes] = function () {
//   console.log("i am includes");
// };
// const myarray = [1, 2, 3];
// console.log(myarray.includes(2));
// // console.log(myarray[includes](2));
// myarray[includes](); // used my includes

////// example 4 of symbol

// class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   [Symbol.search](String) {
//     return String.indexOf(this.title) >= 0 ? "Found" : "not found";
//   }
// }
// console.log("Javascript".search("p")); /// default
// const laptop = new Product("laptop");
// console.log("laptop".search(laptop)); //// my custom symbol

///// example 5 of symbol
// function myFunction() {
//   const PVT = Symbol("Privat Value");
//   return {
//     modify(obj) {
//       obj[PVT] = true;
//     },
//     output(obj) {
//       return obj[PVT];
//     },
//   };
// }

// const value = myFunction();
// const obj = { a: 1, b: 2 };
// value.modify(obj);
// console.log(value.output(obj));
// console.log(obj);
// delete obj["Symbol(Privat Value)"]; // won't delete
// console.log(obj);

// function anotherFunction() {
//   const PVT = "test";
//   return {
//     modify(obj) {
//       obj[PVT] = true;
//     },
//     output(obj) {
//       return obj[PVT];
//     },
//   };
// }
// const value = anotherFunction();
// const obj = { a: 1, b: 2 };
// value.modify(obj);
// console.log(value.output(obj));
// console.log(obj);
// delete obj["test"]; // will delete
// console.log(obj);
