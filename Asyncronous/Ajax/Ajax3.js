const btn = document.querySelector("button");


btn.onclick = function(event){
    var temp = 0;
    event.preventDefault();
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function (data){
        var obj =  JSON.parse(data.target.response);
        for (const key in obj) {
            if(document.querySelector('input').value == obj[key].name){
                temp++;   
            }
        }
        if(temp!=0){
            console.log("Exist");
        }
        else{
            console.log("Doesn't Exist");
        }
    }
    xhttp.open("GET","data.json");
    xhttp.send();

}