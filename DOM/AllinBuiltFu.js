// console.log("Zafar");
// setTimeout(function,timer ms);

// 1s = 1000ms 


// single Time  : 

// setTimeout(function(){
//     document.querySelector('div').style.display = "block";
// },5000);


// var  i = 1;

// setTimeout(function(){
//     document.querySelector('h1').innerHTML = i++;
// },1000);


///////////////////////////////////
// SetInternal  : Infinite Time : 

// setInterval(function,time);
// var  i = 1;

// setInterval(
//     function (){
//         document.querySelector('h1').innerHTML = i++;
//     }
// ,1000);


const start  = document.querySelectorAll('button')[0];
const end  = document.querySelectorAll('button')[1];

var i = 0;
var id;

start.onclick =  function (){
    id = setInterval(
        function (){
            document.querySelector('h1').innerHTML = i++;
        }
    ,1000);
}

end.onclick = function (){
    clearInterval(id);
}


//    count-down   :   10 sec 
//    display yor Image  
