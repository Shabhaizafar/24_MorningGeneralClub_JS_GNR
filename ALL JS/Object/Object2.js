// Create a Empty Object 
// var myobj = {};



// var Person = {
//     lname : "Shah", 
//     fname : "Raj",
//     Gender : "Male",
//     Age : 12,
//     Address : "AMD"
// }


// // How to Access full Object
// console.log(Person);


// How to Access Property Value 
// console.log(Person.fname);
// console.log(Person["lname"]);


//How to Modify Property Value 

// Person.Age = 13;
// Person["Address"] = "GNR";
// console.log(Person);

/14-May/ 
//////////////////////////////////
// How to Add New Property in a Object 

// 1) dot Notation 

// Person.PhoneNo  = 1234567890;
// console.log(Person);

// 2) Bracket Notation 
// Person["Hobby"] = "Coding";
// Person["PhoneNo"] = 1234567890;
// console.log(Person);


//////////////////////////////////
// How to Remove Property

// 1) Dot Notation 
// delete Person.Address;
// console.log(Person);
// // 2) Bracket Notation 
// delete Person["Age"];
// console.log(Person);

// delete Person; //not valid
// console.log(Person);

/////////////////////////////////////
// - Iterate objects.
// var Person = {
//         lname : "Shah", 
//         fname : "Raj",
//         Gender : "Male",
//         Age : 12,
//         Address : "AMD"
//     }

// Not workable 
// for (const iterator of Person) {
//     console.log(iterator);
// }

// for (const key in Person) {
//     // console.log(key,Person.key);
//     console.log(key,Person[key]);
// }
///////////////////////////////////////////
// - Computed properties. []
// var key1 = "Fname";
// var key2 = "Lname";

// var value1 = "Raj";
// var value2 = "Patel";

// var Person = {
//     [key1] : value1,
//     [key2] : value2 
// }
// console.log(Person);
//////////////////////////////////////
// - Spread operator in objects.  [...]
// var Person = {
//         lname : "Shah", 
//         fname : "Raj",
//         Gender : "Male",
//         Age : 12,
//         Address : "AMD"
//     }

// var Person2 = {...Person};
// console.log(Person);
// console.log(Person2);

/////////////////////////////////////////////////
// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

//////////////////////////

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
//////////////////////////////////

// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
///////////////////////////////////

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

/////////////////////////////////////////////////////////////////////
// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.


// Ori = {
//     fname : "Raj",
//     lname : "Petal"
// }

// copyObj = {
//     Raj : "fname",
//     Patel :"Lname"
// }