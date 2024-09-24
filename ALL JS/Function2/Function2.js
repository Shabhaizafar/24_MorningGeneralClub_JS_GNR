// - Function declarations/Function Name are hoisted  (covered in great detail  later).


// console.log(n1);

// const n1 = 12;

// All();

// function All() {
//     console.log("All");
// }


// All();

// let All = function (){
//     console.log("All");
// }

//    - Function inside function.
// function All(){
//     function inner(){
//         console.log("Inner 1");
//     }
//     inner();
//     console.log("Main function");
// }
// All();


//    - Lexical Scope.
let n1 = 12;
function All(){
    const n1 = 13;
    function inner1(){
        console.log(n1);  //undefined //13
    }
    inner1();
    console.log(n1); // 13
}
All();








////////////////////////////////////////////
// 1. **Function Declarations are Hoisted:**
//    - Explain what is meant by "hoisting" in JavaScript function declarations.
//    - Write code to demonstrate the hoisting behavior of function declarations.
//    - Discuss any potential pitfalls or unexpected behaviors related to function hoisting.

// 2. **Function Inside Function:**
//    - Define and explain the concept of nested functions in JavaScript.
//    - Provide examples of nested functions and explain their advantages and disadvantages.
//    - Discuss how nested functions relate to closure and scope in JavaScript.

// 3. **Lexical Scope:**
//    - Define lexical scope and contrast it with dynamic scope.
//    - Give an example that illustrates lexical scope in JavaScript.
//    - Discuss how lexical scope affects variable visibility and function execution in different contexts.`1
