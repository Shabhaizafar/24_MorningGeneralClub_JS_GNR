const body = document.querySelector('body');
const div = document.querySelector('div');
const h1 = document.querySelector('h1');


// body.onclick = function (){
//     console.log("Hello");
// }



// deligation Event : 
// body.addEventListener('click',function (event){
//     console.log(event.target.value);
// });



// Event Bubbling : 
// var i = 1;
// body.addEventListener('click',function (){
//     console.log("Body Trigered",i);
//     i++;
// });
// div.addEventListener('click',function (){
//     console.log("div Trigered",i);
//     i++;
// });
// h1.addEventListener('click',function (){
//     console.log("h1 Trigered",i);
//     i++;
// });


// Event Capturing : 
var i = 1;
body.addEventListener('click',function (){
    console.log("Body Trigered",i);
    i++;
});
div.addEventListener('click',function (){
    console.log("div Trigered",i);
    i++;
},true);
h1.addEventListener('click',function (){
    console.log("h1 Trigered",i);
    i++;
},true);