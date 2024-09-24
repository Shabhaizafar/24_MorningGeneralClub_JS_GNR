//Set : Unique Values   : accept Any Datab type value

var Arr = [11,12,13,14,15,11,12,13,"Zafar",true];
console.log(Arr);
// console.log(Set(Arr));   not use


// console.log(Boolean(123));


//How to Create Empty Set
// var myset = new Set();
// console.log(myset);


var myset = new Set(Arr);
console.log(myset);


// size(property) :  Print Size of Set
// console.log(myset.size);


// Add New Value  : Add single Value at a Time
// myset.add(100);
// console.log(myset);

// Empty Set //clear
// myset.clear();
// console.log(myset);

// delete Value 
// myset.delete("Zafar");
// console.log(myset);


    //   key and value pair
// console.log(myset.entries());


// console.log(myset.keys());

// console.log(myset.values());


//property exist or not   true false
// console.log(myset.has("Royal"));



// myset.forEach(
//     (v,a,s)=>{
//         console.log(v,a,s);
//     }
// );


// console.log(Array(...myset));


