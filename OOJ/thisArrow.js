// var fname = "Zafar";
// let fname = "Zafar";


// function NameFu(){
//     // var fname = "Zafar";
//     // let fname = "Zafar";
//     // const fname = "Zafar";
//     console.log(`Prototype : ${this.fname}`);
// }

// NameFu();



// var obj = {
//     fname : "Raj",
//     greet : function (){
//         console.log(`${this.fname}.`);
//     }
// }
// console.log(obj);
// obj.greet();



// this : global 

// this : it's self


// var fname = "Zafar";
// //     // let fname = "Zafar";
// //     // const fname = "Zafar";

// var NameFu = ()=>{
//     console.log(this);
// }

// NameFu();


// var obj = {
//     fname : "Raj",
//     greet :  ()=>{
//         console.log(this.fname);
//     }
// }
// console.log(obj);
// obj.greet();







// var fname = "Zafar";
// function Main(){
//     var fname = "Raj";
//     function Inner(){
//         var fname = "Ajay";
//         function Inner2(){
//             console.log(this.fname);// Ajay
//         }
//         console.log(this.fname);// Raj
//         Inner2();
//     }
//     Inner();
//     console.log(this.fname);// Zafar
// }
// Main();





