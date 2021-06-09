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

// console.log(Osman.eat());

// for (const i in persons) {
//   if (Object.hasOwnProperty.call(persons, i)) {
//     const element = persons[i];
//     console.log(i + " = " + element.length);
//   }
// }

// Object.entries(persons).map(i => console.log(i[0]));

// console.log(Object.hasOwnProperty.call(persons))

// var another = {
//     id: {nam: 'osma', age: 23},
//     ids: {name: 'osma', age: 28}
// }

// const total = Object.values(another).reduce(  (prev, curr ) => {
//    return prev += curr.age;
// } ,0)

// const total = people.reduce(  (prev, curr ) => {
//    return prev += curr.age;
// },0)

// console.log(total)

// people.sort(function(a, b) {
//     return a.age - b.age;
// });

// people.forEach(function(element, index, arr) {
//     console.log(element)
// })

// const arr = []
// for (let i = 0; i < people.length; i++) {
//     const element = people[i];
//     arr.push(element)
// }
// console.log(arr)

// people.map(function (element, index, arr) { console.log(element) })

// let monkeys = [1,2,3,9];

// monkeys.splice(3, 0, 4,6,7);
// console.log(monkeys)

// function loop(arr, callback){
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i)
//     }
// }

// loop(people, function(arr, i) {
//     console.log('name is ' + arr.name + " and index number is " + i)
// })

// var newarr = people.filter(p =>
//     {
//         if(p.age > 25 && p.age < 30) {
//             return p;
//         }
// })
// console.log(newarr)

// var arr = [1,2,3,4,5,6]
// var all = "";

// for (let i = 0; i < arr.length; i++) {
//      console.log(age[i])
// }

// var all = arr.reduce((a, b) => {
//     return a+b
// }, 0)

// console.log(all)

// var add = people.age.reduce((a, b) => {
//     return a + b
// }, 0)

// console.log(add)

// var mypromise = new Promise((resolve, reject)=>{

//     // resolve(setTimeout(() => {
//     //     console.log("i am in promise")
//     // }, 3000))

//     setTimeout(() => {
//        resolve('hello name')
//     },3000)

//     setTimeout(() => {
//         reject('hello rejr' )
//     },3000)

//     // console.log('i am after resolve')

//     // reject(setTimeout(() => {
//     //     console.log('rejected')
//     // }, 3000))

//     // console.log('i am after rejected')

// })

// mypromise
//     .then( response => console.log('this is response '+response))
//     .catch(  err => console.log('this is reject ' +err))

// console.log('first ')

// function sayHello (name) {
//     setTimeout(() => {
//         console.log(name)
//     }, 3000);
// }

// console.log('third after settime out')

// var output = sayHello("osman")
// console.log(output)

// var Student = {
//     name: "osman",
//     address: "jhalakathi",
//     print: function() {
//         console.log(this)
//         console.log('hello '+ this.address)
//     }
// }

// // var names = Student.print.bind(Student)
// var another = {
//     name: "osman",
//     address: 'fsdf'
// }

// var stes = Student.print.bind(another)
// stes()
// Student.print()

// var student = Student

// Student.age = 23
// var name = 'osman'
// var age= 2763
// function Person(name, age){
//     this.name = name,
//     this.age = age
//     console.log(this)

// }

// var person = new Person('anik', 54)

// class person{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
// }

// console.log(new Person('osman', 23) )
// console.log( Person() )

// function myFunc(num) {
//     console.log(this)
//     return this.value + num
// }
// var obj ={
//     value:3
// }
// console.log(myFunc.bind(obj)(4))

// var person = {
//     name: 'anik hasan',
//     print: function () {
//         console.log('first '+ this.name)
//         setTimeout(function () {
//             console.log(this)
//          }, 1000)
//      }
// }

// function object(name, age) {
//     this.name = name,
//     this.age = age
// }
// object.prototype.hello = function () {
//     console.log(this.name)
// }
// object.prototype.age = function () {
//     console.log(this.age)
// }

// object.prototype.address = 'jhalakathi'
// var obj1 = new object('anik', 22)
// var obj2 = new object('tanver', 32)
// console.log(obj2)
// console.log(object.prototype)

// console.log(obj1)

// function printMe(age, test) {
//     console.log('Hello '+ this.name + ' and yur age is '+ age + test)
// }

// var obj = {
//     name: 'anik'
// }
// var obj1 = {
//     name: 'hasan'
// }

// printMe.bind(obj1)(3, 'dfs')
// printMe.call(obj, 3, 'test')
// printMe.apply(obj1, [22, 'ilay'])

// function first(test) {

//     this.name = 'anik'
//     this.test = test
// }

// first.prototype.address = 'jhalakathi'

// function second() {
//     first.bind(this)( 'sdfsd')
//     this.age = 23
//     console.log('your name is ' + this.name + ' and age is '+ this.age + ' and test is ' + this.test)
// }

// second.prototype = Object.create(first.prototype)

// second.prototype.constructor = second

// var obj = new second
// console.log(obj)

// function myNew(constructor) {
//     var obj ={}
//     Object.setPrototypeOf(obj, constructor.prototype)
//     var argsArr = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj, argsArr.slice(1))
//     return obj
// }

// function myFunc(name) {
//      this.name = name
// }
// myFunc.prototype.print = function () {
//     console.log(this.name)
// }

// var man = myNew(myFunc, 'anik')
// var cat = myNew(myFunc, 'cat')

// function first(name) {
//     this.name = name
// }

// first.prototype.print = function () {
//     console.log(this.name)
// }

// function second(age, name) {
//     first.call(this, name)
//     this.age = age
// }
// second.prototype = Object.create(first.prototype)
// // second.prototype.constructor = second

// var v = new second(12, 'anik')

// var obj = {
//     name: 'anik'
// }

// var another = obj

// obj.name = 'hasan'

// var str = 'hello therer'
// var astr = str
// str = str.substr(2)
// console.log(another.name)

// var obj =[
//     {
//         name: 'anik',
//         address: 'jkt',
//         divistion: 'barishal',
//         port: 3
//     },
//     {
//         name: 'anik',
//         address: 'jkt',
//         divistion: 'barishal',
//         port: 3
//     },
//     {
//  name: 'anik',
//         address: 'jkt',
//         divistion: 'barishal',
//         port: 3
//     }
// ]

// function Person(name, email) {

//     this.name = name;
//     this.email = email;
//     this.print = function() {

//     }
// }

// var p = new Person('osman', '@gmail.com')

// var p = new Person('naik', 'sdfsdf')

// p.print()
// var name = 'osman'
// function test() {
//     function innser() {
//         function more() {
//             console.log(this)
//         }
//         more()
//     }
//     innser()
// }

// var book = {
//     id: '32423',
//     title: 'HELLO',
//     func: function () {
//         setTimeout(() => {
//             console.log(this)
//         }, 1000);
//     }
// }

// console.log(this)

// test()

// book.func()
// book.func()

// 1:59 Toggle Side Bar = CTRL + B
// 2:32 Toggle Built-in Terminal = CTRL + `
// 3:03 Open User Settings = CTRL + ,
// 3:45 Quick Open a File = CTRL + P
// 4:36 Tab Through Open Files = CTRL + Tab
// 5:32 Move File to Split Windows = CTRL + \
// 6:29 Close File = CTRL + W
// 6:52 Search/Replace in File = CTRL + F
// 7:56 Global Search Replace = CTRL + SHIFT + F
// 8:30 Open Command Palette = CTRL + SHIFT + P
// 9:16 Toggle Comment a Line = CTRL + /
// 10:14 Navigating Text = Hold down ALT when moving left and right through text to move faster
// 11:25 Copy, Cut, and Paste
// 12:27 Duplicate Line = SHIFT + ALT + UP/DOWN
// 12:53 Multiple Cursors = CTRL + CLICK
// 13:32 Select Word = CTRL + D
// 13:59 Select All Instances of a Word = CTRL + SHIFT + L
// 14:52 Rename Symbol = F2
// 15:26 Jump to Function Definition = CTRL + CLICK
// 15:57 Zen Mode = CTRL + K Z

// console.log('somethings')

// var x = 'i am var';
// d()
// console.log(x);

// var obj = {
//     name: "osman",
//     home: "jhalakathi",
//     test() {
//         console.log(this)
//     }
// }

// obj.test()
// console.log(obj.test())
// function c() {
//     var n = "name"
//     console.log(n)
//     console.log('i am c')
//     d()
// }
// function a() {
//     // b()
//     console.log('i am a');
// }

// function b() {
//     c();
//     console.log('i am b');
// }

// a()

// setTimeout(() => {
//     console.log('im set time out')
// }, 2000);

// function d() {
//     console.log('i am d')
//     console.log(this)
// }

// class myClss {
//      add(){
//         console.log(' add method')
//         myClss.subtract()
//     }
//     static subtract(){
//         console.log('subtrack method')
//     }
// }

// var ins = new myClss();

// console.log(ins.add())

// console.log(this)
// const arr = [1, 2, 3, [43, 21, 32], 6];
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
//   console.log(arr[i]);
// }







