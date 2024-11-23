// ### Useful String Methods
// 1. Use the `length` property to find the length of a string.
// console.log("Hello World!!,Welcome to JS World!!".length);

// 2. Convert a string to uppercase and lowercase.
// console.log("Hello World!!,Welcome to JS World!!".toLowerCase());
// console.log("Hello World!!,Welcome to JS World!!".toUpperCase());

// 3. Trim the whitespace from a string.
// console.log('.',"       Hello World!!,Welcome to JS World!!        ",'.');
// console.log('.',"       Hello World!!,Welcome to JS World!!        ".trim(),'.');
// console.log('.',"       Hello World!!,Welcome to JS World!!        ".trimStart(),'.');
// console.log('.',"       Hello World!!,Welcome to JS World!!        ".trimEnd(),'.');



// 4. Find the position of a substring within a string.
// console.log("Hello World!!,Welcome to JS World!!".indexOf('World'));
// console.log("Hello World!!,Welcome to JS World!!".lastIndexOf('World'));

// 5. Replace a part of a string with another string.
// console.log("Hello World!!,Welcome to JS World!!".replace('World','W'));
// console.log("Hello World!!,Welcome to JS World!!".replaceAll('World','W'));


// 6. Split a string into an array of words.
// console.log("Hello World!!,Welcome to JS World!!".split());
// console.log("Hello World!!,Welcome to JS World!!".split(''));
// console.log("Hello World!!,Welcome to JS World!!".split(' '));
// console.log("Hello World!!,Welcome to JS World!!".split('World'));


// 7. Concatenate two strings.
// console.log("Hello World!!,Welcome to JS World!!"+"Royal");
// console.log("Hello World!!,Welcome to JS World!!".concat("Royal"));


// 8. Check if a string starts with a specific substring.
// console.log("Hello World!!,Welcome to JS World!!".startsWith('H'));
// console.log("Hello World!!,Welcome to JS World!!".startsWith('Hello'));
// console.log("Hello World!!,Welcome to JS World!!".startsWith('hello'));
// console.log("Hello World!!,Welcome to JS World!!".startsWith('W'));


// 9. Check if a string ends with a specific substring.
// console.log("Hello World!!,Welcome to JS World!!".endsWith('hello'));
// console.log("Hello World!!,Welcome to JS World!!".endsWith('World'));
// console.log("Hello World!!,Welcome to JS World!!".endsWith('!'));


// 10. Repeat a string multiple times.
// for (let i = 0; i < 10; i++) {
//     console.log("Hello");
// }

// console.log(18==18);
// console.log(18===18===1);

// ------------------------

// ### Template Strings
// 1. Use template strings to print a message that includes variables.
var fname = "Dhruv";
var newA = "Sharma";
// console.log(`Hello ${fname} ${newA}`);

// 2. Create a multi-line string using template strings.
// console.log(`Hello ${fname} ${newA}\nHello ${fname} ${newA}`);
// var s =  `
// wert
// qwer
// wer
// `;
// console.log(s);




// 3. Use template strings to create a formatted address from separate variables.
// var hno = 50;
// var soc = "Pramukh Tengent"
// var locations = "GNR";
// var nation = "India";
// console.log(`${hno},${soc},
// ${locations},
// ${nation}.`);

// 4. Write a function that takes a name and age and returns a greeting message using template strings.
// function All(name,age){
//     return `Hello ${name},Your Age is ${age}.`;
// }
// console.log(All("Dhruv",1));
// 5. Use template strings to create an HTML snippet.
// console.log(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//     <!-- <script src="Console.js"></script> -->
//     <!-- <script src="BasicAll.js"></script> -->
//     <script src="Basic2.js"></script>
// </body>
// </html>
// `);

// -------------------------------------------

// ### `null`, `undefined`, `BigInt`, `typeof`
// 1. Declare variables with `null` and `undefined` values and check their types using `typeof`.
// var n = null;
// var n2 = undefined;
// console.log(n,typeof n);
// console.log(n2,typeof n2);

// 2. Create a `BigInt` and perform an operation with it.
// var n1 = BigInt(1);
// var n2 = 2;
// console.log(n1);
// console.log(n2);

// console.log(n1+BigInt(n2));

// 3. Write a function that checks the type of a variable and returns a string describing its type.
// function All(n){
//     return `${(n)}`;
// }
// console.log(All(1n));
// console.log(typeof(All(1n)));



// 4. Declare a variable without assigning a value and check if it is `undefined`.
// var n1;
// console.log(n1,typeof n1);

// 5. Compare `null` and `undefined` using `==` and `===`.
console.log(null==undefined);
console.log(null===undefined);


// ### Booleans and Comparison Operators
// 1. Declare two boolean variables and use comparison operators to compare them.
// 2. Write expressions using `==`, `===`, `!=`, and `!==` operators.
// 3. Use the `<`, `>`, `<=`, and `>=` operators to compare numbers.
// 4. Write a function that checks if a number is between two other numbers.
// 5. Compare strings using comparison operators and explain the results.

// ### Truthy and Falsy Values
// 1. Write a function that takes a value and returns whether it is truthy or falsy.
// 2. List out different values that are considered falsy in JavaScript.
// 3. Write a function that takes an array of values and returns an array of truthy values.
// 4. Check the truthiness of an empty object and an empty array.
// 5. Use a truthy value in an `if` statement to print a message.

// //////////////////////////////////////////////////
// ### Useful String Methods
// 1. Use `substring` to extract a part of a string.
// 2. Use `slice` to create a new string from the 3rd to the 7th character.
// 3. Use `includes` to check if a string contains a specific word.
// 4. Use `split` to convert a string into an array of words and print the array.
// 5. Use `join` to convert an array of words back into a string and print it.
// 6. Use `charAt` to get the character at a specific index in a string.
// 7. Use `indexOf` to find the position of the first occurrence of a substring.
// 8. Use `lastIndexOf` to find the position of the last occurrence of a substring.
// 9. Use `repeat` to repeat a string multiple times and print the result.
// 10. Use `search` to find the position of a substring using a regular expression.

// ### Template Strings
// 1. Create a template string that includes your name and age.
// 2. Use template strings to concatenate two strings.
// 3. Create a multi-line template string with a quote on each line.
// 4. Write a function that takes a first name and last name and returns a full name using template strings.
// 5. Use template strings to create a sentence that includes the length of a string.

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
