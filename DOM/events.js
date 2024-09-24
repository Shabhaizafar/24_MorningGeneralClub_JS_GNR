const btn1 = document.querySelector('.btn1');


btn1.onclick = function (){
    document.body.style.backgroundColor = 'red';
    btn1.classList.add("animation");
    console.log(btn1.classList);
}