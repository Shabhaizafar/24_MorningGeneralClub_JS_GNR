const btn = document.querySelector("button");

btn.addEventListener('click',function(event){
    event.preventDefault();
    localStorage.setItem("Firstname",document.querySelector('#firstname').value);
    localStorage.setItem("Lastname",document.querySelector('#lastname').value);
    localStorage.setItem("Age",document.querySelector('#age').value);
    localStorage.setItem("Gender",document.querySelector('#gender').value);

    location.href = "temp.html";
});