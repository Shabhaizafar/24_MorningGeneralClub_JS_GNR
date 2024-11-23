const div = document.querySelector('div');
const btn = document.querySelector('button');



// btn.onclick = function (){
//     //Add 
//     if(div.classList.contains('newOne')){
//         //remove
//         div.classList.remove('newOne');
//         console.log("if");
//     }else{
//         //add
//         div.classList.add('newOne');
//         console.log("else");
//     }
// }


// var Arr = [1,2,3,4,5];
// Arr.push

btn.onclick = function (){
    div.classList.toggle('newOne');  //add remove contains
}


/*
https://miro.medium.com/v2/resize:fit:1400/1*vR-c2OlaAJLjK9ue5785rA.gif
*/ 

