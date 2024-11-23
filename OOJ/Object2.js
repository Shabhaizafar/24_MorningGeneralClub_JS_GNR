// const methods = {
//     greet  : function (){
//         console.log(`Your Name is ${this.firstname} ${this.lastname}.`);
//     },
//     greetAll  : function (){
//         console.log(`${this.firstname}, Welcome to Javascript.!!!`);
//     }
// }
// function All(fname,lname){
//     var a = Object.create(methods);
//     a.firstname = fname;
//     a.lastname = lname;
//     return a;
// }
// var obj1 = All("Raj","Patel");
// var obj2 = All("Ajay","Shah");

// console.log(obj1);
// console.log(obj2);

// obj1.greet();
// obj2.greet();
// obj1.greetAll();
// obj2.greetAll();

// ---------------------31/07/2024-----------------------//
function All(fname,lname){
    var a = Object.create(All.prototype);
    a.firstname = fname;
    a.lastname = lname;
    return a;
}
// All.prototype = {
//     greet  : function (){
//         console.log(`Your Name is ${this.firstname} ${this.lastname}.`);
//     },
//     greetAll  : function (){
//         console.log(`${this.firstname}, Welcome to Javascript.!!!`);
//     }
// }

All.prototype.greet  = function (){
        console.log(`Your Name is ${this.firstname} ${this.lastname}.`);
};
// greetAll  : function (){
//         console.log(`${this.firstname}, Welcome to Javascript.!!!`);
//     }
// }

var obj1 = All("Raj","Patel");
var obj2 = All("Ajay","Shah");

console.log(obj1);
console.log(obj2);

obj1.greet();
obj2.greet();
obj1.greetAll();
obj2.greetAll();