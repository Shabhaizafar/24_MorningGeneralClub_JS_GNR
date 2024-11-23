const body = document.querySelector('body');
const allbtn = document.querySelectorAll('.clr button');
const design = document.querySelector('.design');
var counter = 0;
console.log(allbtn);

body.addEventListener('click',function (event){
    allbtn.forEach(
        (v)=>{
            if(v==event.target)
                counter = 1;     
        }
    );
    if(counter==1){
        console.log(event.target.classList.toggle('border'));
    }
    counter=0;
});


document.querySelector('.pencil').onclick = function (){
    design.classList.remove('crosshair');
    design.classList.remove('texter-1');
    design.classList.add('cursor');
}

document.querySelector('.cross1').onclick = function (){
    design.classList.remove('cursor');
    design.classList.remove('texter-1');
    design.classList.add('crosshair');
}
document.querySelector('.cross2').onclick = function (){
    design.classList.remove('cursor');
    design.classList.remove('texter-1');
    design.classList.add('crosshair');
}
document.querySelector('.cross3').onclick = function (){
    design.classList.remove('cursor');
    design.classList.remove('texter-1');
    design.classList.add('crosshair');
}
document.querySelector('.cross4').onclick = function (){
    design.classList.remove('cursor');
    design.classList.remove('texter-1');
    design.classList.add('crosshair');
}
document.querySelector('.texter').onclick = function (){
    design.classList.remove('cursor');
    design.classList.remove('crosshair');
    design.classList.add('texter-1');
}