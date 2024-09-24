// 14. **Print a Random Number**

// console.log(Math.floor((Math.random()*100)+1));

// 15. **Print the Current Date and Time**

// var Today = new Date();
// var time = Today.getHours()+":"+Today.getMinutes()+":"+Today.getSeconds();
// var Dates = Today.getDate()+"/"+(Today.getMonth()+1)+"/"+Today.getFullYear();

// console.log(time,Dates);



// let date1 = new Date('0001-01-01');
// let date2 = new Date();

// let newTime = date2.getTime() - date1.getTime();


// let TotalDay =
//     Math.round
//         (newTime / (1000 * 3600 * 24));


// console.log("Total number of days between dates:\n" +date1.toDateString() + " and " +date2.toDateString() + " is: " + TotalDay + " days");
// ////////////////////////////
// var Person= {fname :"Raj"};
// console.log(Person.fname);

// console.log(12>13);

// 18. **Print the result of concatenating an array and a string**
// var Arr = [1,2,3,4];
// var str = "Raj";
// console.log(Arr.concat(str,"asdfghjk"));

//////////////////////////////
// 14. **Print the minimum value from a set of numbers**

// 15. **Print the maximum value from a set of numbers**


// var Arr = [13,15,17,1,4,2,8,10,1001];
// // Arr.sort(function(a,b){return a-b});
// // console.log(Arr[0],Arr[Arr.length-1]);

// console.log(Math.min(...Arr));
// console.log(Math.max(...Arr));


// console.log("Hard Work is Key of Success");

// var Dates = new Date();
// console.log(`${Dates.getFullYear()}-${Dates.getMonth()+1}-${Dates.getDate()}`);


// ///////////////////////////////////////
// 12. **Print a boolean value that represents whether a string includes a specific substring**
// var str = "Royal Technosoft pvt ltd";
// console.log(str.includes('Royalsdfg'));

// 17. **Print a null value explicitly**
// console.log(null);
// var n = null;
// console.log(n);
// 18. **Print an undefined value explicitly**
// var n;
// console.log(n);
// // 14. **Print a random integer between 1 and 50**
// console.log(parseInt(Math.random()*50)); //0-49
// console.log(parseInt(Math.random()*50)+1); //1-50
// console.log(parseInt(Math.random()*51)); //0-50


// 15. **Print the current year**
// var t = new Date();
// console.log(t.getFullYear());

// 20. **Print a string with all vowels removed**
// var str = "Royal Technosoft pvt ltd";
// var i=0;
// var vowel = ['a','e','i','o','u'];
// var newS = "";
// while(i<str.length){
//     if(vowel.includes(str[i].toLowerCase()))
//     {
//         i++;
//         continue;
//     }
//     else{
//         newS+=str[i];
//         i++;
//     }
// }
// console.log(newS);
