"use strict";
function MyFunction(a) {
    return a;
}
// MyFunction(2) // will work
// MyFunction("dfsf") // wont work
var fruites = ["osman", "goni"];
// fruites.push(3) // not work yet
// fruites.push("talukder") // will work
var obj = {
    name: "osman",
    description: "this is description",
    iscaptain: true,
}; // like scheman
obj.name = "anik";
// obj.name = 332 // not work
// obj.country = "bangadesh"
var a; // explicitly set type
// a = 3; // not work
a = "anik"; // will work
var newarr = [];
// a.push(2)// not work
newarr.push("addded");
var another = []; // only number and string  will be addeed
var c;
c = []; // it also work
c = {
/// we can asign anything...
}; // but after asign . we can't assign other type like array
/// dynamic type
var d;
d = 3;
d = "string";
var anyarr = [];
anyarr.push("ddd");
anyarr.push(2);
var objj = {};
////
// let myfunc: Function = () => {
//   console.log("hell arraow");
// };
var myfunc = function (a, c, e) {
    if (e === void 0) { e = "true"; }
    console.log("hello " + a);
};
myfunc("osman"); // c variable is optional, e seted a value, we can change it
// myfunc(1);// not work
