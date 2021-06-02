//// if any function called in itself. then it's called recursion

//// f(n-1) + n = f(n)
//// last.total + current.valie  = currnt.total

//// recursion example like loop
// function sum(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return sum(n - 1) + n;
//   }
// }

//// what happend
// sum(3)
// > sum(2) + 3
// > sum(1) + 2 + 3
// > sum(0) + 1 + 2 + 3
// > 0 + 1 + 2 + 3

// console.log(sum(5999));

// var n = 1000;
// console.log(n * (n + 1)) / 2;
