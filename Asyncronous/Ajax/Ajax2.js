// const btn = document.querySelector('#btn1');
// btn.onclick = function(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload = function(data){
//         document.querySelector('#dv1').innerHTML = `<pre>${data.target.response}</pre>`;
//     };
//     xhttp.open("GET","../../ALL JS/JavaScript.txt");  // txt   // html
//     xhttp.send();  
// }


// const btn2 = document.querySelector('#btn2');
// btn2.onclick = function(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onload = function(data){
//         document.querySelector('#dv2').innerHTML = `<pre>${data.target.response}</pre>`;
//         // console.log(data.target.responseText);
//     };
//     xhttp.open("GET","example_1.json");  // txt   // html
//     xhttp.send();  
// }

////////////////////////////

const btn = document.querySelector('button');

btn.onclick = function(){
    
    var obj1 ={};
    obj1.msg = prompt("Enter your Name : ");
    obj1.status = +prompt("Enter Status Code : ");

    var obj2 = {
        msg : "Something Wrong !!"
    };

    console.log(obj1);
    var myPromise = new Promise(function(success,reject){ 
        if(obj1.status == 200){
            success(obj1.msg);
        }else{
            reject(obj2.msg);
        }
    });

    myPromise.then((data)=>{
        console.log(data);
    },(err)=>{
        console.log(err);
    });
}