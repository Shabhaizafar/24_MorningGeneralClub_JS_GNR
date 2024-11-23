// ### Booleans and Comparison Operators
// 1. Declare two boolean variables and use comparison operators to compare them.
// var b1 = true;
// var b2 = false;
// console.log(b1==b2);   //false
// console.log(b1!=b2);   //true


// 2. Write expressions using `==`, `===`, `!=`, and `!==` operators.
// var b1 = 12;
// var b2 = "12";
// console.log(b1==b2);  //true
// console.log(b1!=b2);  //false
// console.log(b1===b2); //false
// console.log(b1!==b2); //true

// 3. Use the `<`, `>`, `<=`, and `>=` operators to compare numbers.
// var n1 = 13;
// var n2 = 11;
// console.log(n1<n2); //false
// console.log(n1>n2); //true
// console.log(n1<=n2); //false
// console.log(n1>=n2); //true

// 4. Write a function that checks if a number is between two other numbers.
// function All(n){
//     if(n>10 && n<30)
//         {
//             console.log("Number beteen 10 to 30");
//         }
// }
// All(199);

// 5. Compare strings using comparison operators and explain the results.
// console.log("Royal"=="Royals");



// ### Truthy and Falsy Values
// 1. Write a function that takes a value and returns whether it is truthy or falsy.

// function All(v){
//     return Boolean(v);
// }
// console.log(All(12n));

// 2. List out different values that are considered falsy in JavaScript.
// function All(Arr){
//     var tempArr = [];
//     for (const iterator of Arr) {
//         if(!Boolean(iterator))
//             {
//                 tempArr.push(iterator);
//             }
//     }
//     console.log(tempArr);
// }
// All([1,2,3,4,false,"",NaN,"asdf",undefined]);

// 3. Write a function that takes an array of values and returns an array of truthy values.

// function All(Arr){
//     var tempArr = [];
//     for (const iterator of Arr) {
//         if(Boolean(iterator))
//             {
//                 tempArr.push(iterator);
//             }
//     }
//     console.log(tempArr);
// }
// All([1,2,3,4,false,"",NaN,"asdf",undefined]);

// 4. Check the truthiness of an empty object and an empty array.

// var obj = [1];
// var cont=0;
// for (const key in obj) {
//     cont++;
// }
// if(cont==0)
//     {
//         console.log("Is Empty");
//     }

// 5. Use a truthy value in an `if` statement to print a message.
// if([]){
//     console.log("Hello");
// }

// --------------------------------
// ### `null`, `undefined`, `BigInt`, `typeof`
// 1. Declare a variable without initializing it and check if it is `undefined`.
// 2. Assign `null` to a variable and check its type using `typeof`.
// 3. Create a `BigInt` and use it in an addition operation with another `BigInt`.
// 4. Write a function that takes any value and returns its type.
// 5. Compare `null` and `undefined` using strict equality and explain the result.
// 6. Declare a variable using `BigInt` and multiply it by another `BigInt`.
// 7. Write a function that returns `null` and check its type.
// 8. Compare `null` with `0` and explain the result.
// 9. Declare a variable with `undefined` and try to add it to a number.
// 10. Use `typeof` to check the type of an array, object, and function.

// ### Booleans and Comparison Operators
// 1. Write a function that takes two numbers and returns `true` if the first is greater than the second.
// 2. Use `==` and `===` to compare `42` and `"42"`.
// 3. Write a function that takes two strings and returns `true` if they are equal.
// 4. Use `!=` and `!==` to compare `0` and `false`.
// 5. Write a function that checks if a number is within a range (10 to 20) using comparison operators.
// 6. Compare two boolean values using `==` and `===`.
// 7. Write a function that checks if a string contains only uppercase letters.
// 8. Use `<`, `<=`, `>`, and `>=` to compare two numbers and print the results.
// 9. Compare two arrays using `==` and `===` and explain the result.
// 10. Write a function that checks if a variable is a boolean using comparison operators.


// ///////////////////////////////////////////////
