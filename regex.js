const phonenumber = "+8801721737185";
// const expression = "/(+\88)?(0,1)d{8}/gi";
const expression = "^(?:+?88|0088)?01[15-9]d{8}$";

console.log(phonenumber.search(expression));
console.log(phonenumber.test(expression));
console.log(phonenumber.replace(expression, "phonenumber"));
