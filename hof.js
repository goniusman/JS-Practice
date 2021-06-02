/// definetion of higher order function :: if a function take another function as a parameter or return another funtion, this will call higher order function. there are some building hof like map() filter() reduce() some() every()

const arr = [
  { name: "goni", avg: 32.9 },
  { name: "anik", avg: 31.1 },
  { name: "aman", avg: 53.7 },
  { name: "noman", avg: 87.2 },
];
let result = [];

// without higher order function with custom map
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i].avg * 2;
//   result.push(element);
// }
// console.log(result);

// with higher order function with building map function
// result = arr.map(function (item) {
//   return item.avg * 2;
// });
// console.log(result)

// without higher order function with custom filter
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i].avg;
//   if (element >= 35) {
//     result.push(element);
//   }
// }
// console.log(result);

// with higher order function with filter function
// result = arr.filter(function (item) {
//   return item.avg >= 35;
// });
// console.log(result);
