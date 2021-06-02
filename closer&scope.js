var num1 = 1;

// this function one scope. just global
var sum = function () {
  var num2 = 2;
  let num = 1;
  // this inner function has two scope 1. closer 2. global
  return function () {
    // return num1 + num2;

    // if will retunr only global value then closer will gone.
    return num1; //>>>> closer not availble
  };
};

// console.dir(sum());

function bankaccout(init) {
  var balance = init;
  return function () {
    return balance;
  };
}

// it won't be access from here because its j private
// console.log(balance)

// this method take balance var from it's closer... now it will show the value
// console.log(bankaccout(111)());

function stopWatch() {
  var startTime = Date.now();
  console.log(startTime);
  return function () {
    console.log(Date.now() - startTime);
  };
}

// var stop = stopWatch();

// for (let i = 0; i < 100000; i++) {
//   var a = Math.random() * 1000000;
// }

// stop();

// var a;
// function async() {
//   a = 2000;
//   setTimeout(() => {
//     // what will be this here... a = 30
//     console.log(a);
//   }, 1000);
// }
// async();
// a = 30;

// Example this are script scope
let g = "g";
let h = "6";

if (true) {
  // Eample this are bloking scope
  let t = "test";
  let ano = () => {
    console.log(t);
  };
  console.dir(ano);
}

/// this let is blockig scope. that let outside of block are scrip scope
for (let i = 0; i < 3; i++) {
  let myFunc = () => {
    console.log(i);
  };

  console.log(i);
  console.dir(myFunc);
  setTimeout(myFunc, 4000);
}
