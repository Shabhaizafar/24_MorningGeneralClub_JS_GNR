// ### Hello World Program
// 1. Write a program to print "Hello, World!" to the console.
// console.log("Hello World!!");

// 2. Modify the "Hello, World!" program to include your name in the greeting.
// var fname = "Himesh";
// console.log("Hello World!!".slice(0,6)+fname);

// 3. Print "Hello, Universe!" to the console.
// console.log("Hello, Universe");


///////////////////////////////////////////////////////////
// ### Declare Variable Using `var`
// 1. Declare a variable using `var` and assign it a value. Reassign the value and print it.
// var value1;
// value1 = 12;
// console.log(value1);
// value1 = 15;
// console.log(value1);

// 2. Declare two `var` variables and swap their values.
// var v1 = 12;
// var v2 = 13;
// console.log("Before swap : ",v1,v2);
// var temp = v1;
// v1=v2;
// v2=temp;
// console.log("After swap : ",v1,v2);

// 3. Declare a `var` variable, reassign it within a function, and print it both inside and outside the function.
// var v1 = 12;
// console.log("Value1 Before Function :",v1);
// function All(){
//     v1=13;
//     console.log("Value1 inner Function :",v1);
// }
// All();
// console.log("Value1 After Function :",v1);

// /////////////////////////////////////////////////////////////////
// ### More About Variables
// 1. Declare variables using `var`, `let`, and `const`. Assign each a different value and print them.
// var v1 = 12;
// let v2 = 13;
// const v3 = 14;
// console.log(v1);
// console.log(v2);
// console.log(v3);

// 2. Try reassigning a `const` variable and observe the error.
// v3 = 100;
// Uncaught TypeError: Assignment to constant variable.


// 3. Declare a `let` variable inside a block and print it outside the block.
// {
//     let v1 = 13;
//     console.log(v1);
// }
// console.log(v1);   //Uncaught ReferenceError: v1 is not defined

// 4. Create a `const` object and modify one of its properties.
// const obj = {
//     fname : "Raj",
//     lname: "Shah"
// };
// console.log(obj);
// obj.fname = "Ajay";
// obj['lname'] = "Patel";

// console.log(obj);


// 5. Declare a `let` variable, reassign it within a loop, and print it both inside and outside the loop.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);


// -----------------------------

// ### Hello World Program
// 1. Write a program to print "Hello, JavaScript!" to the console.
// 2. Modify the "Hello, World!" program to include your favorite quote.
// 3. Create a function that returns "Hello, Function!" and print its result.
// 4. Write a program to print "Hello, [Your City]!" to the console.
// 5. Print "Welcome to JavaScript programming!" to the console.

// ### Declare Variable Using `var`
// 1. Declare a `var` variable and initialize it with a number. Print the variable.
// 2. Declare a `var` variable and initialize it with a boolean. Print the variable.
// 3. Declare a `var` variable, initialize it with a string, and then change it to a number. Print the variable.
// 4. Declare multiple `var` variables in a single statement and print them.
// 5. Declare a `var` variable inside a function and print it both inside and outside the function.

// ### More About Variables
// 1. Declare a variable using `var` inside a function and print it outside the function.
// 2. Declare a variable using `let` inside a loop and print it outside the loop.
// 3. Declare a variable using `const` and try to change its value within a block scope.
// 4. Create an object with `const` and add a new property to it.
// 5. Declare a variable using `var` and try to redeclare it using `let` in the same scope.
//------------------------------------------------------------------
/13-06/ 
// ### `let`
// 1. Declare a variable using `let`, assign it a value, then change the value.
// let n1;
// n1 = 12;
// console.log(n1);
// n1 = 13;
// console.log(n1);

// 5. Use a `let` variable to hold a counter in a while loop and print the counter value after the loop.
// let counter = 0;
// var i = 1;
// while(i<5) 
// {
//     counter = i;
//     i++;
// }
// console.log(counter);  


// ### `const`

// 2. Declare an array or object with `const` and modify its contents.
// const Arr = [1,2,3,4,5,6];

// Arr[0] = 100;
// console.log(Arr);
// 3. Create a `const` object with nested properties and modify one of the nested properties.
// const obj = {
//     fname : "Raj",
//     Address : {
//         city : "GNR",
//         nation : "India"
//     }
// }
// obj.Address.city = "AMD";
// obj["Address"].city = "AMD";
// obj.Address['city'] = "AMD";
// obj['Address']['city'] = "AMD";

// console.log(obj.Address.city);

// 4. Declare a `const` variable inside a function and try reassigning it inside the function.
// function All(){
//     const n1 = 12;
//     // n1++;
// }
// All();
// 5. Use `const` to declare a configuration object and access its properties in different functions.


// function All(){
//     const obj = {
//         fname : "Raj",
//         Address : {
//             city : "GNR",
//             nation : "India"
//         }
//     }
    
//     console.log(obj.fname);
// }
// All();

// ### String Indexing
// // 1. Create a string and access each character using its index.
// var str = "Royal";
// for (const key in str) {
//     console.log(key,str[key]);
// }
// 2. Write a function that returns the first and last character of a string.

// function All(str){
//     return str[0]+str[str.length-1];
// }
// console.log(All("Royal"));

// 3. Access the middle character of a string.
// function All(str){
//     return str[Math.floor((str.length-1)/2)];
// }
// console.log(All("Royal"));

// 4. Write a function that takes a string and an index and returns the character at that index.
// function All(str,i){
//     return str[i];
// }
// console.log(All("Royal",10));
// 5. Iterate through a string and print each character on a new line.
// for (const iterator of "Royal") {
//     console.log(iterator);
// }

// /////////////////////////////////

// ### `let`
// 1. Declare a `let` variable and initialize it with your age. Print the variable.
// 2. Declare a `let` variable and initialize it with the current year. Print it and then update it to next year.
// 3. Use a `let` variable inside a `for` loop to count from 1 to 5.
// 4. Declare a `let` variable inside an `if` block and try to access it outside the block.
// 5. Use `let` to declare a variable that holds an array and modify the array.

// ### `const`
// 1. Declare a `const` variable and initialize it with a string. Print the variable.
// 2. Create a `const` array and add new elements to it.
// 3. Declare a `const` object and change one of its properties.
// 4. Use `const` to declare a variable that holds the result of a mathematical operation.
// 5. Declare a `const` variable in a function and print it.

// ### String Indexing
// 1. Write a function that returns the second character of a string.
// 2. Access and print the last character of a string using its index.
// 3. Create a string and use a loop to print each character on a new line.
// 4. Write a function that takes a string and an index and returns the character at that index, handling out-of-bounds indices.
// 5. Write a function that reverses a string using indexing.
