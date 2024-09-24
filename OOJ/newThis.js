// new Keyword : 

// new Operator : 

// var obj2 = new Object();
// obj2.fname = "Dhruv";
// console.log(typeof obj2,obj2);


// A new empty object is created.

// The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
// The ‘this’ variable is made to point to the newly created object. It binds the property that is declared with the ‘this’ keyword to the new object.




// this  : 


// When used within a method of an object, this points to that object.
// When used by itself, this points to the global object.
// Within a function, this typically points to the global object.



// console.log(this);


// this.fname = "Raj";
// console.log(this);


// var abc = 12;
// console.log(abc);

// console.log(this.abc);

let abc = 13;
console.log(window.abc);

console.log(window);  //global Object