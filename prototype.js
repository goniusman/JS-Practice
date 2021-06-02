// Object Prototyping
// const Person = Object;
// Person.prototype.play = function () {
//   console.log("play");
// };
// Person.prototype.name = "osman";

// Function Prototyping with keeping in veriable
// const f = function () {};
// f.prototype.age = 20;
// f.prototype.eat = function () {
//   return "eating";
// };
// console.dir(f);

// direct function protypeing
function myFunction() {
  const home = "jkt";
}

myFunction.go = function () {
  return "go";
};
myFunction.prototype.age = 20;
myFunction.prototype.eat = function () {
  return "eating";
};

myFunction.prototype = {
  t: function () {
    console.log("teacheing");
  },
};
// console.dir(myFunction);

function InheritenceFunction() {
  myFunction.call(this);
}
InheritenceFunction.play = "play";
InheritenceFunction.prototype.gaming = function () {};

InheritenceFunction.prototype = Object.create(myFunction.prototype);
InheritenceFunction.prototype.constructor = InheritenceFunction;
const t = new InheritenceFunction();
console.dir(t);
