// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
// Ori = {
//     fname : "Raj",
//     lname : "Petal"
// }

// copyObj = {
//     Raj : "fname",
//     Patel :"Lname"
// }


// var myobj = {
//         fname : "Raj",
//         lname : "Patel"
// }
// var copyobj ={};
// console.log(myobj);
// for (const key in myobj) {
//    copyobj[myobj[key]] = key;
// }
// console.log(copyobj);
// --------------------------------------------
// - Object Destructuring.
// var Arr  = [1,2,3,4,5,6];
// console.log(Arr);
// var [,v1,v3,...newArr] = Arr;
// console.log(v1,v3);
// console.log(newArr);

// var myobj = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12 ,
//     Gender : "Male",
//     Numbers : 1234567890
// }
// console.log(myobj);
// // console.log(myobj.fname);
// var {fname:firstname,Age,...newobj} = myobj;
// console.log(Age);
// console.log(newobj);

//////////////////////////////////
// - Objects inside Array.

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
//    console.log(...library);

// for (const iterator of library) {
//     console.log(iterator);
// }
// for (let i = 0; i < library.length; i++) {
//     console.log(library[i]);
// }

// Arrays inside Object: 
// var myobj = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12 ,
//     Gender : "Male",
//     Numbers : 1234567890,
//     Hobbies : ["cricket","Coding","Sleeping"]
// }
// // console.log(...myobj.Hobbies);

// for (const iterator of myobj.Hobbies) {
//     console.log(iterator);
// }

///////////////////////////////////////////
// - Nested Destructuring.

// var myobj = {
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12 ,
//     Gender : "Male",
//     Numbers : 1234567890,
//     Address : {
//         city : "AMD",
//         state : "Guj",
//         nation : "IND"
//     }
// }
// console.log(myobj.Address.state);

// var {Address:{state:Rajya}} = myobj;
// console.log(Rajya);

// ////////////////////////////////////////////////
