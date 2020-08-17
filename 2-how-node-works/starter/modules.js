console.log(arguments); // arguments array in js
console.log(require("module").wrapper);

// 1. module.exports
const C = require("./test-module-1.js");
const calcola = new C();
console.log(calcola.add(10, 10));

// 2. exports
// const calc2 = require("./test-module-2.js");
// console.log(calc2.add(10, 10));

const { add, multiply, divide } = require("./test-module-2.js");
console.log(add(10, 10));

// 3. caching
require("./test-module-3.js")();
require("./test-module-3.js")();
require("./test-module-3.js")();
