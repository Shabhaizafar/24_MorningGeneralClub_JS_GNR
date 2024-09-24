// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.


// var obj = {
//     lname : "Patel",
//     fname : "Raj",
//     1 : 123
// }
// console.log(obj);

// for (const key in obj) {
//     console.log(`${key} type is ${typeof key}  : ${obj[key]} type is ${typeof obj[key]}`);
// }



// console.log("");
// console.log("");

var myMap =new Map();

myMap.set("fname","Raj");
myMap.set(1,123);
myMap.set("","Patel");

console.log(myMap);

// myMap.forEach(
//     (v,k)=>{
//         console.log(`${k} type is : ${typeof k} => ${v} type is ${typeof v}`);
//     }
// );

// myMap.clear();

// myMap.delete(123);

// console.log(myMap.entries());
// console.log(myMap.keys());
// console.log(myMap.values());


console.log(myMap.get("fnamwertyuie"));
console.log(myMap.has(123));
