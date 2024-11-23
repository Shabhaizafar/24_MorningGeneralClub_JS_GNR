//    - Block Scope Vs Function Scope.
// {
//     var a = 12;
//     let b = 13;
//     const c = 14;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// function All(){
//     var a = 12;
//     let b = 13;
//     const c = 14;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// All();
// console.log(a);
//     console.log(b);
//     console.log(c);
////////////////////////////////////////////////////
//    - Default Parameters.

// function All(n1,n2=0){   //n2 = 0    default parameter
//     console.log(n1+n2);
// }
// All(12,13);
////////////////////////////////////
//    - Rest Parameters.

// function All(n1,n2,n3,...restparameter){
//     console.log(n1,n2,n3);
//     console.log(restparameter);
// }
// All(12,13,14,15,16,17,18);



// function All(...parameter){
//     var sum=0;
//     for (const iterator of parameter) {
//         sum+=iterator;
//     }
//     console.log(sum);
// }
// All(1,2,3,4,5,6,7,8,9,10);
////////////////////////////////////



// ### Block Scope vs Function Scope:
// 1. **Question:**
//    Write a JavaScript function `scopeExample` that demonstrates the difference between block scope and function scope. Inside `scopeExample`, declare a variable `varVariable` using `var` and another variable `letVariable` using `let`. Try to access these variables outside their respective scopes (inside and outside an `if` block) and observe the results.

// ### Default Parameters:

// 2. **Question:**
//    Create a function `greet` that takes a `name` parameter with a default value of `'Guest'`. The function should log a greeting message using the provided name. Test the function with different arguments to see how the default parameter works.

// ### Rest Parameters:

// 3. **Question:**
//    Write a function average that uses a rest parameter to accept any number of arguments (numbers) and calculates their average. Return the average as a floating-point number rounded to two decimal places. Test the function with different numbers of arguments and ensure it calculates the average correctly.