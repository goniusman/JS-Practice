/// set is an another data structure for js

//// decalre
// const set = new Set(); //// we can't declare literal way. like [], {}
/// it has special three method add, delete, has and
// set.add("brendan");
// console.log(set);
// console.log(set.has("brendan"));
// set.delete("brendan");
// console.log(set);
// console.log("ddssdf");

////// array to set and set to array of... we can do it only for iterable.
// const arr = [1, 3, 45, 5, 5];
// // conver arr to set
// console.log(new Set(arr));
// // convert set to array
// console.log([...new Set(arr)]);

//////  make union array using set method
// const arr = [1, 3, 45, 5, 5];
// const ano = [2, 3, 2, 45, 32, 7];

// const a = new Set(arr);
// const b = new Set(ano);

// const union = new Set([...a, ...b]);
// // console.log(union);

// // const interactions = new Set([...a].filter((x) => b.has(x)));
// const difference = new Set([...a].filter((x) => !b.has(x)));

// // console.log(interactions);
// console.log(difference);

///////// weak set ///// is another data structure
/// generally it can't accept any primitive types. it can only obj, arr
const wekset = new WeakSet();

// wekset.add("sdfdsafd") /// won't work
// wekset.add({ a: 1, b: 2 }); // it will work.
// const wekset = new WeakSet([{a: 1}, {b: 2}]); it also work...

/// usage example
class MyClass {
  constructor() {
    wekset.add(this);
  }
  method() {
    if (!wekset.has(this)) {
      throw new Error("Not working");
    } else {
      return "i am working";
    }
  }
}

const my = new MyClass();
console.log(my.method()); // worked

// MyClass.prototype.method(); ////// not work
