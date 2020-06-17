console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof undefined); // undefined
console.log(typeof true); //boolean
console.log(typeof "hello"); //string
console.log(typeof 0);
console.log(typeof new Date()); //object

console.log([] instanceof Array); //true
console.log(null instanceof Object); //false

console.log(typeof function () {}); // function

console.log(function () {} instanceof Function); //true

console.log(new Date() instanceof Date); //true

console.log(typeof NaN); //number

console.log(typeof Infinity); //number
