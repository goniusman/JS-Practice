// interpreter: begenning of js used this. but it has some problem . slow process but easy to debug.

// compiler : this process work together. it fast process but not debug.. system will be crush. but not understand. what's the problem.

// jit : mixed from both. it' will work with context. and every funtion is a context. also global function is a global context.

// js compiler >>> just in time (jit) compier. it's mixed from interpreter and compiler

/// definetion of execContext:- execContext is a simple some thing like object. it will have some members. 1. window:global Object 2. this:window 3. variable object 4. scope chain

var age = 12;
var a = 1;
let glo = "global";
let sco = "global scope";
function first() {
  var funscope = "functions scope";
  function second() {
    let innerscope = "inner scope";
    // var a = 2;
    function third(a) {
     
      let b = 1;
      return a + b;
    }
   return third(a);
  }
 return second();
}


console.log(first());

// console.log(global);
