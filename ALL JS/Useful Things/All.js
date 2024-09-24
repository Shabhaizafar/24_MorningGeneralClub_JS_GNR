// => More useful things :-

//    - Iterables.
//    - Sets.
//    - Maps.
//    - Object.assign.
//    - Optional chaining.

// var str = "Royal";
// console.log(str[0]);
// for (const iterator of str) {
//     console.log(iterator);
// }

// var Arr = [1,2,3,4,5];
// console.log(Arr[3]);
// for (const iterator of Arr) {
//     console.log(iterator);
// }

// var obj = {
//     fname :"Raj",
//     lname : "Shah"
// };

// // console.log(obj[1]); //

// for (const iterator of obj) {
    
// }

///////////////////////////////////////
//    - Optional chaining.    (.  ==> ?.)
// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,

//     contacts: {
//       email: "john.doe@example.com",
//       phone: {
//         mobile: "+123456789",
//         home: "+987654321"
//       }
//     }
//   };

// console.log(person);
// console.log(person.firstName);
// console.log(person.Gender); // undefined


// console.log(person.address);  //undefined
// console.log(person?.address?.city);
// console.log(person?.address?.state);

// console.log(person?['address']?["city"]);


// for (const key in person) {
//     console.log(person.key);
// }

//////////////////////////////////////////////
//    - Object.assign.
var obj1 = {
    fname : "Dhruv",
    lname : "Sharma"
};
var obj2 = {
    fname :"D",
    Age : 20,
    Gender : "Male"
};
console.log(obj1);
console.log(obj2);

var newobj = Object.assign({},obj1,obj2);

console.log(newobj);
console.log(obj1);
console.log(obj2);



////////////////////

// var str  = `This is First Line
//     This is Second Line
// `;

// console.log(str);