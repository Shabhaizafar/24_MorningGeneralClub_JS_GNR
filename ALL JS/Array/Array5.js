// // use const for creating arrays.


// // const Arr1 = [1,2,3];
// // console.log(Arr1);


// // Arr1.push(100);

// // delete Arr1[2];
// // console.log(Arr1);
// ///////////////////////////////////
// // Array destructuring:
//     // - 


// // const Arr = [1,2,3,4,5,6,7,8,9];
// // console.log(Arr);
// // // var v1 = Arr[0];
// // // var v2 = Arr[1];
// // // console.log(v1);

// // var [v8,v2,,v4] = Arr;

// // console.log(v8);
// // console.log(v2);
// // console.log(v4);
// //////////////////////////////////////////////////////
// //1) Wap to check whether an `input` is an array or not.
// // Test Data :
// // 'w3resource'
// // [1, 2, 4, 0]
// // output
// // false
// // true

// ///////////////////////////////////
// // 2. Write a JavaScript function to clone an array.
// // Test Data :
// //[1, 2, 4, 0]
// //[1, 2, [4, 0]]
// // output
// // [1, 2, 4, 0]
// // [1, 2, [4, 0]]

// ////////////////////////////////////////////

// // 3. We have the following arrays :
// // color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// // o = ["th","st","nd","rd"]
// // Write a JavaScript program to display the colors in the following way :
// // Output 
// // "1st choice is Blue ."
// // "2nd choice is Green."
// // "3rd choice is Red."
// // "4th choice is Orange."
// // - - - - - - - - - - - - -
// // Note : Use ordinal numbers to tell their position.
// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ","Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow ",];
// var o = ["th","st","nd","rd"];

// for (let i = 0; i < color.length; i++) {
//     // console.log(String(i+1).slice(String(i+1).length-1),typeof String(i+1));

//     if(String(i+1).slice(String(i+1).length-1) == 1)
//     {
//         console.log(`${i+1}${o[1]} choice is ${color[i]}`);
//     }
//     else if(String(i+1).slice(String(i+1).length-1) == 2)
//     {
//         console.log(`${i+1}${o[2]} choice is ${color[i]}`);
//     }
//     else if(String(i+1).slice(String(i+1).length-1) == 3)
//     {
//         console.log(`${i+1}${o[3]} choice is ${color[i]}`);
//     }
//     else
//     {
//         console.log(`${i+1}${o[0]} choice is ${color[i]}`);
//     }
// }


// /////////////////////////////////////////////////////

// // 4) wap to sort an array 
// // array  : [2,3,4,5,6,7,1,3,5,63];
// //assending  