// - Function declarations are hoisted  
// All();

// function All(){
//     console.log("Hello !!");
// }



// All();
// var All = ()=>{
//     console.log("Hello !!");
// }


// console.log(a);
// const a = 12;

//var ,let ,const are hoisted    : not defined / not function 
////////////////////////////////////////////////////////////

//    - Function inside function.
// function Main(){
//     function innerfu(){
//         console.log("Inner");
//     }
//     innerfu();
//     console.log("Main");
// }
// Main();
//////////////////////////////////////////////////////////////
//    - Lexical Scope.

// var n1 = 12;
// function Main(){
//     var n1 = 100;
//     function innerfu(){
//         console.log(n1);
//     }
//     innerfu();
//     console.log(n1);
// }
// Main();
//    - Block Scope Vs Function Scope.

// {
//     // let a = "12";  //const 
//     var a = "12";  

//     console.log(a);
// }

// console.log(a);


// function All(){
//     var a  = 12;
//     console.log(a);
// }
// All();
// console.log(a);


/////////////////////////////////////////////////////////////////
//    - Default Parameters.

// function All(n1,n2=0){  // n1,n2 parameter    //n2 = default parameter
//     console.log(n1+n2);
// }
// All(12,13); // 12,13 Arg
// All(12);

//////////////////////////////////////////////
//    - Rest Parameters.

// function All(n1,n2,...restpara){
//     console.log(n1,n2);
//     console.log(restpara);
// }
// All(12,13,14,15,16,17,18);

///////////////////////////////////////////////
//    - Parameter Destructuring.

// function All(n1,n2,...restpara){
//     console.log(n1,n2);
//     console.log(restpara);
//     var [v1,v2] = restpara;  // destructuring
//     console.log(v1,v2);
// }
// All(12,13,14,15,16,17,18);


// function add(...Arr){
//     var sum=0;
//     for (const iterator of Arr) {
//         sum+=iterator;
//     }
//     console.log(sum);
// }
// add(1,2,3,4,5,6,7,8,9,10);

/////////////////////////////////////////////////
//    - Very brief intro to callback functions(covered in great detail  later).
// function temp(){
//     console.log("temp");
// }

// function All(callback){
//     callback();
// }
// All(temp);

/////////////////////////////////////////////////
//    - Functions returning Functions.
//Higher Order Function

// function Main(){
//     var choice = prompt("1) num \n2) str \n Enter your Choice : ");
//     switch(choice){
//         case "num" : numbers();
//                     break;
//         case "str" : strings();
//                     break;
//         default : console.log("Enter Valid Choice!!!!!");
//     }
// }
// Main();

// function numbers(){
//     var n1 = +prompt("Enter the Value of N1 :");
//     var n2 = +prompt("Enter the Value of N2 :");
//     var choice = prompt("1) add for Addition \n2)sub for subtraction  \n\nENter Your Choice : ");
//     switch(choice){
//         case "add" : add(n1,n2);
//                     break;
//         case "sub" : sub(n1,n2);
//                     break;
//         //mul
//         //div
//         //mod
//         default : console.log("Enter Valid Choice!!!!!");
//     }
// }

// function strings(){
//         //two string 
//         //1 concationation
//         //2 uppercase 
//         //3 lower case
// }
// function add(a,b){
//         console.log(`Addition of  ${a} and ${b} : `,a+b);
// }
// function sub(a,b){
//         console.log(`Subtraction of  ${a} and ${b} : `,a-b);
// }


////////////////////////////////////////////
// => Very Important Array Methods :-    //function

// var Arr = [12,11,14,17,19,15,18,20];
// console.log(Arr);

// for 
// for in 
// for of 

//    - Foreach method.
// var Ans = Arr.forEach(
//     (v,i,a)=>{   //v value      i = index    a = arr
//         // if(v>15 && i<4)
//         //     {
//         //         console.log(v,i,a);
//         //     }
//         return 12;
//     });

//     console.log(Ans);



// var Arr = [12,11,14,17,19,15,18,20];
// var Arr = [11,111,10001,100001,100010000,1001];
// console.log(Arr);
// Arr.sort();

// Arr.sort((a,b)=>{
//     return b-a;
// });


// console.log(Arr);

//    - Sort.

// var Arr = ["Zafar","Raj","Ajay","Rakesh"];
// console.log(Arr);
// Arr.sort((a,b)=>{
//     return b.length-a.length;
// });
// console.log(Arr);



// var Arr = [12,11,14,17,19,15,18,20];
// console.log(Arr);
// var Ans = Arr.every((a)=>{
//     return a<=20;
// });
// console.log(Ans);

//    - Every.
//    - Some.
// var Arr = [12,11,14,17,19,15,18,20];
// console.log(Arr);
// var Ans = Arr.some((a)=>{
//     return a<1;
// });
// console.log(Ans);