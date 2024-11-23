var i = 0;
const h1 = document.querySelector('h1');
const img = document.querySelector('img');
var id = setInterval(function (){
    // console.log(i--); //0 -1
    console.log(i);
    h1.innerHTML = i--;
    if(i<0){
    console.log("Inner",i);
        clearInterval(id);
        h1.style.display = "none";
        img.style.animationName = "image";
        img.style.display = "block";
    }
},1000);