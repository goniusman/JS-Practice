var arr = [12, 2, 34, 55, 32, 3, 3];
var persons = [
  { name: "HM Nayem", age: 22 },
  { name: "Abir Azim", age: 23 },
  { name: "Jubel Ahmed", age: 18 },
  { name: "Al Rafi", age: 19 },
  { name: "Mr. X", age: 33 },
  { name: "Mr. Y", age: 22 },
];

// Very besic object created for single person
let obj = {};
obj.name = "osman";
obj.age = 30;
obj.play = function () {
  console.log("he is playing");
};
obj.eat = function () {
  console.log("he is eatch");
};

// Very besic object created for multiple person
function MyConstructiveObj(name, age) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.play = function () {
    console.log("he is playing");
  };
  obj.eat = function () {
    console.log("he is eatch");
  };

  return obj;
}
// const Osman = MyConstructiveObj("osman", 30);
// console.log(Osman.name);
// const Rakib = MyConstructiveObj("rakib", 32);
// console.log(Rakib.age);

// Very besic object created for multiple person ..... little dynamic
const personobj = {
  play() {
    return "he is play";
  },
  eat() {
    console.log("he is eatch");
  },
};

function MyConstructiveObj(name, age) {
  let obj = Object.create(personobj);
  obj.name = name;
  obj.age = age;
  return obj;
}
// const Osman = MyConstructiveObj("osman", 30);
// console.log(Osman.play());

// Very besic object created for multiple person ..... useing prototype
function MyConstructiveObj(name, age) {
  let obj = Object.create(MyConstructiveObj.prototype);
  obj.name = name;
  obj.age = age;
  return obj;
}

MyConstructiveObj.prototype = {
  play() {
    return "he is play";
  },
  eat() {
   return "he is eatch";
  },
};


const Osman = MyConstructiveObj("osman", 30);

console.log(Osman.eat());