// function All(){
//     console.log("Hello Everyone !!!");
// }
// All();




// // call  
// All.call();

// // apply
// All.apply();

// // bind 
// var ans = All.bind();
// ans();





var obj1 = {
    fname : "Raj",
    lname : "Patel",
    greeting : function (Age,gender){
        console.log(`Hello My Name is ${this.fname} ${this.lname}.and My Age is ${Age}.${gender}`);
    }
};

var obj2 = {
    fname : "Dhruv",
    lname : "Sharma"
};

console.log(obj1);
console.log(obj2);

obj1.greeting();

// obj2.greeting();



console.log("\n\nCall : \n");
//call 
obj1.greeting.call(obj1,10,"Male");
obj1.greeting.call(obj2,30);


console.log("\n\nApply : \n");
//apply
obj1.greeting.apply(obj1,[10,"Male"]);
obj1.greeting.apply(obj2);


console.log("\n\nApply : \n");
//bind
var ans = obj1.greeting.bind(obj1);
ans(10,'Male');
var ans2 = obj1.greeting.bind(obj2);
ans2();









// Object Father  : fname ,lname ,property

// Object Child :  cname 



// calling : 
// father property :   "My name is cname fname lname."


// apply :


// bind  : 