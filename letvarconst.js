//#########################################
//#########################################
//#########################################
//######################################### let keyword
//#########################################
//#########################################
//#########################################
// let definetion:- Let used for block scope. something like that will  . if we declare any let in curly bracks {} then it will block scope.
if (true) {
  let letvar = "this is let";
  letvar = "this is not work for this scope"; // this will work
  // let letvar = "this is not work for this scope" // syntex error because it hase been declard beofre
  // console.log(letvar)
}
// console.log(letvar) // it's not defined outside of the scope.

//#########################################
//#########################################
//#########################################
//######################################### var keyword
//#########################################
//#########################################
//#########################################

// var definetion:- var used for functions scope. if we declar a var in any function scope it will accesable from any where. "also global scope.""
var varvar = "this is var";
if (true) {
  var varvar = "this is var";
  //  varvar = "this is not work for this scope" // this will work
  // var letvar = "this is not work for this scope" // this also work
  // console.log(varvar); /// it will work only last var.
}
// console.log(varvar) // it's accesable

var parrent = "this is parent var";
function test(params) {
  var tests = "test";
  console.log(test);
  console.log(parrent); // it will accessable. from his parent functional scrope
}
// console.log(tests);// not accesable ouside of functional scope. as children variable
console.log(test());

//#########################################
//#########################################
//#########################################
//######################################### const keyword
//#########################################
//#########################################
//#########################################

// cosnt definetion:- almost same to let. but cann't re asign value. if once assign a value.. and just can change only object property value. but not reassined a new obj.
if (true) {
  const constvar = "this is const";
  //  cosntvar = "this is not work for this scope" // this won't work
  // const constvar = "this is not work for this scope" // syntex error because it hase been declard beofre
  // console.log(constvar); // this  will work.
}
// console.log(constvar) // it's not defined outside of the scope.
