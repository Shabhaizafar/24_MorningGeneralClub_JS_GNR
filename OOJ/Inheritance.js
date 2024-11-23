// Single Inheritance
// Single inheritance is one in which the derived class inherits the single base class either public, private, or protected access specifier. In single inheritance, the derived class uses the features or members of the single base class. These base class members can be accessed by a derived class or child class according to the access specifier specified while inheriting the parent class or base class.


// class :    A (Proprties/Methods)   (Parent/Base Class)
        //    ↑
        //    |
        //    |
        //    |
        //    |
// class :    B (Inherite all Methods/Properties of Class A) (Derived/Child Class)


// class Father{
//     constructor(fname,lname){
//         this.Fathername = fname;
//         this.Lastname = lname;
//     }
// };

// class Father{
//     constructor(){
//         this.Fathername = "Rakesh";
//         this.Lastname = "Shah";
//     }
// };

// class Child extends Father{
//     constructor(cname){
//         super();
//         this.Childname = cname;
//     }
//     bioData = function (){
//         console.log(`My name is ${this.Childname} ${this.Lastname}.and My Father name is ${this.Fathername} ${this.Lastname}.`);
//     }
// }

// const c1 = new Child("Raj");

// console.log(c1);
// c1.bioData();



//Multilevel Inheritance : 

// class :    A (Proprties/Methods)   (Parent/Base Class)
        //    ↑
        //    |
        //    |
        //    |
        //    |
// class :    B (Inherite all Methods/Properties of Class A) (Derived/Child Class) (Parent/Base Class)
        //    ↑
        //    |
        //    |
        //    |
        //    |
// class :    C (Inherite all Methods/Properties of Class B) (Derived/Child Class)


// class GrandFather{
//     constructor(gname,lname){
//         this.GrandFatherName = gname;
//         this.Lastname = lname;
//     }
// };
// class Father extends GrandFather{
//     constructor(fname,gname,lname){
//         super(gname,lname);
//         this.Fathername = fname;
//     }
// };
// class Child extends Father{
//     constructor(cname,fname,gname,lname){
//         super(fname,gname,lname);
//         this.Childname = cname;
//     }
//     bioData = function (){
//         console.log(`My name is ${this.Childname} ${this.Lastname}.and My Father name is ${this.Fathername} ${this.Lastname}.My GrandFather name is ${this.GrandFatherName} ${this.Lastname}.`);
//     }
// };


// const c1 = new Child("Raj","Ajay","Rakesh","Shah");


// console.log(c1);
// c1.bioData();



// Basic Inheritance: 

// 1
// Define a Vehicle class with properties make and model. Create a subclass Car that inherits from Vehicle and adds an additional property numberOfDoors. Implement a method in Car that displays all the details of the car.


// 2
// Constructor Inheritance: Define a Shape class with a constructor that initializes a name property. Create a Circle subclass that inherits from Shape and has an additional property radius. Show how to call the constructor of the base class within the Circle constructor.


// 3
// Basic Single Inheritance: Define a Animal class with a method makeSound. Create a subclass Dog that inherits from Animal and overrides makeSound to return "Bark". Show how to create an instance of Dog and call the makeSound method.

// 4
// Inheritance with Properties: Create a Person class with properties name and age, and a method introduce that returns a string introducing the person. Create a subclass Student that inherits from Person and adds a property studentID. Implement a method in Student that returns all details including studentID.






// 5
// Basic Multilevel Inheritance: Define a Vehicle class with a method startEngine. Create a subclass Car that inherits from Vehicle and overrides startEngine to include a specific message for cars. Then create a subclass ElectricCar that inherits from Car and adds a method chargeBattery. Demonstrate how to create an instance of ElectricCar and use methods from all levels of inheritance.


// 6
// Multilevel Inheritance with Additional Properties: Create a Shape class with a property name. Define a subclass Polygon that inherits from Shape and has a property sides. Create another subclass Triangle that inherits from Polygon and sets sides to 3. Show how to create an instance of Triangle and access properties from all levels.