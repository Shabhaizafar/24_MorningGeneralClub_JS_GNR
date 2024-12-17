const btn = document.querySelector("button");

btn.addEventListener('click',function(event){
    event.preventDefault();
    var filet = document.querySelector('#file').value.split('\\');
    var datet = document.querySelector('#date').value;
    localStorage.setItem('File',filet[filet.length-1]);
    localStorage.setItem('Date',datet);

    location.href = localStorage.getItem("File");
});

/*pdf , ppt,html,image , sql , txt */ 
