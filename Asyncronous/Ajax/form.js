const btn = document.querySelector('button');

btn.addEventListener("click",function(event){
    event.preventDefault();
    const fname = document.querySelector("#firstname");
    const lname = document.querySelector("#lastname");
    const age = document.querySelector("#age");
    const gender = document.querySelector("#gender");

    localStorage.setItem("Firstname",fname.value);
    localStorage.setItem("Lastname",lname.value);
    localStorage.setItem("Age",age.value);
    localStorage.setItem("Gender",gender.value);
});



