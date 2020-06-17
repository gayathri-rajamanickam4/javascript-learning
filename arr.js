let arr1 = ["a", "b"];
let arr2 = arr1;
console.log("arr1::arr2::", arr1, arr2);
//arr1 = [];// won't affect arr2
// arr1.length = 0; // affects arr2 as well
arr1.splice(0); // mutates the arr1

console.log("arr1::arr2::", arr1, arr2);

console.log(Object.prototype.toString.call(arr1) == "[object Array]"); // true
console.log(Array.isArray(arr1));
