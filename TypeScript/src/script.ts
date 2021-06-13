function MyFunction(a: number) {
  return a;
}

// MyFunction(2) // will work
// MyFunction("dfsf") // wont work

let fruites = ["osman", "goni"];
// fruites.push(3) // not work yet
// fruites.push("talukder") // will work

let obj = {
  name: "osman",
  description: "this is description",
  iscaptain: true,
}; // like scheman

obj.name = "anik";
// obj.name = 332 // not work
// obj.country = "bangadesh"

let a: string; // explicitly set type
// a = 3; // not work
a = "anik"; // will work

let newarr: string[] = [];
// a.push(2)// not work
newarr.push("addded");

let another: (string | number)[] = []; // only number and string  will be addeed

let c: object;
c = []; // it also work
c = {
  /// we can asign anything...
}; // but after asign . we can't assign other type like array

/// dynamic type
let d: any;
d = 3;
d = "string";

let anyarr: any[] = [];
anyarr.push("ddd");
anyarr.push(2);

let objj: any = {};

////
// let myfunc: Function = () => {
//   console.log("hell arraow");
// };

let myfunc = (a: string, c?: string, e: string = "true") => {
  console.log(`hello ${a}`);
};

myfunc("osman"); // c variable is optional, e seted a value, we can change it
// myfunc(1);// not work

/// function signature
let myFuncSignature: (x: number, y: number, c: string) => number;

/// decalre signature function
myFuncSignature = (a: number, b: number, f: string) => {
  if (f === "add") {
    return a + b;
  } else {
    return a - b;
  }
};

console.log(myFuncSignature(2, 3, "add"));
console.log(myFuncSignature(2, 3, "minus"));

/// function signature
let myFuncSignatureforObj: (
  x: number | string,
  y: { name: string; age: number }
) => void;

myFuncSignatureforObj = (
  a: number | string,
  b: { name: string; age: number }
) => {
  return b;
};

console.log(myFuncSignatureforObj(2, { name: "brenden", age: 32 }));

////// classs example
class Player {
  // name: string;
  // ////access modifier
  // private age: number;
  // readonly country: string;
  // constructor(n: string, a: number, c: string) {
  //   this.name = n;
  //   this.age = a;
  //   this.country = c;
  // }

  /// another way use
  constructor(
    public name: string,
    ////access modifier
    private age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} and ${this.age}`);
  }
}

const mashrafi = new Player("mashrafi", 40, "bangladesh");
console.log(mashrafi.name);
// console.log(mashrafi.age);// not work for private
const mushfiq = new Player("mushfiq", 40, "bangladesh");
//// custom type like c#, java
const players: Player[] = [];
players.push(mushfiq);
players.push(mashrafi);

//// interface

interface Product {
  name: string;
  price: number;
}

function product(options: Product) {
  let name = options.name;
  let price = options.price;
}
let proper = {
  name: "first product",
  price: 12,
  rate: 5,
};
product(proper);

/// for class function
interface insclass {
  name: string;
  age: number;
  readonly country: string;

  play(): void;
  getAge(): number;
}

class myinterface implements insclass {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play() {
    console.log(`${this.name} and ${this.age}`);
  }
  getAge() {
    return this.age;
  }
}

const mushfi = new myinterface("mushfiq", 40, "bangladesh");
//// custom type like c#, java
const player: insclass[] = [];

//// generic

// const addId = <T extends object>(obj: T) => { // for specify
const addId = <T>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

let user = addId({
  name: "brenden",
  age: 40,
  country: "bangladesh",
});

user.age; /// acces
// user.age; /// for extend it's not accesable
enum Rtype {
  SUCCESS,
  FAILURE,
  UNAUTHENTIC,
} ///  example of enum type
interface ApiResponse<T> {
  status: number;
  type: Rtype;
  data: T;
}

// const response: ApiResponse<String> = {
const response: ApiResponse<object> = {
  status: 200,
  type: Rtype.SUCCESS,
  data: { name: "string", age: 23 },
  // data: "string" /// we need to change object to string
};

//// tuples

let arr = [2, "dd", { id: 1, name: "rydan" }];
let b: [number, string, object] = [2, "rr", { id: 1, name: "each" }];
// b[2] = true; not work because there fixed type
// arr[2] = false; /// becaus no type in this array
