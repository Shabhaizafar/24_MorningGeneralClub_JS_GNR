// // 1. Creating an Object
// // 1)  using object literal 
// var obj = {};
// // console.log(obj,typeof obj);

// // 2) using Object Constructor : 
// // var obj = new Object();
// // console.log(obj,typeof obj);

// // 3) using create Method :
// // var obj = Object.create({});
// // console.log(obj,typeof obj);



// // 2. Adding Properties to an Object
// //dot notation
// obj.Fname = "Raj";
// console.log(obj);
// //bracket Notation 
// obj["Lname"] = "Patel";
// console.log(obj);


// // 3. Modifying Object Properties
// //dot notation
// obj.Fname = "Ajay";
// console.log(obj);
// //bracket Notation 
// obj["Lname"] = "Shah";
// console.log(obj);

// // 4. Deleting Properties from an Object
// //dot notation
// // delete obj.Fname;
// // console.log(obj);
// // //bracket Notation 
// // delete obj["Lname"];
// // console.log(obj);

// // 5. Looping Through Object Properties  (for-in loop)
// for (const key in obj) {
//     // console.log(key);
//     // bracket 
//     // console.log(key,obj[key]);

//     // dot notation doesn't working 
//     // console.log(key,obj.key);
// }




// // 6. Checking Property Existence
// const Person = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// }
// var finder  = "fname";
// var flag = 1;

// for (const key in Person) {
//     if(key==finder)
//     {
//         console.log("Property Exist");
//         flag = 0;
//     }
// }
// if(flag){
//     console.log("Property Doesn't Exist.");
// }

// // 7. Copying an Object
// const Person = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// }
// var obj2 = Person;
// console.log(Person);
// console.log(obj2);


// // 8. Merging Objects
// const Person1 = {
//     fname : "Raj",
//     lname : "Patel"
// }
// const Person2 = {
//     Age : 12,
//     Gender : "Male"
// }

// var Person3 = {...Person1,...Person2};
// console.log(Person3);

// // // 9. Retrieving Object Keys
// const Person1 = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12,
//     Gender : "Male"
// };
// for (const key in Person1) {
//     console.log(key);
// }

// // // 10. Retrieving Object Values

// for (const key in Person1) {
//     console.log(Person1[key]);
// }






// 6. Checking Property Existence
// Checking Existence of a Property
// Implement code to check if a specified property exists in an object without using built-in methods like in or hasOwnProperty().
// 7. Copying an Object
// Creating a Shallow Copy of an Object
// Write code to create a shallow copy of an object (Person) without simply assigning (var obj2 = Person;).
// 8. Merging Objects
// Merging Two Objects
// Implement code to merge properties from two objects (Person1 and Person2) into a new object (Person3) without using the spread operator (...).

// const Person1 = {
//     fname : "Raj",
//     lname : "Patel"
// }
// const Person2 = {
//     Age : 12,
//     Gender : "Male"
// }
// const MergeObj = {};
// for (const key in Person1) {
//         MergeObj[key]=Person1[key];
// }

// for (const key in Person2) {
//     MergeObj[key]=Person2[key];
// }
// console.log(MergeObj);
// 9. Retrieving Object Keys
// Retrieving Keys of an Object
// Write code to retrieve and log all keys of an object (Person1) using a loop (for...in).
// 10. Retrieving Object Values
// Retrieving Values of an Object
// Implement code to retrieve and log all values of an object (Person1) using a loop (for...in).