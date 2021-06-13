//// in js has two types..
// 1. primitive data type: these type stored in stack with name alocated.
// string, number, boolen, null, undefined, es6>>> symbol.
// 2. reference/composite data type: these type stored in heap only value.
// MasterObject > object,array,function,date,math
//// in function all (any type) parameter passed referece....

// example primitive data type for
var a = "a";
var b = a;
a = "b";
// console.log(a) /// b
// console.log(b) /// a

/// example with reference data type
// var obj = {
//   name: "osman", //
//   designation: "web developer",
// };

// var another = obj; /// copy shallow
// obj.name = "anik"; // updated
// console.log(obj); /// name = anik
// console.log(another); //// name = anik
// console.log(obj); /// also name = anik
// obj.name = "hasan";
// console.log(obj); ///  name = hasan
// console.log(another); /// also name = hasan

/// example with reference data type with spred operator immutable way....
var obj = {
  name: "osman", //
  designation: "web developer",
};
var spred = { ...obj }; /// copy shallow immutable

spred.name = "goni"; // updated
console.log(spred); /// changed name = goni
console.log(obj); //// name = osman
// console.log(obj); /// also name = anik
// obj.name = "hasan";
// console.log(obj); ///  name = hasan
// console.log(spred); /// also name = hasan

/// example with reference data type with loadash for deepcopy.. for this include loadsh
var obj = {
  name: "osman", //
  designation: "web developer",
  labraies: ["jquery", "react", "angular"],
};
// var spred = _.cloneDeep(obj); /// copy deep

// spred.labraies.push("redux"); // updated
// console.log(spred); /// same obj
// console.log(obj); //// name = anik
