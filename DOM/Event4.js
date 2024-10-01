const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.onclick = function (){
    // console.log(img.attributes);
    // console.log(img.attributes.item(0)); //valid
    // console.log(img.attributes[0]); //valid
    // console.log(img.attributes['0']); //valid
    img.attributes[0].value = "on.png";
    btn.innerHTML = "OFF";
}