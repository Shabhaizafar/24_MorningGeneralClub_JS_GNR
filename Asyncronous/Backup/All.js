// How to Access Local Storage : 
// console.log(localStorage);

// How to Add Data in a Local Storage : 
            // key + value
// localStorage.setItem("Firstname","Zafar");
// localStorage.setItem("Lastname","Shabhai");


// localStorage.clear();

// localStorage.removeItem("Lastname");
// console.log(localStorage);


// ----------------------------
const btn = document.querySelector('button');

btn.addEventListener("click",function(event){
    event.preventDefault();
    // const fname = document.querySelector("#firstname").value;
    // const lname = document.querySelector("#lastname").value;
    // const age = document.querySelector("#age").value;
    // const gender = document.querySelector("#gender").value;


    // localStorage.setItem("Firstname",fname);
    // localStorage.setItem("Lastname",lname);
    // localStorage.setItem("Age",age);
    // localStorage.setItem("Gender",gender);
    console.log(document.querySelector('#file').value);
    // location.href = "thanks.html";
});