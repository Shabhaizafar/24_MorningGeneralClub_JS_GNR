// const btn = document.querySelector('button');

// var w; //undefined
// btn.addEventListener('click',function(){
//     if(w==undefined){
//         w = new Worker('worker.js');
//     }
// });

const div = document.querySelector('div');
// console.log(div.tagName);
// var w;
let w;
// const w;
div.addEventListener("click",function(event){
    if(event.target.tagName=="BUTTON"){
        if(event.target.innerHTML == "Start"){
            w = new Worker('worker.js');
        }else if(event.target.innerHTML == "End"){
            w.terminate();
            w = undefined;
        }
    }
});