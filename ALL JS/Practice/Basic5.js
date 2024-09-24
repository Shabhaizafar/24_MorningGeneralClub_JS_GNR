// ### If Else Statement
// 1. Write a program that uses an `if-else` statement to check if a number is positive, negative, or zero.
// var n=1;
// if (n>0) {
//     console.log("positive");
// } 
// if(n==0){
//     console.log("Zero");
// }
// if(n<0){
//     console.log("negative");
// }

// 2. Create a function that checks the age and prints whether the person is a minor or an adult.
// function All(age){
//     if(age>=18)
//         console.log("adult");
//     else
//         console.log("minor");
// }
// All(108);

// 3. Write an `if-else` statement that checks if a string is empty or not.
// var str = "";
// if(str.length)
//     console.log("Not Empty");
// else
//     console.log("Empty");

// 4. Use an `if-else` statement to print whether a number is even or odd.
// if(n%2==0)
//     console.log("Even");
// else
//     console.log("Odd");

// 5. Write a function that takes a score and prints the corresponding grade (A, B, C, D, F).
// var n = 92;
// if(n>=95)
//     console.log("A");
// if(n>=75 && n<95)
//     console.log("B");
// if(n>=60 && n<75)
//     console.log("C");
// if(n>=35 && n<60)
//     console.log("D");
// if(n<35)
//     console.log("F");


// ### Ternary Operator
// 1. Rewrite the age-checking function using a ternary operator.
// var Age = 19;
// var isvote = (Age>=18)?  true  : false;
// console.log(isvote)

// 2. Use a ternary operator to check if a number is even or odd.
// (11%2==0) ? 
// console.log("even")
// : 
// console.log("Odd");

// 3. Create a function that returns "Yes" if a number is positive and "No" if it is not, using a ternary operator.
// function All(n){
//     var ans = (n>0)? "Yes" : "No";
//     return ans;
// }
// console.log(All(0));

// 4. Use a ternary operator to assign a default value to a variable if another variable is `null` or `undefined`.
// var n = 12345;
// var n2 = (!n)? 12 : undefined;
// console.log(n2);

// 5. Write a function that takes a boolean value and returns "True" or "False" using a ternary operator.
// function All(v){
//     var v = (v) ? v : v;
//     return v;
// }
// console.log(All(false));

// ### `&&` and `||` Operator
// 1. Write a program that checks if a number is between 10 and 20 using `&&`.
// var n = 122;
// if(n>=10 && n<=20)
//     console.log("Yes")
// 2. Create a function that returns `true` if either of two conditions is met using `||`.
// function All(n){
//     if(n<100 || n!=0)
//         return true;
// }
// console.log(All(101));

// 3. Use `&&` to check if a string is not empty and its length is greater than 5.
// var str = "Royal A";
// if(str.length!=0 && str.length>5)
//     console.log(str)

// 4. Write a function that checks if a number is positive and even using `&&`.
// function All(n){
//     if(n>0 && n%2==0)
//     {
//         console.log(n);
//     }
// }
// All(7);

// 5. Use `||` to provide a default value for a variable if it is falsy.
// var v = 0 || false;
// console.log(v);


// --------------------------------------
### If Else Statement
1. Write a function that checks if a number is positive, negative, or zero.
2. Use `if-else` to check if a string contains more than 10 characters.
3. Write a function that checks if a person is eligible to vote based on their age.
4. Use `if-else` to print whether a number is a multiple of 3.
5. Write a function that checks if a value is `null` or `undefined`.
6. Use `if-else` to check if a number is even or odd.
7. Write a function that takes a temperature in Celsius and prints a message if it is above 30 degrees.
8. Use `if-else` to check if a number is within a specific range.
9. Write a function that checks if a password is strong (contains at least 8 characters, including numbers and special characters).
10. Use `if-else` to print a message based on the value of a boolean variable.

### Ternary Operator
1. Rewrite a function that checks if a number is even or odd using a ternary operator.
2. Use a ternary operator to assign a value to a variable based on a condition.
3. Write a function that returns a default value if a given value is `null` or `undefined` using a ternary operator.
4. Use a ternary operator to check if a string is empty and return a message.
5. Write a function that takes a score and returns "Pass" or "Fail" using a ternary operator.
6. Use a ternary operator to set a variable to `true` if a number is positive, otherwise `false`.
7. Rewrite an `if-else` statement that checks if a number is within a range using a ternary operator.
8. Use a ternary operator to print a message based on the value of a boolean variable.
9. Write a function that returns the larger of two numbers using a ternary operator.
10. Use a ternary operator to format a string based on a condition.

### `&&` and `||` Operator
1. Write a function that checks if a number is within a range (10 to 20) using `&&`.
2. Use `||` to set a default value for a variable if another variable is falsy.
3. Write a function that returns `true` if either of two conditions is met using `||`.
4. Use `&&` to check if a string is not empty and its length is greater than 5.
5. Write a function that checks if a number is positive and even using `&&`.
6. Use `||` to provide a fallback value for a variable if it is `null` or `undefined`.
7. Write a function that checks if a user is logged in and has the required permissions using `&&`.
8. Use `||` to print a message if a variable is falsy.
9. Write a function that returns `true` if a number is either negative or greater than 100 using `||`.
10. Use `&&` to combine multiple conditions in an `if` statement.
