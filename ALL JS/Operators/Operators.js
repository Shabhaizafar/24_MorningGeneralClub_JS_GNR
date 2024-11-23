//Arithmatic/unary (inc/dec)
// +,-,*,/,%,++,--

var n1 = 12;
var n2 = 3;
// console.log("n1",n1);
// console.log("n2",n2);

// console.log("Add",n1+n2);
// console.log("Sub",n1-n2);
// console.log("Mul",n1*n2);
// console.log("Div",n1/n2);
// console.log("Mod",n1%n2);
// console.log("Inc",n1++); // first Assign n1   then n1=n1+1
// console.log("Inc",n1);
// console.log("Inc",++n1);// First n1 = n1+1 then Assign n1

// console.log("Dec",n2--);
// console.log("Dec",n2);
// console.log("dec",--n2);

//Assignment 
// var n1 = 12.8;
// var n2 = 3;
// // // =,+=,-=,*=,/=,%=
// // console.log("=",n1=14);  // 14 
// // console.log("+=",n1+=n2);// 17  
// // console.log("-=",n1-=n2);// 14 
// // console.log("/=",n1/=n2);// 4.66666  
// // console.log("*=",n1*=n2);//   13.9999999999
// console.log("%=",n1%=n2);//2


//////////////////////////////////////////////
//comparission  
// ==,!=,<=,>=,<,>,===,!== 
// var n1 = 12;
// var n2 = "24";

// // console.log(`${n1} == ${n2}`,n1==n2);//false
// // console.log(`${n1} != ${n2}`,n1!=n2);//true
// console.log(n1>n2);//true
// // console.log(n1<n2);//false
// // console.log(n1>=n2);//true  //n1>n2  n1==n2
// // console.log(n1<=n2);//false  //n1<n2  n1==n2

// console.log(`${n1} === ${n2}`,n1===n2);
// console.log(`${n1} !== ${n2}`,n1!==n2);


///////////////////////////////////
//logical
// && ,||, !    

//  1) &&    if true true  =true     else false 
//  2) ||    if false false = false  else true
//  3) !     true > false   false >true
// var n1 = 12;
// var n2 =12;
// console.log(n1>=n2 && n1!=n2);

// console.log(n1<n2 || n1==n2);


///////////////////////////////////
// var n1 = prompt("Enter the Value of N1 : "); //"true"
var n2 = true;


// console.log(n1==n2);
// console.log(n1===n2);

// type casting  

//number 
// var n1 = +prompt("Enter the Value of N1 : "); //number
// var n1 = Number(prompt("Enter the Value of N1 : "));  //number
var n1 = Boolean(prompt("Enter the Value of N1 : "));  //boolean

console.log(n1==n2);
console.log(n1===n2);

// https://quizizz.com/admin/quiz/5dd667a07b5590001ff67297/javascript-operators