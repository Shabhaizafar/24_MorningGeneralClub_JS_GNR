<<<<<<< HEAD
// Keyboard Events : 
// 1) onkeydown :  
// 2) onkeyup : 
// 3) onkeypress : 


// var body = document.body;
//     //event : Object
// body.onkeydown = function (event){ 
//     // console.log(event.key);
//     console.log(event['key']);
// }



var div = document.querySelector('div');

// document.body.onkeydown = function(event){
//     div.innerHTML += event.key;
// }

// document.body.onkeypress = function(){
//     console.log("Press");
// }


// document.body.onkeyup = function(){
//     console.log("Up");
// }

// document.body.onkeydown = function(){
//     console.log("Down");
// }

var maxword = parseInt(Math.random()*10)+1;
// var maxchar = parseInt(Math.random()*10);
// console.log(maxchar);

for (let i = 1; i <=maxword; i++) { // 3   //1 2
    var maxchar = parseInt(Math.random()*10)+1; // 3   2
    for (let j = 1; j <=maxchar; j++) {//1 2 3
        div.innerHTML +=String.fromCharCode(parseInt(Math.random()*26)+97);
    }
    div.innerHTML += ' ';
}
=======
// Keyboard Events : 
// 1) onkeydown :  
// 2) onkeyup : 
// 3) onkeypress : 


// var body = document.body;
//     //event : Object
// body.onkeydown = function (event){ 
//     // console.log(event.key);
//     console.log(event['key']);
// }



var div = document.querySelector('div');

// document.body.onkeydown = function(event){
//     div.innerHTML += event.key;
// }

// document.body.onkeypress = function(){
//     console.log("Press");
// }


// document.body.onkeyup = function(){
//     console.log("Up");
// }

// document.body.onkeydown = function(){
//     console.log("Down");
// }

var maxword = parseInt(Math.random()*10)+1;
// var maxchar = parseInt(Math.random()*10);
// console.log(maxchar);

for (let i = 1; i <=maxword; i++) { // 3   //1 2
    var maxchar = parseInt(Math.random()*10)+1; // 3   2
    for (let j = 1; j <=maxchar; j++) {//1 2 3
        div.innerHTML +=String.fromCharCode(parseInt(Math.random()*26)+97);
    }
    div.innerHTML += ' ';
}
>>>>>>> 9e5607bd756f10caef51ca6fa378907664fcf7cc
