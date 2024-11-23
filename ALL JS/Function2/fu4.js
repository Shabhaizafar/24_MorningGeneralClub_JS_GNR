// parameter Destructuring

// function All(n1,n2,...abc)
// {
//     console.log(n1);
//     console.log(n2);
//     console.log(abc);
//     var [,v1,v2] = abc;
//     console.log(v1,v2,v1+v2);
// }
// All(12,11,13,14,15,16);


///////////////////////////////////////

//  callback function  (arg) 
// function sum(){
//     console.log("Addition");
// }

// function All(abc)   //parameter
// {
//     abc();
// }
// All(sum);  // arg

// function sum(){
//     console.log("Addition");
// }

// function All(callback)   //parameter
// {
//     callback();
// }
// All(sum);  // arg


////////////////////////////////////
// Higher order Function 

function main(){
    var choice = prompt("1) num for Number\n2) str for String \n\nEnter Your Choice : ");
    switch(choice){
        case 'num' : numbers();
                     break;
        case 'str' : Strings();
                     break;
        default : console.log("Please Enter Valid Choice!!");
    }
}
main();

function numbers(){
    var n1 = 12;
    var n2 = 6;
    var choice = +prompt("1)for Addition\n2) for Subtraction \n\nEnter Your Choice : ");
    switch(choice){
        case 1 : Add(n1,n2);
                     break;
        case 2 : sub(n1,n2);
                     break;
        default : console.log("Please Enter Valid Choice!!");
    }
}
function Strings(){

}
function Add(a,b){
    console.log("Addition of a b :",a+b);
}