var p1 = document.querySelector('p');
console.log(p1);


// How to Modify Inner Content : 
// 1) innerHTML 
// p1.innerHTML = "This is a New Content";


// 2) innerText
// p1.innerText = "This is a New Content";


// 3) TextContent
// p1.textContent = "This is a New Content";


// How to Add new Element in  a HTML using JS : 
document.write("<h1>This a first Heading</h1>");
document.write("<div class='div1'>Body : </div>");
document.write("<div class='div2'>P : </div>");
document.write("<div class='div3'>H2 : </div>");

var bodyt = document.querySelector('.div1').innerText;
var pt = document.querySelector('.div2').innerText;
var h2t = document.querySelector('.div3').innerText;



//How to Access Inner Value :
// console.log(document.querySelector('input').innerText);
// console.log(document.querySelector('input').innerHTML);
// console.log(document.querySelector('input').textContent);
// console.log(document.querySelector('input').value);




function changeColor(){
    var clr1 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    var clr2 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    var clr3 = `rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`;
    document.body.style.backgroundColor = clr1;
    document.querySelector('h1').style.color = "Blue";
    document.querySelector('h2').style.color = clr2;
    document.querySelector('p').style.color = clr3;

    document.querySelector('.div1').innerHTML = bodyt+clr1;
    document.querySelector('.div2').innerHTML = pt+clr2;
    document.querySelector('.div3').innerHTML = h2t+clr3;
}