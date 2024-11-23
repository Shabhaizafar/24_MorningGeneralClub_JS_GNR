
// var Operators = ['+', '/', '-', '*', '%','='];
// var lastop = '';
// function Main(value) {
//     var displaydata = document.querySelector('#result');
//     if(displaydata.value=='0'){
//         displaydata.value=value;
//     }
//     else{
//         displaydata.value+=value; 
//     }

// }

// function deleteData() {
//     var displaydata = document.querySelector('#result');
//     if (displaydata.value.length == 1) {
//         displaydata.value = '0';
//         return 0;
//     }
//     displaydata.value = displaydata.value.slice(0, displaydata.value.length - 1);
// }


// function finalop(value){
//     var displaydata = document.querySelector('#result');
//     var dis2 = document.querySelector('.dis2');
//     dis2.value = displaydata.value + value;
//     var Allvalues = [];
//     var temp = '';
//     for (const element of [...dis2.value]) {  
//         if(Operators.includes(element)){
//             Allvalues.push(temp);
//             temp='';
//             Allvalues.push(element);
//         }
//         else{
//             temp+=element;
//         }
//     }
//     //2+6 = 
//     for (const key in Allvalues) {
//         if(Operators.includes(Allvalues[key])){
//             // console.log(Allvalues[key-1],Allvalues[Number(key)+1]);
//             //             2                    6
//             switch(Allvalues[key]){
//                 case '+' : console.log(Number(Allvalues[key-1])+Number(Allvalues[Number(key)+1]));
//             }
//         }
//         // console.log(key,Allvalues[key]);   
//     }

// }


/*

    lastop = op;
    if(dis2.value=='')
    {
        dis2.value = displaydata.value+op;
        displaydata.value = '0';
    }
*/
// if(dis2.value.endsWith(lastop) && displaydata.value=='0')
//     {
//         return 0;
//     }

    // if (Operators.includes(dis2.value.slice(dis2.value.length - 1))) {
    //     dis2.value = dis2.value.slice(0, dis2.value.length - 1) + op;
    //     return 0;
    // }
    // console.log('wer');




/////////////////////////////////////////////////////////////////////
// Array.reduce() Method Questions:
// Write a function that uses reduce() to concatenate all strings in an array into a single string, separating each by a space.
///////////////////////////////////////////////
// Modify the reduce() function to calculate the product of all numbers in the array Arr.
///////////////////////////////////////////////

// Use reduce() to find both the minimum and maximum values in an array in a single pass.
///////////////////////////////////////////////

// Write a reduce() function that counts how many times each character appears in a string array (e.g., ['a', 'b', 'a', 'c', 'b']).
///////////////////////////////////////////////

// Create a reduce() function that splits an array into two arrays: one with even numbers and one with odd numbers.
///////////////////////////////////////////////

// Write a program that uses reduce() to create a cumulative sum of an array but starts the sum with a given initial value (e.g., [1, 2, 3] with initial value 10 should return [11, 13, 16]).
///////////////////////////////////////////////

// Use reduce() to implement a function that finds the most frequent element in an array.
///////////////////////////////////////////////

// Write a reduce() function to merge an array of objects into a single object by combining their properties.
///////////////////////////////////////////////

// Create a reduce() function that converts an array of objects (e.g., {id: 1, name: 'John'}) into an object using a specific property as the key (e.g., id).
///////////////////////////////////////////////

// Write a program using reduce() to remove duplicate values from an array.
///////////////////////////////////////////////
