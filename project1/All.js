const div = document.querySelector('div');
var images = ["url('image1.jpeg')","url('image2.jpeg')"];
var i = 0;
div.style.backgroundImage = images[i];


document.querySelector('.nxt').onclick = function (){
    i++;
    if(i==images.length)
        i=0;
    div.style.backgroundImage = images[i];
}

document.querySelector('.pre').onclick = function (){
    if(i==0)
        i=images.length;
    i--;
    div.style.backgroundImage = images[i];
}


////image tag



