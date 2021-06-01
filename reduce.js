// reduce more functionality
// reduce flat
// reduce flatmap
// freequency checker 



var arr = [12, 2, 34, 55, 32, 3, 3];
var persons = [
  { name: "HM Nayem", age: 22 },
  { name: "Abir Azim", age: 23 },
  { name: "Jubel Ahmed", age: 18 },
  { name: "Al Rafi", age: 19 },
  { name: "Mr. X", age: 33 },
  { name: "Mr. Y", age: 22 },
];

// reduce
const addition = arr.reduce((acc, curr, howmanylength1234, samearray) => {
  return acc + curr;
}, 0);

let result = persons.reduce(function (rv, x) {
  // (rv[x["age"]] = rv[x["age"]] || []).push(x);
  if (rv[x["age"]]) {
    rv[x["age"]]++;
  } else {
    rv[x["age"]] = 1;
  }
  return rv;
}, {});

// my own reduce
function myreduce(array, cb, acc) {
  let init;
  if (acc) {
    init = acc;
  } else {
    init = 0;
  }
  for (let i = 0; i < array.length; i++) {
    init = cb(init, array[i], i, array);
  }
  return init;
}
const customReduce = myreduce(
  persons,
  (acc, curr) => {
    // (acc[curr["age"]] = acc[curr["age"]] || []).push(curr);
    // if (acc[curr["age"]]) {
    //   acc[curr["age"]]++;
    // } else {
    //   acc[curr["age"]] = 1;
    // }
    return acc;
  },
  {}
);
console.log(customReduce);