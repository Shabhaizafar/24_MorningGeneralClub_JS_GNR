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

document.body.onkeydown = function(event){
    div.innerHTML += event.key;
}
