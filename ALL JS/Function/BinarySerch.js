var Arr = [14,1,16,81,90,33,47,11,29,40];
var target = 33;
Arr.sort(function(a,b){return a-b});
console.log(Arr);

//[1, 11, 14, 16, 29, 33, 40, 47, 81, 90]

// 0   1   2   3   4   5   6   7   8   9
// function binarySearch(arr,t){
//     var len = parseInt((arr.length-1)/2);
//     if(t>arr[len])
//     {
//         arr = arr.slice(len+1,arr.length);
//         binarySearch(arr,t);
//     }
//     else if(t==arr[len])
//     {
//         return console.log("Value is : ",t);
//     }
//     else if(t<arr[len])
//     {
//         arr = arr.slice(0,len);
//         binarySearch(arr,t);
//     }
//     else
//     {
//         return console.log("Value doesn't Exist.");
//     }
// }
// binarySearch(Arr,target);



// console.log(parseInt(((arr.length-1)+0)/2));
// console.log(Math.floor(((arr.length-1)+0)/2));



/*
[33, 40, 47, 81, 90]

5/2 2.5 

2 

*/