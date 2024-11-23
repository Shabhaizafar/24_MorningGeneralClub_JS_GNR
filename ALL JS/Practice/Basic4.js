// ### Truthy and Falsy Values
// 1. Write a function that returns `true` if a given value is truthy.
// function All(n){
//     if(Boolean(n))
//     {
//         return true;
//     }
// }
// console.log(All("sdfg"));

// 2. List all falsy values in JavaScript.
//  -> false ,0, "" , NaN,undefined ,null

// 4. Check the truthiness of an empty string and print the result.
// console.log(Boolean(""));

// 5. Write a function that takes a value and returns a default value if it is falsy.
// function All(n){
//     if(!Boolean(n))
//     {
//         return n;
//     }
// }
// console.log(All(null));

// 6. Check the truthiness of `0` and print the result.
// console.log(Boolean(0));

// 7. Use an `if` statement to print a message only if a variable is truthy.

// if(12)
//     console.log("variable is truthy");

// 8. Write a function that checks if an object is empty (has no properties).
// var count = 0;
// for (const key in {fname : "Raj"}) {
//         count++;
//     }
// if(count==0)
//     console.log("Object is Empty");

// 9. Check the truthiness of `NaN` and print the result.
//false

// 10. Use logical `||` to assign a default value to a variable if another variable is falsy.

// var n1 = 0;
// var n2 = 0;

// if(n1 || n2){
//     if(!n1)
//         n1 = true;
//     if(!n2)
//         n2 = true;
// }

// console.log(n1,n2);



// ### If Else Statement
// 1. Write a function that checks if a number is positive, negative, or zero.
// 2. Use `if-else` to check if a string contains more than 10 characters.
// 3. Write a function that checks if a person is eligible to vote based on their age.
// 4. Use `if-else` to print whether a number is a multiple of 3.
// 5. Write a function that checks if a value is `null` or `undefined`.
// 6. Use `if-else` to check if a number is even or odd.
// 7. Write a function that takes a temperature in Celsius and prints a message if it is above 30 degrees.
// 8. Use `if-else` to check if a number is within a specific range.
// 9. Write a function that checks if a password is strong (contains at least 8 characters, including numbers and special characters).
// 10. Use `if-else` to print a message based on the value of a boolean variable.



### Truthy and Falsy Values
1. Write a function that takes a value and returns whether it is truthy or falsy.
2. List out different values that are considered falsy in JavaScript.
3. Write a function that takes an array of values and returns an array of truthy values.
4. Check the truthiness of an empty object and an empty array.
5. Use a truthy value in an `if` statement to print a message.