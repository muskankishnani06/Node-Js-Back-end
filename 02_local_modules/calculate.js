// module js

// import sum, { sub, mul } from "./index.js";

// const result = sum(10, 20);

// console.log("sum of two is", result);

// const result2 = sub(20, 10);

// console.log("sub of two number is ", result2);

// const result3 = mul(20, 4);

// console.log("mul of two is", result3);

// common js

const { num, sub, mul } = require("./index.js");

const result1 = num(80, 40);

console.log("result", result1);

const result3 = sub(20, 10);

console.log("sub is ", result3);

const result2 = mul(10, 9);

console.log("mul is", result2);
