// Swich Case : 
// user Choice 

var n1 = +prompt("Enter the Value of N1 : ");
var n2 = +prompt("Enter the Value of N2 : ");

var choice = prompt("1.Addition\n2.Subtraction\n3.Multiplication\n4.Division\n\nEnter Your Choice : ");


switch (choice) {
    case 1:console.log("Addition :",n1+n2);
        break;
    case "sub":
        console.log("Subtraction :",n1-n2);
        break;
    case 3:
        console.log("Multiplication :",n1*n2);
        break;
    case 4:
        console.log("Division :",n1/n2);
        break;
    default:console.log("Please Enter Valid Choice !!!!");
        break;
}



//1) Develop a program that calculates the discount amount based on the purchase amount:
//   If the purchase amount is greater than $100, apply a 10% discount.
//   Otherwise, no discount is applied.


//2) Write a Program that takes a number between 1 to 7 as input and returns the corresponding day of the week (1 for  Monday, 2 for Tuesday, etc.).




// switch
// 3)Season Determiner: Write a function that takes a month as input and returns the corresponding season (spring, summer, autumn, winter) using a switch statement.

// //4) Currency Converter: Create a function that takes an amount in one currency (USD, EUR, GBP, JPY) and converts it to another currency using a switch statement.
// 1rs  = 0.01199s 
// 1000





// 6) Geometric Shapes Area Calculator: Write a program that calculates the area of different geometric shapes (circle, rectangle, triangle) based on user input. Use a switch statement to determine which shape the user wants to calculate the area for and prompt for necessary dimensions.