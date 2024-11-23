
function All(fname,lname){
    this.firstname = fname;
    this.lastname = lname;
}

All.prototype.greet  = function (){
        console.log(`Your Name is ${this.firstname} ${this.lastname}.`);
};

var obj1 =new All("Raj","Patel");
var obj2 =new All("Ajay","Shah");

console.log(obj1);
console.log(obj2);

obj1.greet();
obj2.greet();



// new = {}

// this = new 
// this = {}