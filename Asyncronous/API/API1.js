const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(myfu);
    }else{
        console.log("Location Decline !!");
    }
});

function myfu(mylocation){
    console.log(mylocation.coords.latitude);
    console.log(mylocation.coords.longitude);
}







