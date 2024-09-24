// break ,Continue Keyword : 


// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i,j);
//     }
// }
/*
0 0
0 1
0 2
1 0
1 1
1 2
2 0 
2 1
2 2
*/ 

// 
// // 1) i = 1 break 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(i==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
0 1
0 2
2 0 
2 1 
2 2
*/ 
// // 2) i = 1 continue 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(i==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
0 1
0 2
2 0 
2 1 
2 2
*/

// // 3) j = 1 break 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//             break;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
1 0
2 0
*/
// 3) j = 1 continue 
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//         {
//             continue;
//         }
//         console.log(i,j);
//     }
// }
/*
0 0
0 2
1 0
1 2
2 0
2 2
*/

// var choice = 1;
// switch (choice) {
//          case 1:
//         case 2:
//         case 3:
//         case 4:
//             console.log("Number is less then 5");
//             break;
//         case 5:
//             console.log("5 Number is Equals to 5");
//             break;

//         default: console.log("Number is Grater 5");
        
// }

