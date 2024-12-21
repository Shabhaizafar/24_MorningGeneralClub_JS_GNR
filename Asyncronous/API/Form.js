const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click',function(event){
    event.preventDefault();
    if(!input.checkValidity()){
        document.querySelector('span').innerHTML = input.validationMessage;
    }else{
        document.querySelector('span').innerHTML = "Marks Correct";
    }

});