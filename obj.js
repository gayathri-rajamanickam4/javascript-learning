let obj1 = {name: "Nila"};
let obj2 = obj1;
console.log("obj1::obj2::", obj1, obj2);
//obj1 = {name: "Sula"}; // won't change obj2
obj1.name = "sula"; // affects obj2
console.log("obj1::obj2::", obj1, obj2);
