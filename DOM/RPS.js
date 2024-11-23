const sectionBtn = document.querySelector('.btns');
const u_choice = document.querySelector('div.u-choice');
const c_chioce = document.querySelector('div.c-choice');
const allChoice = ["url(rock.jpg)","url(paper.jpg)","url(scissior.jpg)"];
var u_point = document.querySelector('.u-point').innerText;
var c_point = document.querySelector('.c-point').innerText;
        //           0                  1                  2
var i;
var counter = 0;
sectionBtn.onclick = function(event){
    i = parseInt(Math.random()*3);
    c_chioce.style.backgroundImage = allChoice[i];
    if(event.target.value == 'rock'){
        u_choice.style.backgroundImage = "url(rock.jpg)";
        if(i==2) {
            u_point++;
            document.querySelector('.u-point').innerHTML = u_point;
            counter++;
        }else if(i==1){
            c_point++;
            document.querySelector('.c-point').innerHTML = c_point;
            counter++;
        }else{
            console.log("draw");
        }
    }else if(event.target.value == 'paper'){
        u_choice.style.backgroundImage = "url(paper.jpg)";
        if(i==0) {
            u_point++;
            document.querySelector('.u-point').innerHTML = u_point;
            counter++;
        }else if(i==2){
            c_point++;
            document.querySelector('.c-point').innerHTML = c_point;
            counter++;
        }else{
            console.log("draw");
        }
    }else if(event.target.value == 'scissior'){
        u_choice.style.backgroundImage = "url(scissior.jpg)";
        if(i==1) {
            u_point++;
            document.querySelector('.u-point').innerHTML = u_point;
            counter++;
        } else if(i==0){
            c_point++;
            document.querySelector('.c-point').innerHTML = c_point;
            counter++;
        }else{
            console.log("draw");
        }        
    }
    console.log(counter);
    if(counter==5){
        document.querySelector('article').style.display= "flex";
    }
}