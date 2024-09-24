// // Getters and setters. 


// class Person{
//     constructor(fname,lname,age){
//         this.firstname = fname;
//         this.lastname = lname;
//         this.age  = age;
//     }
//     Hello(){
//         console.log(`Hello Everyone,My name is ${this.firstname} ${this.lastname}.and i'm ${this.age} year old.`);
//     }
//     // Getter 
//     get getFname(){
//         return this.firstname;
//     }

//     //Setter 
//     set setFname(f){
//         this.firstname = f; 
//     }
// }


// const p1 = new Person("Raj","Shah",12);
// console.log(p1);

// p1.Hello();

// // p1.getFname(); //invalid
// console.log(p1.getFname);


// p1.setFname = "Ajay";
// console.log(p1.getFname);



// console.log(p1);





// Basic Getter/Setter

// Create a class Person with a private property name. Implement a getter and setter for name.
// Validation in Setter

// Define a class Account with a private property balance. Implement a setter that prevents setting a negative balance and provides an error message if an invalid value is assigned.
// Computed Property

// Create a class Rectangle with private properties width and height. Implement a getter for area that computes the area of the rectangle using the width and height.
// Dynamic Property Access

// In a class User, create a getter for fullName that concatenates firstName and lastName properties. Implement corresponding setters to update both firstName and lastName when fullName is set.
// Lazy Initialization

// Define a class ExpensiveResource with a private property resource. Implement a getter that initializes the resource only when it is first accessed.
// Encapsulation

// Create a class Circle with a private property _radius. Implement getters and setters for radius where setting the radius should validate that it is a positive number.
// Read-Only Property

// Implement a class Temperature with a private property celsius. Provide a getter for fahrenheit that converts the Celsius temperature to Fahrenheit, but make the celsius property read-only.
// Chained Setters

// Define a class Coordinates with private properties x and y. Implement setters for x and y such that setting one coordinate updates both coordinates to keep them in sync.
// Getter/Setter for Object

// Create a class Person with a private property details (an object). Implement getters and setters to access and update specific properties within details (e.g., age, address).
// Protected Property

// Implement a class BankAccount with a private property _accountNumber. Provide a getter for accountNumber that returns the account number, but prevent it from being changed directly.