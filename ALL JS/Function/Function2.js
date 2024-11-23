/*
wap to print answer x-(x^2)/2! + (x^3)/3! -(x^4)/4! + (x^5)/5! - .......
*/
// var value1 = 2;
// var terms  = 5;


// function series(x,t){
//     for (let i = 1; i <=t; i++) {
//         var fact = 1;
//         var power= 1;
//         var temp = i;
//         var output=0;
//         while(temp>0)
//             {
//                 fact*=temp;
//                 temp--;
//             }
//         for (let j = 1; j <=i; j++) {
//             power*=x;
//         }
//         if(i%2==0)
//         {
//             output= output - (power/fact);
//         }
//         else
//         {
//             output= output + (power/fact);
//         }
//     }
//     console.log("Series output : ",output);
// }
// series(value1,terms);




// 35. Write a program in C to display the first n terms of the Fibonacci series.
// Fibonacci series 0 1 1 2 3 5 8 13 .....