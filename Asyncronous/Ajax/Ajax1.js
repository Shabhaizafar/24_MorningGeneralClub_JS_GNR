const btn = document.querySelector('button');
btn.onclick = function(){

    // how to create XMLHTTP Request
    var xhttp = new XMLHttpRequest();
    // console.log(xhttp);
    xhttp.onload = function(data){
        // console.log(data.target.response);
        document.querySelector('div').innerHTML = `<pre>${data.target.response}</pre>`;
    };
    xhttp.open("GET","../../ALL JS/JavaScript.txt");  // txt   // html
    xhttp.send();// 
}