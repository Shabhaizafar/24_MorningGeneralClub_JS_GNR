/*
1. **Basic Array Operations:**
   - Write a program that initializes an empty array and adds elements to it using `push` and `unshift`.
   - Implement a function that removes elements from the end and beginning of an array using `pop` and `shift`.

2. **Primitive vs Reference Data Types:**
   - Create examples that demonstrate the difference between primitive data types (like numbers and strings) and reference data types (like arrays and objects).

3. **Cloning Arrays & Spread Operator:**
   - Write a function to clone an array using the spread operator (`...`).
   - Implement a program that modifies one array and ensures the original array remains unchanged due to reference type behavior.

4. **Using `const` for Arrays:**
   - Create an array using `const` and demonstrate how you can modify its elements without reassigning the array itself.

5. **Loops with Arrays:**
   - Write a program using a `for` loop to iterate over an array of numbers and calculate their sum.
   - Implement a `while` loop that iterates over an array of strings until it finds a specific element.

6. **For...of Loop:**
   - Write a program that uses a `for...of` loop to iterate over an array of objects and log a specific property of each object.

7. **For...in Loop:**
   - Create an object with array-like properties and use a `for...in` loop to iterate over its enumerable properties.

8. **Array Destructuring:**
   - Write a function that takes an array of numbers as input and returns the first and last element using array destructuring.

9. **Advanced Array Operations:**
   - Implement a program that sorts an array of objects based on a specific property using array methods and arrow functions.
   - Write a function that accepts two arrays and returns a new array with elements that are common to both arrays.

10. **Error Handling with Arrays:**
    - Implement a program that safely accesses a nested property of an object using array destructuring and handle cases where properties might be `undefined`.
*/

// 1. **Basic Array Operations:**
//    - Write a program that initializes an empty array and adds elements to it using `push` and `unshift`.
// var Arr = [];
// //Add value ending point.
// Arr.push(10);
// Arr.push(100);

// //Add value starting point.
// Arr.unshift(1000);
// Arr.unshift(2000);

// console.log(Arr);

//    - Implement a function that removes elements from the end and beginning of an array using `pop` and `shift`.

// var Arr = [1,2,3,4,5,6,7,8,9,10];

// function All() {
//     //remove value last point.
//     Arr.pop();
//     //remove value starting point.
//     Arr.shift();
//     console.log(Arr);
// }

// All();
// All();
// All();
// All();
// All();


// 2. **Primitive vs Reference Data Types:**
//    - Create examples that demonstrate the difference between primitive data types (like numbers and strings,boolean,null,..) and reference data types (like arrays and objects).


// var n1 = 12;
// var n2 = n1;
// console.log(n1);
// console.log(n2);
// n1++;
// console.log(n1);
// console.log(n2);

// var Arr1 = [1,2,3];
// var Arr2 = Arr1;
// console.log(Arr1);
// console.log(Arr2);
// Arr2.push(100);
// console.log(Arr1);
// console.log(Arr2);




// 3. **Cloning Arrays & Spread Operator:**
//    - Write a function to clone an array using the spread operator (`...`).

// var Arr1 =[1,2,3];

// function All(arr){
//     var Arr2 = [...arr];
//     console.log(Arr2);
//     Arr2.push("zafar");
//     console.log(Arr1);
//     console.log(Arr2);
// }
// All(Arr1);
//    - Implement a program that modifies one array and ensures the original array remains unchanged due to reference type behavior.

// var Arr1 = [1,2,3];

// var Arr2 = Arr1.concat([13,14,15,"zfr"]);
// console.log(Arr1);
// console.log(Arr2);

// Arr2.push("zafar");
// console.log(Arr1);
// console.log(Arr2);

// 4. **Using `const` for Arrays:**
//    - Create an array using `const` and demonstrate how you can modify its elements without reassigning the array itself.

// must try to use 'const' to define array.

// let Arr = [];
// console.log(Arr);
//  Arr = [1,2,3];
// console.log(Arr);



// 5. **Loops with Arrays:**
//    - Write a program using a `for` loop to iterate over an array of numbers and calculate their sum.
// var Arr = [1,2,3,4,5];
// var sum = 0;
// for (let i = 0; i < Arr.length; i++) {
//     console.log(Arr[i]);
//     sum+=Arr[i];
// }

// console.log("Sum is : ",sum);

/////////////
//    - Implement a `while` loop that iterates over an array of strings until it finds a specific element.

// var Arr = ["Zafar","Za","Z","A","F"];
// if(Arr.includes("AZ"))
// {
//       console.log("Exist");
// }
// else{
//    console.log("Not Exist");
// }

// var finds = "AZ";
// var i =0;
// var counnter=0;
// while(i<Arr.length)
// {
//    if(Arr[i]==finds)
//    {
//       counnter++;
//       break;
//    }
//    i++;
// }
// if (counnter==1) {
//    console.log(finds+" Exist in an Array");
// }
// else{
//    console.log(finds+" Doesn't Exist in an Array");
// }



// 6. **For...of Loop:**
//    - Write a program that uses a `for...of` loop to iterate over an array of objects and log a specific property of each object.
// let people = [
//    { name: 'Alice', age: 30 },
//    { name: 'Bob', age: 25 },
//    { name: 'Charlie', age: 35 }
// ];

// for (const iterator of people) {
//    console.log(iterator.name);
// }


// 7. **For...in Loop:**
//    - Create an object with array-like properties and use a `for...in` loop to iterate over its enumerable properties.
// let people = [
//    { name: 'Alice', age: 30 },
//    { name: 'Bob', age: 25 },
//    { name: 'Charlie', age: 35 }
// ];

// let people = [
   //    { name: 'Alice', age: 30 },
   //    { name: 'Bob', age: 25 },
   //    { name: 'Charlie', age: 35 }
// ];

// for (const key in people) {
//       for (const key2 in people[key]) {
//         console.log(key2,people[key][key2]);
//       }
// }

// 8. **Array Destructuring:**
//    - Write a function that takes an array of numbers as input and returns the first and last element using array destructuring.



// 9. **Advanced Array Operations:**
//    - Implement a program that sorts an array of objects based on a specific property using array methods and arrow functions.
// let people = [
//    { name: 'Alice', age: 30 },
//    { name: 'Bob', age: 25 },
//    { name: 'Charlie', age: 35 }
// ];


// let people = [
//    { name: 'Bob', age: 25 },
//    { name: 'Alice', age: 30 },
//    { name: 'Charlie', age: 35 }
// ];

// let people = [
//    { name: 'Charlie', age: 35 },
//    { name: 'Alice', age: 30 },
//    { name: 'Bob', age: 25 }
// ];

// people.sort((a,b)=>{return b.name.length-a.name.length;});console.log(people);


//    - Write a function that accepts two arrays and returns a new array with elements that are common to both arrays.

// 10. **Error Handling with Arrays:**
//     - Implement a program that safely accesses a nested property of an object using array destructuring and handle cases where properties might be `undefined`.


let books = [
   { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', price: 30, category: 'Programming', titleLength: 0 },
   { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', price: 25, category: 'Programming', titleLength: 0 },
   { title: 'Clean Code', author: 'Robert C. Martin', price: 40, category: 'Software Engineering', titleLength: 0 },
   { title: 'You Don\'t Know JS', author: 'Kyle Simpson', price: 20, category: 'Programming', titleLength: 0 }
];